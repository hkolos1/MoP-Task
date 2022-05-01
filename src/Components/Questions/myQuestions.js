import React, {useEffect, useState} from 'react';
import {Button, Col, Container, Modal, ModalBody, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {getUser} from "../../utils/user";
import axios from "axios";
import Question from "./Question";

const MyQuestions = () => {
    const navigate = useNavigate();

    const [questions, setQuestions] = useState([]);
    const [title, setTitle] = useState();
    const [text, setText] = useState();
    const [addModalOpen, setAddModalOpen] = useState(false);
    const [allLikes, setAllLikes] = useState([]);
    const [allDislikes, setAllDislikes] = useState([]);

    const getQuestions = () => {
        const user = getUser();
        if(!user) {
            navigate('/login');
        } else {
            const id = user._id;
            (async () => {
                try {
                    const {data} = await axios.get('https://mop-backend-task.onrender.com/questions/my-questions/' + id);
                    setQuestions(data);
                    const {data: likesData} = await axios.get('https://mop-backend-task.onrender.com/likes');
                    setAllLikes(likesData);
                    const {data: dislikesData} = await axios.get('https://mop-backend-task.onrender.com/dislikes');
                    setAllDislikes(dislikesData);
                }catch(e) {
                    console.log(e?.response?.message);
                }

            })();
        }
    }

    useEffect(() => {
        (async () => {
            await getQuestions();
        })();
    }, []);

    const handleAddQuestion = async () => {
        try {
            const user = getUser();
            const {data} = await axios.post('http://localhost:5000/questions/add', {title, text, userID: user._id});
            setQuestions([data, {...questions}]);
            setText('');
            setTitle('');
            await getQuestions();
        } catch (e) {
            console.log(e?.response?.message);
        }
        setAddModalOpen(false);
    }

    const calculateLikes = (questionID) => {
        return allLikes.filter(like => like.questionID === questionID)?.length;
    }

    const calculateDislikes = (questionID) => {
        return allDislikes.filter(dislike => dislike.questionID === questionID)?.length;
    }


    return (
        <Container>
            <Row>
                <Col style={{fontSize: 30}} className='fw-bold'>My Questions</Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center mb-3">
                    <Button onClick={() => setAddModalOpen(true)}>Add Question</Button>
                </Col>
            </Row>
            {questions.map(question => <Row key={question._id}>
                <Col>
                    <Question likes={calculateLikes(question._id)} dislikes={calculateDislikes(question._id)} id={question._id} title={question.title} text={question.text} date={question.date}/>
                </Col>
            </Row>)}
            <Modal show={addModalOpen} className='pt-3'>
                <ModalBody>
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
                            Add Question
                        </Button>
                    </Container>
                </ModalBody>
            </Modal>
        </Container>
    );
};

export default MyQuestions;
