import { useContext, useEffect, useState } from 'react';
import './AddTask.css'
import { UserContext } from '../../Providers/AuthProviders';

const AddTask = () => {
    const { user } = useContext(UserContext);
    const [tasks, setTasks] = useState([]);

    const handleAddTask = (event) => {
        event.preventDefault();
        const form = event.target;
        const task = form.task.value;
        const newTask = { task, email: user.email }

        fetch('http://localhost:5000/add-task', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTask)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    const handleDeleteTask = (id) => {
        fetch(`http://localhost:5000/delete-task/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    useEffect(() => {
        fetch(`http://localhost:5000/task/${user.email}`)
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [user])

    return (
        <div className="task-container">
            <form onSubmit={handleAddTask} className='add'>
                <input type="text" name="task" id="" />
                <button type='submit'>Add Task</button>
            </form>
            {
                tasks.map(task =>
                    <div className='task' key={task._id}>
                        <h2>{task.task}</h2>
                        <div>
                            <button>complete</button>
                            <button onClick={()=> handleDeleteTask(task._id)}>delete</button>
                        </div>
                    </div>
                )
            }
            <div className='task'>
                <h2>task 1</h2>
                <div>
                    <button>complete</button>
                    <button>complete</button>
                </div>
            </div>
            <div className='task'>
                <h2>task 1</h2>
                <div>
                    <button>complete</button>
                    <button>complete</button>
                </div>
            </div>
        </div>
    );
};

export default AddTask;