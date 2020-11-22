import React, {Component} from 'react';
import {Alert, Button, Card, Form} from "react-bootstrap";
import {logIn, signIn} from "../../utils/fireApp";
import {ROUTES} from "../../utils/consts";
import AuthContext from "../../contexts/AuthContext";
import {Redirect} from "react-router";

// TODO если юзер залогинился то при переходе на /login юезера переводить на MenuPage
class LoginPage extends Component {
    static contextType = AuthContext

    state = {
        isLoginMode: true,
        email: '',
        password: '',
        passwordConfirmation: '',
        error: '',
    }

    handleLoginPageMode = () => {
        this.setState({isLoginMode: !this.state.isLoginMode, error: ''})
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
        // TODO добавить валидацию полей перед отправкой на сервер
        const {email, password, passwordConfirmation, isLoginMode} = this.state
        const {history} = this.props

        try {
            this.setState({isLoading: true, error: ''})

            if (isLoginMode) {
                await logIn(email, password)
                history.push(ROUTES.HOME)
            } else {
                if (password !== passwordConfirmation) {
                    this.setState({error: 'Passwords are different'})
                    return
                }
                await signIn(email, password)
                history.push(ROUTES.HOME)
            }
        } catch (err) {
            this.setState({error: err.message})
        } finally {
            this.setState({isLoading: false})
        }
    }

    render() {
        const {
            isLoginMode,
            email,
            password,
            error,
            isLoading,
            passwordConfirmation
        } = this.state;

        return (
            this.context
                ? (<Redirect to={ROUTES.HOME}/>)
                : (
                    <Card className="custom-card mt-5 ml-auto mr-auto">
                        <Card.Body>
                            <Card.Title className="text-center">
                                {isLoginMode ? "Log In" : "Sign Up"}
                            </Card.Title>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form>
                                <Form.Group controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={this.handleEmail}
                                    />
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
                                    disabled={isLoading}
                                >
                                    {isLoginMode ? "Create an account" : "I have an account"}
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                )
        );
    }
}

export default LoginPage;