import React, { Component } from 'react';
import UserContext from './UserContext';
import fireApp from '../utils/fireApp';

class UserContextProvider extends Component {
    state = {
        isAuthenticated: localStorage.getItem('logged'),
        cart: {},
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
                this.setState({ isAuthenticated: true }, () =>
                    localStorage.setItem('logged', true),
                );
            } else {
                this.setState({ isAuthenticated: false }, () =>
                    localStorage.removeItem('logged'),
                );
            }
        });
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

    render() {
        return (
            <UserContext.Provider
                value={{
                    isAuthenticated: this.state.isAuthenticated,
                    cart: this.state.cart,
                    addToCart: this.addToCart,
                    removeFromCart: this.removeFromCart,
                    clearCart: this.clearCart,
                }}
            >
                {this.props.children}
            </UserContext.Provider>
        );
    }
}

export default UserContextProvider;
