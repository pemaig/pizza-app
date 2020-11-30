import React, { Component } from 'react';
import { Button, Card, Form } from 'react-bootstrap';

class OrderPage extends Component {
    state = {
        name: '',
        address: '',
        phone: '',
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

    goBackToCart = () => this.props.history.goBack();
    render() {
        const { name, address, phone } = this.state;
        return (
            <Card className="custom-card mt-5 ml-auto mr-auto">
                <Card.Body>
                    <Card.Title className="text-center">Order Data</Card.Title>
                    <Card.Text className="mt-4">Total Price:</Card.Text>
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
                </Card.Body>
                <Card.Footer className="d-flex justify-content-center">
                    <Button
                        variant="dark"
                        bg="dark"
                        className=" mr-4"
                        onClick={this.goBackToCart}
                    >
                        Go back to Cart
                    </Button>
                    <Button variant="dark" bg="dark">
                        Make an Order
                    </Button>
                </Card.Footer>
            </Card>
        );
    }
}

export default OrderPage;
