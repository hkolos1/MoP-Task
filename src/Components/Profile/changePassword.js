import React from "react";


const ChangePassword = () => {

    return (
            <div className="inner">
                <form>
                    <h3>Change Password</h3>

                    <div className="form-group">
                        <label>Old password</label>
                        <input type="password" className="form-control"/>
                    </div>

                    <div className="form-group">
                        <label>New password</label>
                        <input type="password" className="form-control"/>
                    </div>

                    <div className="form-group">
                        <label>Confirm new password</label>
                        <input type="password" className="form-control"/>
                    </div>

                    <div><br></br></div>
                    <button className="btn btn-secondary btn-block">Submit</button>
                </form>
            </div>
    )
}

export default ChangePassword;
