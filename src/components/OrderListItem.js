import React, { PureComponent } from 'react';
import { Badge, ListGroupItem } from 'react-bootstrap';

class OrderListItem extends PureComponent {
    renderPizzaItems = () => {
        const { cart } = this.props;
        const cartItemsArray = Object.entries(cart);

        return cartItemsArray.map((item) => (
            <Badge key={item[0]} variant="primary" className="mr-2">
                {item[0]}: {item[1]}
            </Badge>
        ));
    };

    render() {
        const { totalPrice } = this.props;

        return (
            <ListGroupItem>
                <h4 className="d-inline-block mr-2">Cart: </h4>
                {this.renderPizzaItems()}
                <h6>Price: {totalPrice}</h6>
            </ListGroupItem>
        );
    }
}

export default OrderListItem;
