import React, {Component, useState} from "react";
import '../../App.css';
import './login.css';
import {Link} from "react-router-dom";
import axios from "axios";


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin =  async () => {
        try{
            const {data} = await axios.post('http://localhost:5000/users/login', {
                   email,
                   password
            });
            alert('success');
        } catch(e) {
            alert('fail');
        }
    };

    return (
        <div className="outer">
            <div className="inner">
                <form>
                    <h3>Login</h3>

                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control"
                               placeholder="Enter email" onChange={(e) => setEmail(e.target.event)}/>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control"
                               placeholder="Enter password" onChange={(e) => setPassword(e.target.event)}/>
                    </div>

                    <div><br></br></div>
                    <button  onClick={handleLogin} className="btn btn-secondary btn-block">Submit</button>
                    <p className="forgot-password text-right">
                        Dont have an account? <Link to={'/register'}>Register</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login;
