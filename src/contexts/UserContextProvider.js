import React, {Component} from 'react';
import UserContext from "./UserContext";
import fireApp from "../utils/fireApp";

class UserContextProvider extends Component {
    state = {
        isAuthenticated: false,
        cart: []
    }

    componentDidMount() {
        fireApp.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({isAuthenticated: true})
            } else {
                this.setState({isAuthenticated: false})
            }
        })
    }

    updateStorage = () => {
        localStorage.setItem('cart', this.state.cart.join(' '))
    }

    addToCart = (item) => {
        this.setState({cart: [...this.state.cart, item]}, this.updateStorage)
    }

    removeFromCart = (item) => {
        const {cart} = this.state
        let removeIndex = cart.findIndex(el => el === item)
        if (removeIndex !== -1) {
            this.setState({cart: cart.filter((el, index) => index !== removeIndex)}, this.updateStorage)
        }
    }

    render() {
        return (
            <UserContext.Provider value={{
                isAuthenticated: this.state.isAuthenticated,
                cart: this.state.cart,
                addToCart: this.addToCart,
                removeFromCart: this.removeFromCart
            }}
            >
                {this.props.children}
            </UserContext.Provider>
        );
    }
}

export default UserContextProvider;