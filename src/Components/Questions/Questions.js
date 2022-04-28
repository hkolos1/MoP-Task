import React from 'react';
import {Button} from "react-bootstrap";
import "./questions.css"


const Questions = () => {
    return (
        <div className="parent">
            <div className="col-md">
                <div className="inner">
                    <h3 className="questions">All Questions</h3>
                    <link rel="stylesheet"
                          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"/>
                    <p><b>Title: Postavljeno pitanje?</b></p>
                    <small>Date: 2022-04-28</small>
                    <p>Description: Blabla</p>
                    <p>Posted by: Harun Kološ</p>
                    &nbsp;
                    <Button className="likeBtn"><i className="fa fa-thumbs-up fa-like"></i></Button>
                    &nbsp;
                    <Button className="dislikeBtn"><i className="fa fa-thumbs-down fa-dislike"></i></Button>
                </div>
            </div>
        </div>
    )
}

export default Questions
