import React from 'react';
import { Form } from 'react-bootstrap';

const PasswordConfirmation = ({
    passwordConfirmationValue,
    onChangeHandler,
}) => (
    <Form.Group controlId="password-confirmation">
        <Form.Label>Password</Form.Label>
        <Form.Control
            type="password"
            placeholder="Please repeat your password"
            value={passwordConfirmationValue}
            onChange={onChangeHandler}
        />
        <Form.Text className="text-muted">
            Password should be at least 6 symbols.
        </Form.Text>
    </Form.Group>
);

export default PasswordConfirmation;
