import './App.css';
import LoginPage from "../LoginPage/LoginPage";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";
import AuthProvider from "../../contexts/AuthProvider";
import Navigation from "../Navigation/Navigation";

function App() {
    return (
        <AuthProvider>
            <Navigation/>
            <Container className="custom-container">
                <LoginPage/>
            </Container>
        </AuthProvider>
    );
}

export default App;
