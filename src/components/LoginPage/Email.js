import React from 'react';
import { Form } from 'react-bootstrap';

const Email = ({ emailValue, isDisabled, onChangeHandler }) => {
    return (
        <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
                type="email"
                placeholder="Enter your email"
                value={emailValue}
                disabled={isDisabled}
                onChange={onChangeHandler}
            />
        </Form.Group>
    );
};

export default Email;
