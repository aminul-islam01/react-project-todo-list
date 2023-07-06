import { Link } from 'react-router-dom';
import './Navbar.css'
import { useContext } from 'react';
import { UserContext } from '../../Providers/AuthProviders';

const Navbar = () => {
    const { user, setUser, logOut } = useContext(UserContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { 
                setUser(null)
            })
            .catch(error => console.error(error))
    }

    return (
        <nav className='navbar'>
            {/* <img src={logo} alt="" /> */}
            <h2>React App</h2>
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/add-task">Add Task</Link>
                <Link to="/login">Login</Link>
                <Link to="/sign-up">SignUp</Link>
                {
                    user && <span className='user'>Well come {user.email} <button onClick={handleLogOut}>Log out</button></span>
                }
            </div>
        </nav>
    );
};

export default Navbar;