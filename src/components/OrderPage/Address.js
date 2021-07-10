import React, { memo } from 'react';
import { Form } from 'react-bootstrap';

const Address = ({ addressValue, isDisabled, onChangeHandler }) => (
    <Form.Group controlId="name">
        <Form.Label>Address</Form.Label>
        <Form.Control
            disabled={isDisabled}
            type="text"
            placeholder="Enter your name"
            value={addressValue}
            onChange={onChangeHandler}
        />
    </Form.Group>
);

export default memo(Address);
