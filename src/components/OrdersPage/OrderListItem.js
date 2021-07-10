import React, { memo } from 'react';
import { Badge, ListGroupItem } from 'react-bootstrap';

const OrderListItem = ({ cart, totalPrice }) => {
    const renderPizzaItems = () => {
        const cartItemsArray = Object.entries(cart);

        return cartItemsArray.map((item) => (
            <Badge key={item[0]} variant="primary" className="mr-2">
                {item[0]}: {item[1]}
            </Badge>
        ));
    };

    return (
        <ListGroupItem>
            <h4 className="d-inline-block mr-2">Cart: </h4>
            {renderPizzaItems()}
            <h6>Price: {totalPrice}</h6>
        </ListGroupItem>
    );
};

export default memo(OrderListItem);
