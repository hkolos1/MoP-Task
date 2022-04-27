import React from "react";


const EditProfile = () => {

    return (
        <div className="inner">
            <form>
                <h3>Edit Profile</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control"/>
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control"/>
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control"/>
                </div>

                <div><br></br></div>
                <button className="btn btn-secondary btn-block">Save changes</button>
            </form>
        </div>
    )
}

export default EditProfile;
