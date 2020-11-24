import React, {Component} from 'react';
import UserContext from "./UserContext";
import fireApp from "../utils/fireApp";

class UserContextProvider extends Component {
    state = {
        isAuthenticated: false,
        cart: {}
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
        localStorage.setItem('cart', JSON.stringify(this.state.cart))
    }

    addToCart = (item) => {
        const {cart} = this.state
        let newCart = {...cart}

        if (cart[item]) {
            newCart[item] = newCart[item] + 1
            this.setState({cart: newCart}, this.updateStorage)
        } else {
            newCart[item] = 1
            this.setState({cart: newCart}, this.updateStorage)
        }
    }

    removeFromCart = (item) => {
        const {cart} = this.state
        let newCart = {...cart}

        if (!cart[item]) {
            return
        }

        const amount = cart[item]
        if (amount > 1) {
            newCart[item] = newCart[item] - 1
            this.setState({cart: newCart}, this.updateStorage)
        } else {
            delete newCart[item]
            this.setState({cart: newCart}, this.updateStorage)
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