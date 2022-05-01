import React, {useState} from 'react';
import {Button, Container, Form} from "react-bootstrap";
import axios from "axios";
import {getUser} from "../../utils/user";
import {useNavigate} from "react-router-dom";

const AddQuestion = () => {

    const navigate = useNavigate();

    const [title, setTitle] = useState();
    const [text, setText] = useState();

    const handleAddQuestion = async () => {
        try {
            const user = getUser();
            await axios.post('http://localhost:5000/questions/add', {title,text, userID: user._id});
            navigate('/myquestions');
        } catch(e) {
            console.log(e?.response?.message);
        }
    }

    return (
        <Container fluid="sm" className="mt-4">
            <h3>Add a question</h3>
            <div className="form-group">
                <label>Title</label>
                <input type="text" className="form-control"
                       placeholder="Enter title" onChange={(e) => setTitle(e.target.value)}/>
            </div>

            <div className="form-group">
                <label>Text</label>
                <input type="text" className="form-control"
                       placeholder="Enter text" onChange={(e) => setText(e.target.value)}/>
            </div>
            <Button onClick={handleAddQuestion} className="mt-2">
                Add question
            </Button>
        </Container>
    );
};

export default AddQuestion;
