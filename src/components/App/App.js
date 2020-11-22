import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";
import AuthProvider from "../../contexts/AuthProvider";
import Navigation from "../Navigation/Navigation";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Container className="custom-container p-0">
                    <Navigation/>
                </Container>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
