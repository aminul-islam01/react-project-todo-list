import './AddTask.css'

const AddTask = () => {
    
    const handleAddTask = (event) => {
        event.preventDefault();
        const form = event.target;
        const task = form.task.value;
        const newTask = {task}

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

    return (
        <div className="task-container">
            <form onSubmit={handleAddTask} className='add'>
                <input type="text" name="task" id="" />
                <button type='submit'>Add Task</button>
            </form>
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