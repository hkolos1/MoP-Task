import React from 'react';
import Profile from "./editProfile";
import ChangePassword from "./changePassword";


const MyProfile = () => {

    return (
        <div className="parent">
            <div class="row">

                <div class="col-md-6">
                    <div class="form-row">
                        <Profile></Profile>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="row">
                        <div class="col-md">
                            <div class="form-row">
                                <ChangePassword></ChangePassword>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MyProfile
