import React, { Component } from 'react';
import { Button, Card, Container, Form, Spinner } from 'react-bootstrap';
import { FIREBASE_URL } from '../utils/consts';
import UserContext from '../contexts/UserContext';

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
        const { cart, totalPrice } = this.context;
        const body = { cart: cart, totalPrice: totalPrice };

        this.setState({ isLoading: true });

        try {
            let response = await fetch(FIREBASE_URL, {
                method: 'POST',
                body: JSON.stringify(body),
            });
            if (response.ok) {
                this.setState({ responseMessage: 'Thank you for your order!' });
                this.context.clearCart();
            }
        } catch (err) {
            this.setState({
                responseMessage: 'Sorry. Something goes wrong :(',
            });

            console.log(err.message);
        } finally {
            this.setState({ isLoading: false });
        }
    };

    render() {
        const { name, address, phone, isLoading } = this.state;
        const { totalPrice } = this.context;
        return (
            <Card className="custom-card mt-5 ml-auto mr-auto">
                <Card.Body>
                    <Card.Title className="text-center">Order</Card.Title>
                    {isLoading ? (
                        <Container className="w-100 h-100 d-flex justify-content-center align-items-center">
                            <Spinner
                                className="custom-spinner"
                                animation="border"
                                role="status"
                            />
                        </Container>
                    ) : (
                        <>
                            <Card.Text className="mt-4">
                                Total Price: {totalPrice}
                            </Card.Text>
                            <Form>
                                <Form.Group controlId="name">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your name"
                                        value={name}
                                        onChange={this.handleNameChange}
                                    />
                                </Form.Group>
                                <Form.Group controlId="address">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your address"
                                        value={address}
                                        onChange={this.handleAddressChange}
                                    />
                                </Form.Group>
                                <Form.Group controlId="phone">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control
                                        type="tel"
                                        pattern="[0-9]{10}"
                                        placeholder="Enter your phone"
                                        value={phone}
                                        onChange={this.handlePhoneChange}
                                    />
                                </Form.Group>
                            </Form>
                        </>
                    )}
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
