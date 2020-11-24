import React, {Component} from 'react';
import {Button, Card, ListGroup} from "react-bootstrap";
import UserContext from "../../contexts/UserContext";

class CartPage extends Component {
    static contextType = UserContext

    state = {
        pizzaItems: []
    }

    componentDidMount() {
        let cart = localStorage.getItem('cart').split(' ')
        this.setState({pizzaItems: cart})
    }

    render() {
        const {pizzaItems} = this.state
        return (
            <Card className="custom-card mt-5 ml-auto mr-auto">
                <Card.Body>
                    <Card.Title className="text-center">
                        Your Cart
                    </Card.Title>
                    <ListGroup>
                        {pizzaItems.map((item, index) =>
                            <ListGroup.Item key={index}>
                                {item}
                            </ListGroup.Item>
                        )}
                    </ListGroup>
                    <Card.Text>Total Price:</Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-center">
                    <Button variant="dark" bg="dark" className="mr-4">Order</Button>
                    <Button variant="dark" bg="dark">Clear</Button>
                </Card.Footer>
            </Card>
        );
    }
}

export default CartPage;