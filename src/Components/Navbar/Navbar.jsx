import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
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
                {/* {
                    user && <span className='user'>Well come {user.email} <button onClick={handleLogOut}>Log out</button></span>
                } */}
            </div>
        </nav>
    );
};

export default Navbar;