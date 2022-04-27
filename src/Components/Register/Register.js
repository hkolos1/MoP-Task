import React, {useState} from 'react';
import '../../App.css';
import '../Login/login.css';
import {Link} from "react-router-dom";

import axios from "axios";


const Register = () => {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister =  async () => {
        try{
            const {data} = await axios.post('http://localhost:5000/users/register', {
                name,
                surname,
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
                    <h3>Register</h3>

                    <div className="form-group">
                        <label>First name</label>
                        <input type="text" className="form-control"
                               placeholder="First name" onChange={(e) => setName(e.target.event)} />
                    </div>

                    <div className="form-group">
                        <label>Last name</label>
                        <input type="text" className="form-control"
                               placeholder="Last name" onChange={(e) => setSurname(e.target.event)} />
                    </div>

                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control"
                               placeholder="Enter email" onChange={(e) => setEmail(e.target.event)} />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control"
                               placeholder="Enter password" onChange={(e) => setPassword(e.target.event)} />
                    </div>

                    <div><br></br></div>
                    <button onClick={handleRegister} className="btn btn-secondary btn-block">Register</button>

                    <p className="forgot-password text-right">
                        Already registered? <Link to={'/login'}>Log in</Link>
                    </p>

                </form>
            </div>
        </div>
    )
}

export default Register
