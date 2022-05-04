import React, {useEffect, useState} from "react";
import {getUser} from "../../utils/user";
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import swal from 'sweetalert';


const EditProfile = () => {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email,setEmail] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        const user = getUser();
        if(!user) navigate('/login');
        else {
            setName(user.name);
            setSurname(user.surname);
            setEmail(user.email);
        }
    }, []);

    const handleEditProfile = async (e) => {
        try {
            e.preventDefault();
            const user = getUser();

            console.log(user);

            const {data} =  await axios.post('https://mop-backend-task.onrender.com/users/edit/' + user._id, {
                name, surname, email
            });
            swal(
                "Success!",
                "You successfully changed your profile information!",
                "success");

            localStorage.setItem('user', JSON.stringify(data));

        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="inner">
            <h3>Edit Profile</h3>

            <div className="form-group">
                <label>First name</label>
                <input value={name} onChange={(e) => setName(e.target.value)}
                       type="text" className="form-control"/>
            </div>

            <div className="form-group">
                <label>Last name</label>
                <input value={surname} onChange={(e) => setSurname(e.target.value)}
                       type="text" className="form-control"/>
            </div>

            <div className="form-group">
                <label>Email address</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}
                       type="text" className="form-control"/>
            </div>

            <div><br></br></div>
            <button onClick={handleEditProfile} className="btn btn-secondary btn-block">Save changes</button>
        </div>
    )
}

export default EditProfile;
