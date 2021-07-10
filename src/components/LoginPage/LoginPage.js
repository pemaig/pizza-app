import React, { useState, useContext, useEffect } from 'react';
import { Alert, Button, Card, Form } from 'react-bootstrap';
import { logIn, signIn } from '../../utils/fireApp';
import { ROUTES } from '../../utils/consts';
import UserContext from '../../contexts/UserContext';
import { Redirect } from 'react-router';
import Email from './Email';
import Password from './Password';
import PasswordConfirmation from './PasswordConfirmation';
import Spinner from '../Spinner';

const EMPTY_STRING = '';

const LoginPage = ({ history }) => {
    const context = useContext(UserContext);

    const [isMounted, setIsMounted] = useState(false);
    const [isLoginMode, setIsLoginMode] = useState(true);
    const [email, setEmail] = useState(EMPTY_STRING);
    const [password, setPassword] = useState(EMPTY_STRING);
    const [passwordConfirmation, setPasswordConfirmation] = useState(
        EMPTY_STRING,
    );
    const [error, setError] = useState(EMPTY_STRING);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        return () => setIsMounted(false);
    });

    const handleLoginPageMode = () => {
        setIsLoginMode(!isLoginMode);
        setError(EMPTY_STRING);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handlePasswordConfirmation = (e) => {
        setPasswordConfirmation(e.target.value);
    };

    const handleSubmit = async () => {
        // TODO добавить валидацию полей перед отправкой на сервер

        try {
            setIsLoading(true);
            setError(EMPTY_STRING);

            if (isLoginMode) {
                await logIn(email, password);
            } else {
                if (password !== passwordConfirmation) {
                    setError('Passwords are different');
                    return;
                }
                await signIn(email, password);
            }

            if (!isMounted) return;

            history.push(ROUTES.HOME);
        } catch (err) {
            // TODO: clear input fields if error
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    if (!isMounted) {
        return null;
    }
    if (context.isAuthenticated) {
        return <Redirect to={ROUTES.HOME} />;
    } else {
        return (
            <Card className="custom-card-width mt-5 ml-auto mr-auto">
                <Card.Body>
                    {isLoading ? (
                        <div className="text-center">
                            <Spinner />
                        </div>
                    ) : (
                        <Card.Title className="text-center">
                            {isLoginMode ? 'Log In' : 'Sign Up'}
                        </Card.Title>
                    )}
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form>
                        <Email
                            emailValue={email}
                            isDisabled={isLoading}
                            onChangeHandler={handleEmail}
                        />
                        <Password
                            passwordValue={password}
                            isDisabled={isLoading}
                            onChangeHandler={handlePassword}
                        />
                        {!isLoginMode && (
                            <PasswordConfirmation
                                passwordConfirmationValue={passwordConfirmation}
                                onChangeHandler={handlePasswordConfirmation}
                            />
                        )}
                        <Button
                            variant="primary"
                            className="w-100"
                            onClick={handleSubmit}
                            disabled={isLoading}
                        >
                            {isLoginMode ? 'Log In' : 'Sign Up'}
                        </Button>
                        <Button
                            variant="secondary"
                            className="w-100 mt-2"
                            onClick={handleLoginPageMode}
                            disabled={isLoading}
                        >
                            {isLoginMode
                                ? 'Create an account'
                                : 'I have an account'}
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        );
    }
};

export default LoginPage;
