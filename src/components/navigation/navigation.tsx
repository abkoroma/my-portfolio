import { Link } from "react-router-dom";
import "./navigation.css";

export default function Navigation() {

    return (
        <nav className="navbar">
            <Link to="/" className="logo">ABK</Link>
            <ul className="nav-list">
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
                <li><Link to="/projects">PROJECTS</Link></li>
                <li><Link to="/contact">CONTACT</Link></li>
            </ul>
        </nav>
    );
}