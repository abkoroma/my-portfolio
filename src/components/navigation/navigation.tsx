import { Link, useLocation } from "react-router-dom";
import "./navigation.css";

export default function Navigation() {
    let location = useLocation();

    return (
        <nav className="navbar">
            <Link to="/" className="logo">ABK</Link>
            <ul className="nav-list">
                <li className={`${location.pathname === "/" ? "active" : ""}`}>
                    <Link to="/">HOME</Link>
                </li>
                <li className={`${location.pathname === "/about" ? "active" : ""}`}>
                    <Link to="/about">ABOUT</Link>
                </li>
                <li className={`${location.pathname === "/projects" ? "active" : ""}`}>
                    <Link to="/projects">PROJECTS</Link>
                </li>
                <li className={`${location.pathname === "/contact" ? "active" : ""}`}>
                    <Link to="/contact">CONTACT</Link>
                </li>
            </ul>
        </nav>
    );
}