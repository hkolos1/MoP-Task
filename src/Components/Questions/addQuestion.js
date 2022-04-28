import React from 'react';
import {Button, Container, Form} from "react-bootstrap";

const AddQuestion = () => {

    return (
        <Container fluid="sm" className="mt-4">
            <h3>Add a question</h3>
                <Form className="mt-4">
                   <p>Input Field soon...</p>
                    <Button type="submit" className="mt-2">
                        Add question
                    </Button>
                </Form>
        </Container>
    );
};

export default AddQuestion;
