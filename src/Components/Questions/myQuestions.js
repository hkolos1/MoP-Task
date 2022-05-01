import React, {useEffect, useState} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {getUser} from "../../utils/user";
import axios from "axios";
import dateFormat from "date-format";

const MyQuestions = () => {
    const navigate = useNavigate();

    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        const user = getUser();
        if(!user) {
            navigate('/login');
        } else {
            const id = user._id;
            (async () => {
                try {
                    const {data} = await axios.get('http://localhost:5000/questions/my-questions/' + id);
                    setQuestions(data);
                }catch(e) {
                    console.log(e?.response?.message);
                }

            })();
        }
    }, []);

    return (
        <Container fluid="sm" className="py-4">
            <Row>
                <Col>
                    <h3>My Questions</h3>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center">
                    <Button onClick={() => navigate("/add-question")}>Add question</Button>
                </Col>
            </Row>
            {questions.map((question, index) => <Col key={index}>
                <Row>
                    <Col style={{fontSize: 20, padding: 5}}><strong>{question.title}: </strong>{question.text}
                        <i style={{fontSize: 14}}> ({dateFormat('dd. MM. yyyy, hh:mm:ss', new Date(question.date))})</i></Col>
                </Row>
            </Col>)}

        </Container>
    );
};

export default MyQuestions;
