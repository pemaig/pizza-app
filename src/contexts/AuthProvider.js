import React, {Component} from 'react';
import AuthContext from "./AuthContext";
import fireApp from "../utils/fireApp";

class AuthProvider extends Component {
    state = {
        user: null
    }

    componentDidMount() {
        fireApp.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({user: user})
            } else {
                this.setState({user: null})
            }
        })
    }

    render() {
        return (
            <AuthContext.Provider value={this.state.user}>
                {this.props.children}
            </AuthContext.Provider>
        );
    }
}

export default AuthProvider;