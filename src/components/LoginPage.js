import React, { Component } from 'react';
import { Alert, Button, Card, Form } from 'react-bootstrap';
import { logIn, signIn } from '../utils/fireApp';
import { ROUTES } from '../utils/consts';
import UserContext from '../contexts/UserContext';
import { Redirect } from 'react-router';
import Email from './Email';
import Password from './Password';
import PasswordConfirmation from './PasswordConfirmation';
import Spinner from './Spinner';

class LoginPage extends Component {
    static contextType = UserContext;

    state = {
        isLoginMode: true,
        email: '',
        password: '',
        passwordConfirmation: '',
        error: '',
        isLoading: false,
    };

    handleLoginPageMode = () => {
        this.setState({ isLoginMode: !this.state.isLoginMode, error: '' });
    };

    handleEmail = (e) => {
        this.setState({ email: e.target.value });
    };

    handlePassword = (e) => {
        this.setState({ password: e.target.value });
    };

    handlePasswordConfirmation = (e) => {
        this.setState({ passwordConfirmation: e.target.value });
    };

    handleSubmit = async () => {
        // TODO добавить валидацию полей перед отправкой на сервер
        const {
            email,
            password,
            passwordConfirmation,
            isLoginMode,
        } = this.state;
        const { history } = this.props;

        try {
            this.setState({ isLoading: true, error: '' });

            if (isLoginMode) {
                await logIn(email, password);
                history.push(ROUTES.HOME);
            } else {
                if (password !== passwordConfirmation) {
                    this.setState({ error: 'Passwords are different' });
                    return;
                }
                await signIn(email, password);
                history.push(ROUTES.HOME);
            }
        } catch (err) {
            // TODO: clear input fields if error
            this.setState({ error: err.message });
        } finally {
            this.setState({ isLoading: false });
        }
    };

    render() {
        const {
            isLoginMode,
            email,
            password,
            error,
            isLoading,
            passwordConfirmation,
        } = this.state;

        const title = isLoginMode ? 'Log In' : 'Sign Up';

        return this.context.isAuthenticated ? (
            <Redirect to={ROUTES.HOME} />
        ) : (
            <Card className="custom-card-width mt-5 ml-auto mr-auto">
                <Card.Body>
                    {isLoading ? (
                        <div className="text-center">
                            <Spinner />
                        </div>
                    ) : (
                        <Card.Title className="text-center">{title}</Card.Title>
                    )}
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form>
                        <Email
                            emailValue={email}
                            isDisabled={isLoading}
                            onChangeHandler={this.handleEmail}
                        />
                        <Password
                            passwordValue={password}
                            isDisabled={isLoading}
                            onChangeHandler={this.handlePassword}
                        />
                        {!isLoginMode && (
                            <PasswordConfirmation
                                passwordConfirmationValue={passwordConfirmation}
                                onChangeHandler={
                                    this.handlePasswordConfirmation
                                }
                            />
                        )}
                        <Button
                            variant="primary"
                            className="w-100"
                            onClick={this.handleSubmit}
                            disabled={isLoading}
                        >
                            {isLoginMode ? 'Log In' : 'Sign Up'}
                        </Button>
                        <Button
                            variant="secondary"
                            className="w-100 mt-2"
                            onClick={this.handleLoginPageMode}
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
}

export default LoginPage;
