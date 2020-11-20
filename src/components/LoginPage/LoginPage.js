import React, {Component} from 'react';
import {Card, Form, Button, Alert} from "react-bootstrap";
import fireApp from "../../utils/fireApp";

class LoginPage extends Component {
    state = {
        isLoginMode: true,
        email: '',
        password: '',
        passwordConfirmation: '',
        hasError: false, //TODO изменить на текст чтобы показывать ошибку
        isLoading: false,
    }

    handleLoginPageMode = () => {
        this.setState({isLoginMode: !this.state.isLoginMode})
    }

    handleEmail = (e) => {
        this.setState({email: e.target.value})
    }

    handlePassword = (e) => {
        this.setState({password: e.target.value})
    }

    handlePasswordConfirmation = (e) => {
        this.setState({passwordConfirmation: e.target.value})
    }

    handleSubmit = async () => {
        const {email, password, passwordConfirmation} = this.state


        if (password !== passwordConfirmation) {
            this.setState({hasError: true})
            console.log('passwords are different')
            return
        }

        try {
            // TODO добавить условие login|signup

            this.setState({isLoading: true, hasError: false})
            await fireApp.auth().createUserWithEmailAndPassword(email, password)
            alert('You are signed up!')
        } catch (err) {
            console.log(err.message)
            this.setState({hasError: true})
        } finally {
            this.setState({isLoading: false})
        }
    }

    render() {
        const {
            isLoginMode,
            email,
            password,
            hasError,
            isLoading,
            passwordConfirmation
        } = this.state;

        return (
            <Card className="mt-5 ml-auto mr-auto" style={{width: 450}}>
                <Card.Body>
                    <Card.Title className="text-center">
                        {isLoginMode ? "Log In" : "Sign Up"}
                    </Card.Title>
                    {hasError && <Alert variant="danger">Something goes wrong :(</Alert>}
                    <Form>
                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={this.handleEmail}
                            />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={this.handlePassword}
                            />
                            <Form.Text className="text-muted">
                                Password should be at least 6 symbols.
                            </Form.Text>
                        </Form.Group>
                        {!isLoginMode && (
                            <Form.Group controlId="password-confirmation">
                                <Form.Label>Password Confirmation</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Please repeat your password"
                                    value={passwordConfirmation}
                                    onChange={this.handlePasswordConfirmation}
                                />
                            </Form.Group>
                        )}

                        <Button
                            variant="primary"
                            className="w-100"
                            onClick={this.handleSubmit}
                            disabled={isLoading}
                        >
                            {isLoginMode ? "Log In" : "Sign Up"}
                        </Button>
                        <Button
                            variant="secondary"
                            className="w-100 mt-2"
                            onClick={this.handleLoginPageMode}
                        >
                            {isLoginMode ? "Create an account" : "I have an account"}
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        );
    }
}

export default LoginPage;