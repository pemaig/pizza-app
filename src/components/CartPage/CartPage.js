import React, {Component} from 'react';
import {Badge, Button, Card, ListGroup} from "react-bootstrap";
import UserContext from "../../contexts/UserContext";

class CartPage extends Component {
    static contextType = UserContext

    state = {
        pizzaItems: {}
    }

    componentDidMount() {
        let cart = JSON.parse(localStorage.getItem('cart'))
        this.setState({pizzaItems: cart}, () => console.log(this.state))
    }

    renderList = () => {
        const {pizzaItems} = this.state
        let pizzaItemsList = []

        for (const pizzaName in pizzaItems) {
            pizzaItemsList.push(
                <ListGroup.Item key={pizzaName}>
                    {pizzaName}
                    <Badge pill>
                        {[pizzaItems[pizzaName]]}
                    </Badge>
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
                    <ListGroup>
                        {this.renderList()}
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