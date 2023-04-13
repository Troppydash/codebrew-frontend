import "./navbar.css";
import icon from '../assets/react.svg';
import {Link} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../lib/auth.js";

export default function Navbar() {
    const {auth} = useContext(AuthContext);

    return <div className="navbar">
        <Link className="navbar__icon" to="/">
            <img src={icon} alt="icon"/>
        </Link>
        <div className="navbar__title"><span>Food For You</span></div>
        <div className="navbar__spacer"></div>
        <div className="navbar__menu"></div>
        <div className="navbar__action">
            <Link to="/" className="cb-link">Home</Link>
            <Link to="/edit" className="cb-link">Edit</Link>
            <Link to="/view" className="cb-link">View</Link>
            {
                auth.authenticated
                    ? <Link to="/logout" className="cb-link">Log Out</Link>
                    : <Link to="/login" className="cb-link">Log In</Link>
            }
        </div>
    </div>
}
