import React, {useEffect, useState} from "react";
import axios from "axios";
import {getUser} from "../../utils/user";
import {useNavigate} from "react-router-dom";
import swal from 'sweetalert';


const ChangePassword = () => {

    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const user = getUser();
        if(!user) navigate('/login');
    }, []);

    const handleChangePassword =async (e) => {
        try {
            e.preventDefault();
            const user = getUser();
            console.log({oldPassword, newPassword})
            if(confirmNewPassword !== newPassword) {
                setError('Passwords dont match');
                console.log('error');
                return;
            }
            await axios.post('https://mop-backend-task.onrender.com/users/edit/password/' + user._id, {
                newPw: newPassword,
                oldPw: oldPassword
            });
            swal(
                'Success!',
                'You successfully changed your password!',
                'success');
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="inner">
            <h3>Change Password</h3>

            <div className="form-group">
                <label>Old password</label>
                <input value={oldPassword} onChange={(e) => setOldPassword(e.target.value)}
                       type="password" className="form-control"/>
            </div>

            <div className="form-group">
                <label>New password</label>
                <input value={newPassword} onChange={(e) => setNewPassword(e.target.value)}
                       type="password" className="form-control"/>
            </div>

            <div className="form-group">
                <label>Confirm new password</label>
                <input value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)}
                       type="password" className="form-control"/>
            </div>

            <div><br></br></div>
            <button onClick={handleChangePassword} className="btn btn-secondary btn-block">Submit</button>
        </div>
    )
}

export default ChangePassword;
