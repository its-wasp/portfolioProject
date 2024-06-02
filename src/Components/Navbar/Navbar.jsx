import './Navbar.css';
import logo from '../../assets/logo.svg'
import {Link} from "react-router-dom";
const Navbar = () => {
    return (
        <nav className = 'navbar'>
            <img src={logo} alt = "" />
            <ul className="nav-menu">
                <Link to="/"><li>Home</li></Link>
                <Link to="/about"><li>About Me</li></Link>
                <Link to="/projects"><li>Projects</li></Link>
            </ul>
            <div className="nav-connect">Connect With me</div>

        </nav>
    );
}

export default Navbar;