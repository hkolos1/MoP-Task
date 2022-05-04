import React, {useEffect, useState} from "react";
import '../../App.css';
import './login.css';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {getUser} from "../../utils/user";


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        if(getUser()) navigate('/homepage');
    }, []);

    const handleLogin =  async () => {
        try{
            const {data} = await axios.post('https://mop-backend-task.onrender.com/users/login', {
                email,
                password
            });
            localStorage.setItem('user', JSON.stringify(data.user));
            navigate('/homepage');
        } catch(e) {
            setError(e?.response?.data?.message || 'Something went wrong');
        }
    };

    return (
        <div className="outer">
            <div className="inner">
                <h3>Login</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control"
                           placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" pattern=".{5,}"
                           placeholder="Enter password" onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <div><br></br></div>
                {!!error && <div style={{color: 'red'}}>{error}</div>}
                <div><br></br></div>
                <button  onClick={handleLogin} className="btn btn-secondary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Dont have an account? <Link to={'/register'}>Register</Link>
                </p>
            </div>
        </div>
    )
}

export default Login;
