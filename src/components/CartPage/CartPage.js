import React, { useContext } from 'react';
import { Badge, Button, Card, ListGroup } from 'react-bootstrap';
import UserContext from '../../contexts/UserContext';
import { ROUTES } from '../../utils/consts';

const CartPage = ({ history }) => {
    const {
        totalPrice,
        clearCart,
        addToCart,
        removeFromCart,
        cart,
    } = useContext(UserContext);

    const goToOrders = () => {
        // TODO: need to check is card empty?
        history.push(ROUTES.ORDER);
    };

    const renderList = () => {
        let pizzaItemsList = [];

        for (const pizzaName in cart) {
            pizzaItemsList.push(
                <ListGroup.Item
                    key={pizzaName}
                    className="d-flex justify-content-between align-items-center"
                >
                    <span>{pizzaName}</span>
                    <div>
                        <Badge
                            onClick={() => removeFromCart(pizzaName)}
                            variant="dark"
                            className="pl-3 pr-3 pb-2 pb-2 mr-2 btn-cursor"
                        >
                            -
                        </Badge>
                        {cart[pizzaName]}
                        <Badge
                            onClick={() => addToCart(pizzaName)}
                            variant="dark"
                            className="pl-3 pr-3 pb-2 pb-2 ml-2 btn-cursor"
                        >
                            +
                        </Badge>
                    </div>
                </ListGroup.Item>,
            );
        }

        return pizzaItemsList;
    };

    return (
        <Card className="custom-card-height custom-card-width mt-5 ml-auto mr-auto">
            <Card.Body>
                <Card.Title className="text-center">Your Cart</Card.Title>
                <Card.Text className="text-center">
                    Total Price: {totalPrice}
                </Card.Text>
                <ListGroup variant="flush">{renderList()}</ListGroup>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-center">
                <Button
                    variant="dark"
                    bg="dark"
                    className="mr-4"
                    onClick={clearCart}
                >
                    Clear
                </Button>
                <Button variant="dark" bg="dark" onClick={goToOrders}>
                    Go to Order
                </Button>
            </Card.Footer>
        </Card>
    );
};

export default CartPage;
