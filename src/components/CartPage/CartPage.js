import React, {Component} from 'react';
import {Badge, Button, Card, ListGroup} from "react-bootstrap";
import UserContext from "../../contexts/UserContext";

class CartPage extends Component {
    static contextType = UserContext

    state = {
        pizzaItems: {}
    }

    renderList = () => {
        const {addToCart, removeFromCart, cart} = this.context
        let pizzaItemsList = []

        for (const pizzaName in cart) {
            pizzaItemsList.push(
                <ListGroup.Item key={pizzaName} className="d-flex justify-content-between align-items-center">
                    <span>{pizzaName}</span>
                    <div>
                        <Badge
                            onClick={() => removeFromCart(pizzaName)}
                            variant="dark"
                            className="pl-3 pr-3 pb-2 pb-2 mr-2"
                        >
                            -
                        </Badge>
                        {cart[pizzaName]}
                        <Badge
                            onClick={() => addToCart(pizzaName)}
                            variant="dark"
                            className="pl-3 pr-3 pb-2 pb-2 ml-2"
                        >
                            +
                        </Badge>
                    </div>
                </ListGroup.Item>
            )
        }

        return pizzaItemsList
    }

    render() {
        return (
            <Card className="custom-card mt-5 ml-auto mr-auto">
                <Card.Body>
                    <Card.Title className="text-center">
                        Your Cart
                    </Card.Title>
                    <ListGroup variant="flush">
                        {this.renderList()}
                    </ListGroup>
                    <Card.Text className="mt-4">Total Price:</Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-center">
                    <Button variant="dark" bg="dark" className="mr-4">Order</Button>
                    <Button variant="dark" bg="dark" onClick={this.context.clearCart}>Clear</Button>
                </Card.Footer>
            </Card>
        );
    }
}

export default CartPage;