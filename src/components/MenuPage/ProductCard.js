import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';
import UserContext from '../../contexts/UserContext';

class ProductCard extends Component {
    static contextType = UserContext;

    render() {
        const { addToCart, removeFromCart } = this.context;
        const {
            pizzaType: { name, price, img },
        } = this.props;

        return (
            <Card className="mt-5">
                <Card.Body>
                    <Card.Img variant="top" src={img} alt={name} />
                    <Card.Text className="mt-2 font-weight-bold">
                        Price: <span className="custom-span">{price}</span> $
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-center">
                    <Button
                        variant="dark"
                        bg="dark"
                        className="mr-4"
                        onClick={() => addToCart(name)}
                    >
                        Add
                    </Button>
                    <Button
                        variant="dark"
                        bg="dark"
                        onClick={() => removeFromCart(name)}
                    >
                        Delete
                    </Button>
                </Card.Footer>
            </Card>
        );
    }
}

export default ProductCard;
