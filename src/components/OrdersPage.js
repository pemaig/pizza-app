import React, { Component } from 'react';
import UserContext from '../contexts/UserContext';
import { ERROR_MESSAGE, FIREBASE_ORDERS_URL } from '../utils/consts';
import OrderListItem from './OrderListItem';
import { Alert, ListGroup, Spinner } from 'react-bootstrap';

class OrdersPage extends Component {
    static contextType = UserContext;

    state = {
        isLoading: false,
        orders: [],
        hasError: false,
    };

    async componentDidMount() {
        const queryParams = `?orderBy="userToken"&equalTo="${this.context.userToken}"`;

        try {
            this.setState({ isLoading: true });
            const response = await fetch(FIREBASE_ORDERS_URL + queryParams);
            const data = await response.json();
            this.setState({ orders: Object.values(data) });
        } catch (err) {
            this.setState({ hasError: true });
        } finally {
            this.setState({ isLoading: false });
        }
    }

    render() {
        const { orders, isLoading, hasError } = this.state;

        return (
            <>
                {isLoading ? (
                    <div className="text-center mt-5">
                        <Spinner
                            className="custom-spinner"
                            animation="border"
                            role="status"
                        />
                    </div>
                ) : (
                    <>
                        {hasError ? (
                            <div className="mt-5 ml-auto mr-auto w-50">
                                <Alert variant="primary">{ERROR_MESSAGE}</Alert>
                            </div>
                        ) : (
                            <ListGroup className="mt-5 ml-auto mr-auto w-50">
                                {orders.map((item, index) => (
                                    <OrderListItem
                                        key={index}
                                        cart={item.cart}
                                        totalPrice={item.totalPrice}
                                    />
                                ))}
                            </ListGroup>
                        )}
                    </>
                )}
            </>
        );
    }
}

export default OrdersPage;
