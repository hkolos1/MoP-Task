import React from 'react'
import axios from "axios";
import {Link} from "react-router-dom";


const Nav = (props) => {
    const logout = () => {
        axios.post("",
            { withCredentials: true },
            {
                headers:
                    { "Context-Type": "application/x-www-form-urlencoded" },
            }
        ).then((res) => {
        })

        props.setName('')
    }

    let menu;

    if (props.name === '') {
        menu = (
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link className="nav-link" to={"/homepage"}>Home</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to={"/register"}>Register</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to={"/login"}>Login</Link>
                </li>

            </ul>
        )
    }

    else {
        menu = (
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link className="nav-link" to={"/homepage"}>Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={"/myquestions"}>My Questions</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={"/questions"}>Questions</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={"/profile"}>Profile</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={"/login"} onClick={logout}>Logout</Link>
                </li>
            </ul>
        )
    }

    return (
        <nav className="navbar navbar-expand-md navbar-light">
            <div className="container">
                <Link className="navbar-brand" to={"/homepage"}>MoP Task</Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    {menu}
                </div>
            </div>
        </nav>
    )
}

export default Nav
