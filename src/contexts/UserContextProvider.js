import React, { Component } from 'react';
import UserContext from './UserContext';
import fireApp from '../utils/fireApp';
import { PIZZA_TYPES } from '../utils/consts';

class UserContextProvider extends Component {
    state = {
        isAuthenticated: localStorage.getItem('logged'),
        userToken: localStorage.getItem('userToken'),
        cart: {},
        totalPrice: 0,
    };

    // render() {
    //     const {
    //         isLoginMode,
    //         email,
    //         password,
    //         error,
    //         isLoading,
    //         passwordConfirmation,
    //     } = this.state
    //
    //     if (this.context.isLoading) return <Loader />
    //     else if (this.context.isAuthenticated) return <Redirect to={ROUTES.HOME} />
    //     else return <Card className="custom-card mt-5 ml-auto mr-auto">...</Card>
    // }

    componentDidMount() {
        let cartFromLocalStorage = JSON.parse(localStorage.getItem('cart'));
        if (cartFromLocalStorage) {
            this.setState({ cart: cartFromLocalStorage });
        }
        fireApp.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState(
                    { isAuthenticated: true, userToken: user.uid },
                    () => {
                        localStorage.setItem('logged', 'true');
                        localStorage.setItem('userToken', user.uid);
                    },
                );
            } else {
                this.setState({ isAuthenticated: false }, () =>
                    localStorage.removeItem('logged'),
                );
            }
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.cart !== this.state.cart) {
            this.getTotalPrice();
        }
    }

    updateStorage = () => {
        localStorage.setItem('cart', JSON.stringify(this.state.cart));
    };

    addToCart = (item) => {
        const { cart } = this.state;
        let newCart = { ...cart };

        if (cart[item]) {
            newCart[item] = newCart[item] + 1;
            this.setState({ cart: newCart }, this.updateStorage);
        } else {
            newCart[item] = 1;
            this.setState({ cart: newCart }, this.updateStorage);
        }
    };

    removeFromCart = (item) => {
        const { cart } = this.state;
        let newCart = { ...cart };

        if (!cart[item]) {
            return;
        }

        const amount = cart[item];
        if (amount > 1) {
            newCart[item] = newCart[item] - 1;
            this.setState({ cart: newCart }, this.updateStorage);
        } else {
            delete newCart[item];
            this.setState({ cart: newCart }, this.updateStorage);
        }
    };

    clearCart = () => {
        this.setState({ cart: {} }, this.updateStorage);
    };

    getTotalPrice = () => {
        try {
            let totalPrice = 0;
            let pizzaItems = this.state.cart;
            for (let item in pizzaItems) {
                let itemPrice =
                    PIZZA_TYPES.find((pizzaType) => pizzaType.name === item)
                        .price * pizzaItems[item];
                totalPrice += itemPrice;
            }
            this.setState({ totalPrice: totalPrice });
        } catch (err) {
            console.log(err.message);
        }
    };

    render() {
        return (
            <UserContext.Provider
                value={{
                    isAuthenticated: this.state.isAuthenticated,
                    userToken: this.state.userToken,
                    cart: this.state.cart,
                    addToCart: this.addToCart,
                    removeFromCart: this.removeFromCart,
                    clearCart: this.clearCart,
                    totalPrice: this.state.totalPrice,
                }}
            >
                {this.props.children}
            </UserContext.Provider>
        );
    }
}

export default UserContextProvider;
