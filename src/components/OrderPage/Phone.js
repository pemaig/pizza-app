import React from 'react';
import { Form } from 'react-bootstrap';

const Phone = ({ phoneValue, isDisabled, onChangeHandler }) => {
    return (
        <Form.Group controlId="name">
            <Form.Label>Phone</Form.Label>
            <Form.Control
                disabled={isDisabled}
                type="tel"
                pattern="[0-9]{10}"
                placeholder="Enter your phone"
                value={phoneValue}
                onChange={onChangeHandler}
            />
        </Form.Group>
    );
};

export default Phone;
