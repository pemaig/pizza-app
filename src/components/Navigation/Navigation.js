import React, {Component} from 'react';
import {Navbar, Nav} from "react-bootstrap";

class Navigation extends Component {
    render() {
        return (
            <Navbar variant="dark" bg="dark">
                <Navbar.Brand href="#home" >Pizza App</Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link href="#menu">Menu</Nav.Link>
                    <Nav.Link href="#my-orders">My Orders</Nav.Link>
                    <Nav.Link href="#card">Card</Nav.Link>
                    <Nav.Link href="#login">Log In</Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}

export default Navigation;