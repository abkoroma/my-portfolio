import { Link, NavLink } from "react-router-dom";
import "./navigation.css";


export default function Navigation() {

    return (
        <nav className="navbar">
            <Link to="/" className="logo">ABK</Link>
            <ul className="nav-list">
                <li>
                    <NavLink to="/">HOME</NavLink>
                </li>
                <li>
                    <NavLink to="/about">ABOUT</NavLink>
                </li>
                <li>
                    <NavLink to="/projects">PROJECTS</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">CONTACT</NavLink>
                </li>
            </ul>
        </nav>
    );
}