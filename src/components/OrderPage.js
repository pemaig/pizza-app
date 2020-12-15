import React, { Component } from 'react';
import { Alert, Button, Card, Form, Spinner } from 'react-bootstrap';
import UserContext from '../contexts/UserContext';
import { ERROR_MESSAGE, FIREBASE_ORDERS_URL } from '../utils/consts';

class OrderPage extends Component {
    static contextType = UserContext;

    state = {
        name: '',
        address: '',
        phone: '',
        isLoading: false,
        responseMessage: '',
    };

    handleNameChange = (e) => {
        this.setState({ name: e.target.value });
    };

    handleAddressChange = (e) => {
        this.setState({ address: e.target.value });
    };

    handlePhoneChange = (e) => {
        this.setState({ phone: e.target.value });
    };

    handleGoBackToCart = () => this.props.history.goBack();

    handleMakeAnOrder = async () => {
        const { cart, totalPrice, userToken, isAuthenticated } = this.context;
        const { name, address, phone } = this.state;
        const body = {
            userToken: isAuthenticated && userToken,
            cart: cart,
            totalPrice: totalPrice,
            customerData: {
                name: name,
                address: address,
                phone: phone,
            },
        };

        this.setState({ isLoading: true });

        try {
            let response = await fetch(FIREBASE_ORDERS_URL, {
                method: 'POST',
                body: JSON.stringify(body),
            });
            if (response.ok) {
                this.setState({
                    name: '',
                    address: '',
                    phone: '',
                    responseMessage: 'Thank you for your order!',
                });
                this.context.clearCart();
            }
        } catch (err) {
            this.setState({
                responseMessage: ERROR_MESSAGE,
            });
        } finally {
            this.setState({ isLoading: false });
        }
    };

    render() {
        const { name, address, phone, isLoading, responseMessage } = this.state;
        return (
            <Card className="custom-card-width custom-card-height mt-5 ml-auto mr-auto">
                <Card.Body>
                    {isLoading ? (
                        <div className="text-center">
                            <Spinner
                                className="custom-spinner"
                                animation="border"
                                role="status"
                            />
                        </div>
                    ) : (
                        <Card.Title className="text-center">Order</Card.Title>
                    )}
                    {responseMessage && (
                        <Alert variant="primary">{responseMessage}</Alert>
                    )}
                    <Form>
                        <Form.Group controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                disabled={isLoading}
                                type="text"
                                placeholder="Enter your name"
                                value={name}
                                onChange={this.handleNameChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="address">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                disabled={isLoading}
                                type="text"
                                placeholder="Enter your address"
                                value={address}
                                onChange={this.handleAddressChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="phone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                                disabled={isLoading}
                                type="tel"
                                pattern="[0-9]{10}"
                                placeholder="Enter your phone"
                                value={phone}
                                onChange={this.handlePhoneChange}
                            />
                        </Form.Group>
                    </Form>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-center">
                    <Button
                        variant="dark"
                        bg="dark"
                        className=" mr-4"
                        disabled={isLoading}
                        onClick={this.handleGoBackToCart}
                    >
                        Go back to Cart
                    </Button>
                    <Button
                        variant="dark"
                        bg="dark"
                        disabled={isLoading}
                        onClick={this.handleMakeAnOrder}
                    >
                        Make an Order
                    </Button>
                </Card.Footer>
            </Card>
        );
    }
}

export default OrderPage;
