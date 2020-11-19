import React, {Component} from 'react';
import {Card, Form, Button} from "react-bootstrap";

class LoginPage extends Component {
    state = {
        isLoginMode: true,
        email: '',
        password: '',
        emailError: false,
        passwordError: false
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

    handleSubmit = (e) => {
        console.log(e)
    }

    render() {
        const {
            isLoginMode,
            email,
            password,
            emailError,
            passwordError
        } = this.state;

        return (
            <Card className="mt-5 ml-auto mr-auto" style={{width: 450}}>
                <Card.Body>
                    <Card.Title className="text-center">
                        {isLoginMode ? "Log In" : "Sign Up"}
                    </Card.Title>
                    <Form>
                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
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
                                placeholder="Password"
                                value={password}
                                onChange={this.handlePassword}
                            />
                            <Form.Text className="text-muted">
                                Password should be at least 6 symbols.
                            </Form.Text>
                        </Form.Group>

                        <Button
                            variant="primary"
                            className="w-100"
                            onClick={this.handleSubmit}
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