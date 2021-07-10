import React, { useContext, useState, useEffect } from 'react';
import UserContext from '../../contexts/UserContext';
import { ERROR_MESSAGE, FIREBASE_ORDERS_URL } from '../../utils/consts';
import OrderListItem from './OrderListItem';
import { Alert, ListGroup } from 'react-bootstrap';
import Spinner from '../Spinner';

const OrdersPage = () => {
    const { userToken } = useContext(UserContext);

    const [isLoading, setIsLoading] = useState(false);
    const [orders, setOrders] = useState([]);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        async function Fetch() {
            const queryParams = `?orderBy="userToken"&equalTo="${userToken}"`;

            try {
                setIsLoading(true);

                const response = await fetch(FIREBASE_ORDERS_URL + queryParams);
                const data = await response.json();

                setOrders(Object.values(data));
            } catch (err) {
                setHasError(true);
            } finally {
                setIsLoading(false);
            }
        }

        Fetch();
    }, [userToken]);

    return (
        <>
            {isLoading ? (
                <div className="text-center mt-5">
                    <Spinner />
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
};

export default OrdersPage;
