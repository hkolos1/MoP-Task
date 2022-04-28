import React from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const MyQuestions = () => {
    const navigate = useNavigate();

    return (
        <Container fluid="sm" className="py-4">
            <Row className="py-4">
                <Col>
                    <h3>My Questions</h3>
                </Col>
                <Col className="d-flex justify-content-end">
                    <Button onClick={() => navigate("/add-question")}>Add question</Button>
                </Col>
                {/*Load data*/}
            </Row>
        </Container>
    );
};

export default MyQuestions;
