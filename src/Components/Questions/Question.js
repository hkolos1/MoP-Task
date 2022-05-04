import React, {useEffect, useState} from 'react';
import {Button, Col, Collapse, Container, Row} from "react-bootstrap";
import dateFormat from "date-format";
import {chevronDown, chevronUp, disliked, liked, notDisliked, notLiked} from "../../assets";
import axios from "axios";
import Reply from "./Reply";
import {getUser} from "../../utils/user";

const Question = (
    {
        id,
        nameSurname,
        text,
        title,
        date = Date.now(),
        showLikes = false,
        isLiked = false,
        isDisliked = false,
        handleLike = () => {},
        handleDislike = () => {},
        handleRemoveLike = () => {},
        handleRemoveDislike = () => {},
        showReply = false,
        likes = 0,
        dislikes = 0
    }
) => {
    const [showReplies, setShowReplies] = useState(false);

    const [replies, setReplies] = useState([]);

    const [reply, setReply] = useState('');

    const handleAddReply = async () => {
        try {
            const user = getUser();
            if(!user) return;
            await axios.post('https://mop-backend-task.onrender.com/replies/add', {
                questionID: id,
                userID: user._id,
                text: reply
            });
            setReply('');
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        (async () => {
            try {
                const {data} = await axios.get('https://mop-backend-task.onrender.com/replies/' + id);
                setReplies(data);
            }catch (e) {
                console.log(e);
            }
        })();
    }, []);

    return <Container className='p-3 w-50 mb-3' style={{border: '1px solid black', borderRadius: 5}}>
        <Row>
            <Col className='d-flex justify-content-start' style={{fontSize: 24}}>
                <strong>{title}</strong>
            </Col>
        </Row>
        <Row>
            <Col className='d-flex justify-content-start text-start' style={{fontSize:20}}>{text}</Col>
        </Row>
        <Row>
            <Col className='d-flex justify-content-start align-items-center mt-3' style={{fontSize:14}}>
                Show Replies <img src={showReplies ? chevronUp : chevronDown} className='icons mx-2'
                                  onClick={() => setShowReplies(!showReplies)}/>
            </Col>
        </Row>
        <Row>
            <Col>
                <Collapse in={showReplies}>
                    <Row className='w-100'>
                        <Col className='w-100 mt-2 text-start'>
                            {replies.map(reply => <Row className='w-100' key={reply._id}>
                                <Col>
                                    <Reply text={reply.text}
                                           nameSurname={reply.nameSurname}
                                           date={reply.date}/>
                                </Col>
                            </Row>)}
                            {!replies.length && <i>No replies</i>}
                        </Col>
                    </Row>
                </Collapse>
            </Col>
        </Row>
        {showReply && <>
            <Row>
                <Col className='d-flex justify-content-start my-1'>
                    <input value={reply} type='text' onChange={(e) => setReply(e.target.value)}/>
                </Col>
            </Row>
            <Row>
                <Col className='d-flex justify-content-start my-1'>
                    <Button onClick={handleAddReply}>Add Reply</Button>
                </Col>
            </Row>
        </>}
        <Row>
            <Col className='d-flex justify-content-end align-items-center' style={{fontSize: 12}}>
                {showLikes && <>
                    <img onClick={() => {
                        if(isLiked) handleRemoveLike();
                        else handleLike();
                    }
                    } src={isLiked ? liked : notLiked} className='icons-2 mx-2'/>
                    <img onClick={() => {
                        if(isDisliked) handleRemoveDislike();
                        else handleDislike();
                    }
                    } src={isDisliked ? disliked : notDisliked} className='icons-2 mx-2'/>
                </>}
                <strong>{nameSurname}</strong>&nbsp;{dateFormat('dd. MM. yyyy, hh:mm:ss', new Date(date))}
            </Col>
        </Row>
        <Row>
            <Col className='text-end'>
                {likes} likes. &nbsp; {dislikes} dislikes.
            </Col>
        </Row>
    </Container>
}

export default Question;
