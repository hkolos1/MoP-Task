import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Question from "./Question";
import axios from "axios";
import {getUser} from "../../utils/user";


const Questions = () => {
    const [allQuestions, setAllQuestions] = useState([]);
    const [allLikes, setAllLikes] = useState([]);
    const [allDislikes, setAllDislikes] = useState([]);

    const handleLike = async (questionID) => {
        try {
            const user = getUser();
            await axios.post('https://mop-backend-task.onrender.com/likes/add', {
                questionID,
                userID: user._id
            });
            const {data: likesData} = await axios.get('https://mop-backend-task.onrender.com/likes');
            setAllLikes(likesData);
        } catch (e) {
            console.log(e);
        }
    }

    const handleRemoveLike = async (questionID) => {
        try {
            const user = getUser();
            const like = allLikes.find(like => like.questionID === questionID && user._id === like.userID);
            if(!!like) {
                await axios.delete('https://mop-backend-task.onrender.com/likes/' + like._id);
            }
            const {data: likesData} = await axios.get('https://mop-backend-task.onrender.com/likes');
            setAllLikes(likesData);
        } catch (e) {
            console.log(e);
        }
    }

    const isQuestionLiked = (questionID) => {
        const user = getUser();
        if(!user) return false;
        return !!allLikes.find(like => like.questionID === questionID && like.userID === user._id);
    }

    const handleDislike = async (questionID) => {
        try {
            const user = getUser();
            await axios.post('https://mop-backend-task.onrender.com/dislikes/add', {
                questionID,
                userID: user._id
            });
            const {data: dislikesData} = await axios.get('https://mop-backend-task.onrender.com/dislikes');
            setAllDislikes(dislikesData);
        } catch (e) {
            console.log(e);
        }
    }

    const handleRemoveDislike = async (questionID) => {
        try {
            const user = getUser();
            const dislike = allDislikes.find(dislike => dislike.questionID === questionID && user._id === dislike.userID);
            if(!!dislike) {
                await axios.delete('https://mop-backend-task.onrender.com/dislikes/' + dislike._id);
            }
            const {data: dislikesData} = await axios.get('https://mop-backend-task.onrender.com/dislikes');
            setAllDislikes(dislikesData);
        } catch (e) {
            console.log(e);
        }
    }

    const isQuestionDisliked = (questionID) => {
        const user = getUser();
        if(!user) return false;
        return !!allDislikes.find(dislike => dislike.questionID === questionID && dislike.userID === user._id);
    }



    const calculateLikes = (questionID) => {
        return allLikes.filter(like => like.questionID === questionID)?.length;
    }

    const calculateDislikes = (questionID) => {
        return allDislikes.filter(dislike => dislike.questionID === questionID)?.length;
    }

    useEffect(() => {
        (async () => {
            try {
                const user = getUser();
                if(!user) return;
                const {data} = await axios.get('https://mop-backend-task.onrender.com/questions/not-my-questions/' + user._id);
                setAllQuestions(data);
                const {data: likesData} = await axios.get('https://mop-backend-task.onrender.com/likes');
                setAllLikes(likesData);
                const {data: dislikesData} = await axios.get('https://mop-backend-task.onrender.com/dislikes');
                setAllDislikes(dislikesData);
            } catch(e) {
                console.log(e);
            }
        })();
    }, []);

    return (
        <Container>
            <Row>
                <Col style={{fontSize: 30}} className='fw-normal'>All Questions</Col>
            </Row>
            {allQuestions.map(question => <Row key={question._id}>
                <Col>
                    <Question
                        id={question._id}
                        title={question.title}
                        text={question.text}
                        date={question.date}
                        isLiked={isQuestionLiked(question._id)}
                        isDisliked={isQuestionDisliked(question._id)}
                        showLikes={true}
                        handleLike={() => handleLike(question._id)}
                        handleRemoveLike={() => handleRemoveLike(question._id)}
                        handleDislike={() => handleDislike(question._id)}
                        handleRemoveDislike={() => handleRemoveDislike(question._id)}
                        showReply={true}
                        likes={calculateLikes(question._id)}
                        dislikes={calculateDislikes(question._id)}
                        nameSurname={question.nameSurname}
                    />
                </Col>
            </Row>)}
        </Container>
    )
}

export default Questions
