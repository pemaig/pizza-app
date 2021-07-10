import React, { useState, useContext } from 'react';
import { Alert, Button, Card, Form } from 'react-bootstrap';
import UserContext from '../../contexts/UserContext';
import { ERROR_MESSAGE, FIREBASE_ORDERS_URL } from '../../utils/consts';
import Spinner from '../Spinner';
import Name from './Name';
import Address from './Address';
import Phone from './Phone';

const EMPTY_STRING = '';

const OrderPage = ({ history }) => {
    const {
        cart,
        totalPrice,
        userToken,
        isAuthenticated,
        clearCart,
    } = useContext(UserContext);

    const [name, setName] = useState(EMPTY_STRING);
    const [address, setAddress] = useState(EMPTY_STRING);
    const [phone, setPhone] = useState(EMPTY_STRING);
    const [isLoading, setIsLoading] = useState(false);
    const [responseMessage, setResponseMessage] = useState(EMPTY_STRING);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };

    const handleGoBackToCart = () => history.goBack();

    const handleMakeAnOrder = async () => {
        // TODO: добавить проверку полей: имя, адрес, телефон.
        const body = {
            userToken: isAuthenticated && userToken,
            cart: cart,
            totalPrice: totalPrice,
            customerData: {
                name: name,
                address: address,
                phone: phone,
            },
        };

        setIsLoading(true);

        try {
            let response = await fetch(FIREBASE_ORDERS_URL, {
                method: 'POST',
                body: JSON.stringify(body),
            });
            if (response.ok) {
                setName(EMPTY_STRING);
                setAddress(EMPTY_STRING);
                setPhone(EMPTY_STRING);
                setResponseMessage('Thank you for your order!');

                clearCart();
            }
        } catch (err) {
            setResponseMessage(ERROR_MESSAGE);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Card className="custom-card-width custom-card-height mt-5 ml-auto mr-auto">
            <Card.Body>
                {isLoading ? (
                    <div className="text-center">
                        <Spinner />
                    </div>
                ) : (
                    <Card.Title className="text-center">Order</Card.Title>
                )}
                {responseMessage && (
                    <Alert variant="primary">{responseMessage}</Alert>
                )}
                <Form>
                    <Name
                        nameValue={name}
                        isDisabled={isLoading}
                        onChangeHandler={handleNameChange}
                    />
                    <Address
                        isDisabled={isLoading}
                        addressValue={address}
                        onChangeHandler={handleAddressChange}
                    />
                    <Phone
                        isDisabled={isLoading}
                        phoneValue={phone}
                        onChangeHandler={handlePhoneChange}
                    />
                </Form>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-center">
                <Button
                    variant="dark"
                    bg="dark"
                    className=" mr-4"
                    disabled={isLoading}
                    onClick={handleGoBackToCart}
                >
                    Go back to Cart
                </Button>
                <Button
                    variant="dark"
                    bg="dark"
                    disabled={isLoading}
                    onClick={handleMakeAnOrder}
                >
                    Make an Order
                </Button>
            </Card.Footer>
        </Card>
    );
};

export default OrderPage;
