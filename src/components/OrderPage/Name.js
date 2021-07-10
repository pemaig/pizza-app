import React, { memo } from 'react';
import { Form } from 'react-bootstrap';

const Name = ({ nameValue, isDisabled, onChangeHandler }) => (
    <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
            disabled={isDisabled}
            type="text"
            placeholder="Enter your name"
            value={nameValue}
            onChange={onChangeHandler}
        />
    </Form.Group>
);

export default memo(Name);
