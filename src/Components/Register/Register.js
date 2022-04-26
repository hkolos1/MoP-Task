import React from "react";
import '../../App.css';
import '../login/login.css';
import {Link} from "react-router-dom";


const register = () => {
    return (
        <div className="outer">
            <div className="inner">
                <form>
                    <h3>Register</h3>

                    <div className="form-group">
                        <label>First name</label>
                        <input type="text" className="form-control"
                               placeholder="First name" />
                    </div>

                    <div className="form-group">
                        <label>Last name</label>
                        <input type="text" className="form-control"
                               placeholder="Last name" />
                    </div>

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
                    <button type="submit" className="btn btn-secondary btn-block">Register</button>

                    <p className="forgot-password text-right">
                        Already registered? <Link to={'/login'}>Log in</Link>
                    </p>

                </form>
            </div>
        </div>
    )
}

export default register
