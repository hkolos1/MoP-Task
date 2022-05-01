import React, {useEffect, useState} from 'react'
import './homepage.css'
import axios from "axios";
import {Col, Container, Row} from "react-bootstrap";
import Question from "../Questions/Question";

const Homepage = () => {

    const [allQuestions, setAllQuestions] = useState([]);
    const [allLikes, setAllLikes] = useState([]);
    const [allDislikes, setAllDislikes] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const {data} = await axios.get('http://localhost:5000/questions');
                setAllQuestions(data);
                const {data: likesData} = await axios.get('http://localhost:5000/likes');
                setAllLikes(likesData);
                const {data: dislikesData} = await axios.get('http://localhost:5000/dislikes');
                setAllDislikes(dislikesData);
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
        <>
            <div className="parent">
                <div className="row">
                    <div className="col-md-6">
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
                    </div>

                    <div className="col-md">
                    <div className="row">
                        <Container className="container">
                            <Row>
                                <Col style={{fontSize: 25}} className='fw-bold'>People with most answers</Col>
                            </Row>
                            {/*{allQuestions.map(question => <Row key={question._id}>*/}
                            {/*    <Col>*/}
                            {/*    </Col>*/}
                            {/*</Row>)}*/}
                        </Container>
                    </div>
                </div>

                    <div className="col-md">
                        <div className="row">
                            <Container className="container">
                                <Row>
                                    <Col style={{fontSize: 25}} className='fw-bold'>Hot Questions</Col>
                                </Row>
                                {/*{allLikes.map(question => <Row key={question._id}>*/}
                                {/*    <Col>*/}
                                {/*    </Col>*/}
                                {/*</Row>)}*/}
                            </Container>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Homepage
