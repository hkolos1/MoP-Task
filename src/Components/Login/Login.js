import React, { Component } from "react";
import '../../App.css';
import './login.css';
import {Link} from "react-router-dom";


const login = () => {
    return (
        <div className="outer">
            <div className="inner">
                <form>
                    <h3>Login</h3>

                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control"
                               placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control"
                               pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                               placeholder="Enter password" />
                    </div>

                    <div><br></br></div>
                    <button type="submit" className="btn btn-secondary btn-block">Submit</button>
                    <p className="forgot-password text-right">
                        Dont have an account? <Link to={'/register'}>Register</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default login
