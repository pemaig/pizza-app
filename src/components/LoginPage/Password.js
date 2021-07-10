import React, { memo } from 'react';
import { Form } from 'react-bootstrap';

const Password = ({ passwordValue, isDisabled, onChangeHandler }) => (
    <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
            type="password"
            placeholder="Enter your password"
            value={passwordValue}
            disabled={isDisabled}
            onChange={onChangeHandler}
        />
        <Form.Text className="text-muted">
            Password should be at least 6 symbols.
        </Form.Text>
    </Form.Group>
);

export default memo(Password);
