import React, {useEffect, useState} from 'react'
import './homepage.css'
import axios from "axios";
import {Col, Container, Row} from "react-bootstrap";
import Question from "../Questions/Question";

const Homepage = () => {

    const [allQuestions, setAllQuestions] = useState([]);
    const [allLikes, setAllLikes] = useState([]);
    const [allDislikes, setAllDislikes] = useState([]);
    const [peopleWithMostAnswers, setPeopleWithMostAnswers] = useState([]);
    const [hotQuestions, setHotQuestions] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const {data} = await axios.get('https://mop-backend-task.onrender.com/questions');
                setAllQuestions(data);
                const {data: likesData} = await axios.get('https://mop-backend-task.onrender.com/likes');
                setAllLikes(likesData);
                const {data: dislikesData} = await axios.get('https://mop-backend-task.onrender.com/dislikes');
                setAllDislikes(dislikesData);
                const {data: peopleData} = await axios.get('https://mop-backend-task.onrender.com/users/most-answers');
                setPeopleWithMostAnswers(peopleData);
                const {data: hotQuestionsData} = await axios.get('https://mop-backend-task.onrender.com/questions/most-replies');
                setHotQuestions(hotQuestionsData);
            } catch(e) {
                console.log(e);
            }
        })();
    }, []);

    const calculateLikes = (questionID) => {
        return allLikes.filter(like => like.questionID === questionID)?.length;
    }

    const calculateDislikes = (questionID) => {
        return allDislikes.filter(dislike => dislike.questionID === questionID)?.length;
    }

    return (
        <div className="d-flex justify-content-between">
            <Container className="container">
                <Row>
                    <Col style={{fontSize: 25}} className='fw-bold'>Latest Questions</Col>
                </Row>
                {allQuestions.map(question => <Row key={question._id}>
                    <Col>
                        <Question nameSurname={question.nameSurname} likes={calculateLikes(question._id)} dislikes={calculateDislikes(question._id)} id={question._id} title={question.title} text={question.text} date={question.date}/>
                    </Col>
                </Row>)}
            </Container>
            <Container className="container text-center">
                <Row>
                    <Col style={{fontSize: 25}} className='fw-bold'>People with most answers</Col>
                </Row>
                {peopleWithMostAnswers.map(p => <Row key={p._id}>
                    <Col className='d-flex justify-content-center'>
                        <div className='w-50 d-flex justify-content-between p-3 mb-3'  style={{border: '1px solid black', borderRadius: 5}}>
                            <div>{`${p.name} ${p.surname}`}</div>
                            <div>{p.numberOfAnswers}</div>
                        </div>
                    </Col>
                </Row>)}
            </Container>
            <Container className="container">
                <Row>
                    <Col style={{fontSize: 25}} className='fw-bold'>Hot Questions (Most Likes)</Col>
                    {hotQuestions.map(q => <Row key={q._id}>
                        <Col className='d-flex justify-content-center'>
                            <div className='w-50 p-3 mb-3' style={{border: '1px solid black', borderRadius: 5}}>
                                <Row>
                                    <Col className='text-start fw-bold'>
                                        {q.title}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <div  className='d-flex justify-content-between'>
                                            <div className='text-start'>{q.text}</div>
                                            <div className='d-flex align-items-center justify-content-end mx-2'>{q.numberOfLikes}</div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>)}
                </Row>
            </Container>
        </div>
    )
}

export default Homepage
