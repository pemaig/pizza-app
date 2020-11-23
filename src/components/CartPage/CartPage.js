import React, {Component} from 'react';
import {Button, Card} from "react-bootstrap";

class CartPage extends Component {
    render() {
        return (
            <Card className="custom-card mt-5 ml-auto mr-auto">
                <Card.Body>
                    <Card.Title className="text-center">
                        Your Cart
                    </Card.Title>
                    <Card.Text>Items: </Card.Text>
                    <Card.Text>Total Price:</Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-center">
                    <Button variant="dark" bg="dark">Order</Button>
                </Card.Footer>
            </Card>
        );
    }
}

export default CartPage;