import React, {Component} from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import {ROUTES} from "../../utils/consts";
import {logOut} from "../../utils/fireApp";
import AuthContext from "../../contexts/AuthContext";

class Navigation extends Component {
    static contextType = AuthContext

    render() {
        return (
            <Navbar variant="dark" bg="dark">
                <Navbar.Brand as={Link} to={ROUTES.HOME}>Pizza App</Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to={ROUTES.HOME}>Menu</Nav.Link>
                    {this.context && <Nav.Link as={Link} to={ROUTES.ORDERS}>My Orders</Nav.Link>}
                    <Nav.Link as={Link} to={ROUTES.CARD}>Card</Nav.Link>
                    {this.context
                        ? <Nav.Link onClick={logOut}>Log Out</Nav.Link>
                        : <Nav.Link as={Link} to={ROUTES.LOGIN}>Log In</Nav.Link>
                    }
                </Nav>
            </Navbar>
        );
    }
}

export default Navigation;