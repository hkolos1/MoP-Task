import React, {useEffect, useState} from 'react'
import './homepage.css'
import axios from "axios";
import dateFormat from 'date-format';
import {Button, Col, Modal, ModalBody, ModalHeader, Row} from "react-bootstrap";
import {getUser} from "../../utils/user";

const Homepage = () => {

    const [allQuestions, setAllQuestions] = useState([]);
    const [allLikes, setAllLikes] = useState([]);
    const [replyModalOpen, setReplyModalOpen] = useState(false);
    const [selectedQuestion, setSelectedQuestion] = useState({});
    const [reply, setReply] = useState('');

    useEffect(() => {
        (async () => {
            try {
                const {data} = await axios.get('http://localhost:5000/questions');
                setAllQuestions(data);
                const {data: likesData} = await axios.get('http://localhost:5000/likes');
                setAllLikes(likesData);
            } catch(e) {
                console.log(e);
            }
        })();
    }, []);

    const handleSubmitReply = async () => {
        try {
            await axios.post('http://localhost:5000/questions/reply/' + selectedQuestion?._id, {reply});
            const {data} = await axios.get('http://localhost:5000/questions');
            setAllQuestions(data);
            setReply('');
            setSelectedQuestion({});
            setReplyModalOpen(false);
        } catch (e) {
            console.log(e);
        }
    }

    const handleLike = async (questionID) => {
        try {
            const user = getUser();
            await axios.post('http://localhost:5000/likes/add', {
                questionID,
                userID: user._id
            });
            const {data: likesData} = await axios.get('http://localhost:5000/likes');
            setAllLikes(likesData);
        } catch (e) {
            console.log(e);
        }
    }

    const handleDislike = async (questionID) => {
        try {
            const user = getUser();
            const like = allLikes.find(like => like.questionID === questionID && user._id === like.userID);
            console.log({like});
            if(!!like) {
                await axios.delete('http://localhost:5000/likes/' + like._id);
            }
            const {data: likesData} = await axios.get('http://localhost:5000/likes');
            setAllLikes(likesData);
        } catch (e) {
            console.log(e);
        }
    }

    const isQuestionLiked = (questionID) => {
        const user = getUser();
        return !!allLikes.find(like => like.questionID === questionID && like.userID === user._id);
    }

    const calculateLikes = (questionID) => {
        return allLikes.filter(like => like.questionID === questionID)?.length;
    }

    return (
        <div className="parent">
            <div className="row">

                <div className="col-md">
                    <h3>Latest Questions</h3>
                    <ul className="list-group">
                        {allQuestions.map((question,index) => <li key={index} className='list-group-item'>
                            <Row>
                                <Col>
                                    <strong>{question.title}: </strong>{question.text}<i> ({dateFormat('dd. MM. yyyy, hh:mm:ss', new Date(question.date))})</i>
                                    {!question.reply && <Button onClick={() => {
                                        setReplyModalOpen(true);
                                        setSelectedQuestion(question);
                                    }} style={{marginLeft: 10}}>Reply</Button>}
                                </Col>
                                <Col>
                                    {isQuestionLiked(question._id) ?
                                        <Button onClick={() => handleDislike(question._id)}>Unlike</Button> : <Button onClick={() => handleLike(question._id)}>Like</Button>}
                                    <div>Likes: {calculateLikes(question._id)}</div>
                                </Col>
                            </Row>
                            {!!question.reply && <Row>
                                <Col style={{fontSize: 14}}><i>(Reply: {question.reply})</i></Col>
                            </Row>}
                        </li> )}
                    </ul>
                    <br></br>
                    {/*<button className="btn btn-success loadMore">Load More</button>*/}
                    <br></br>
                </div>

                <div className="col-md">
                    <div className="row">

                        <div className="col-md">
                            <h3>People with most answers</h3>
                            <ul className="list-group">
                                <li className="list-group-item">Harun Kološ</li>
                                <li className="list-group-item">John Doe</li>
                                <li className="list-group-item">Jane Doe</li>
                            </ul>
                        </div>

                    </div>
                </div>

                <div className="col-md">
                    <div className="row" >
                        <div className="col-md">
                            <h3>Hot Questions</h3>
                            <ul className="list-group">
                                <li className="list-group-item">What's Your Favorite TV Show?</li>
                                <li className="list-group-item">What Are Your Dreams And Ambitions?</li>
                                <li className="list-group-item">What Would You Rather Throw Away: Love Or Money?</li>
                                <li className="list-group-item">If You Could Be Best Friends With A Celebrity, Who Would It Be?</li>
                                <li className="list-group-item">What Was Your Fondest Memory Of High School?</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={replyModalOpen}>
                <ModalHeader>
                    <div className='w-100 d-flex justify-content-center align-items-center'>
                        {selectedQuestion?.title}
                    </div>
                </ModalHeader>
                <ModalBody>
                    <Row>
                        <Col className='d-flex justify-content-center pb-5'>
                            {selectedQuestion?.text}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <input className='p-3 w-100' type='text' placeholder='Type in reply...' onChange={(e) => setReply(e.target.value)}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='pt-5 d-flex justify-content-center'>
                            <Button className='mx-3' onClick={handleSubmitReply}>Submit</Button>
                            <Button style={{backgroundColor: 'red'}} onClick={() => {
                                setReplyModalOpen(false);
                                setSelectedQuestion({});
                                setReply('');
                            }}>Cancel</Button>
                        </Col>
                    </Row>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default Homepage
