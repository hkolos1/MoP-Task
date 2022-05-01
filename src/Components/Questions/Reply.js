import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import dateFormat from "date-format";

const Reply = ({text, nameSurname, date = Date.now()}) => {
    return <Container className='p-3 w-100 mb-3' style={{border: '1px solid black', borderRadius: 5}}>
        <Row>
            <Col className='d-flex justify-content-start text-start' style={{fontSize: 14}}>
                {text}
            </Col>
        </Row>
        <Row>
            <Col className='d-flex justify-content-end' style={{fontSize: 12}}>
                <strong>{nameSurname}</strong>&nbsp;{dateFormat('dd. MM. yyyy, hh:mm:ss', new Date(date))}
            </Col>
        </Row>
    </Container>;
}

export default Reply;
