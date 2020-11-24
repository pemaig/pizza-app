import React, {Component} from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {Link, Redirect, Route, Switch} from "react-router-dom";
import {ROUTES} from "../../utils/consts";
import {logOut} from "../../utils/fireApp";
import UserContext from "../../contexts/UserContext";
import MenuPage from "../MenuPage/MenuPage";
import LoginPage from "../LoginPage/LoginPage";
import CartPage from "../CartPage/CartPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import OrdersPage from "../OrdersPage/OrdersPage";

class Navigation extends Component {
    static contextType = UserContext

    render() {
        return (
            <>
                <Navbar sticky="top" variant="dark" bg="dark" className="p-md-4">
                    <Navbar.Brand as={Link} to={ROUTES.HOME}>Pizza App</Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to={ROUTES.HOME}>Menu</Nav.Link>
                        <Nav.Link as={Link} to={ROUTES.CART}>Cart</Nav.Link>
                        {this.context.isAuthenticated && <Nav.Link as={Link} to={ROUTES.ORDERS}>My Orders</Nav.Link>}
                        {this.context.isAuthenticated
                            ? <Nav.Link onClick={logOut}>Log Out</Nav.Link>
                            : <Nav.Link as={Link} to={ROUTES.LOGIN}>Log In</Nav.Link>
                        }
                    </Nav>
                </Navbar>
                <Switch>
                    <Route path={ROUTES.HOME} exact component={MenuPage}/>
                    <Route path={ROUTES.LOGIN} component={LoginPage}/>
                    <Route path={ROUTES.CART} component={CartPage}/>
                    <PrivateRoute path={ROUTES.ORDERS} component={OrdersPage}/>
                    <Route>
                        <Redirect to={ROUTES.HOME}/>
                    </Route>
                </Switch>
            </>
        );
    }
}

export default Navigation;