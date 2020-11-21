import './App.css';
import LoginPage from "../LoginPage/LoginPage";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";
import AuthProvider from "../../contexts/AuthProvider";
import Navigation from "../Navigation/Navigation";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {ROUTES} from "../../utils/consts";
import MenuPage from "../MenuPage/MenuPage";
import OrdersPage from "../OrdersPage/OrdersPage";
import CardPage from "../CardPage/CardPage";

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Navigation/>
                <Container className="custom-container">
                    <Switch>
                        <Route path={ROUTES.HOME} exact component={MenuPage}/>
                        <Route path={ROUTES.LOGIN} component={LoginPage}/>
                        <Route path={ROUTES.ORDERS} component={OrdersPage}/>
                        <Route path={ROUTES.CARD} component={CardPage}/>
                    </Switch>
                </Container>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
