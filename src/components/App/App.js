import './App.css';
import LoginPage from "../LoginPage/LoginPage";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";
import AuthProvider from "../../contexts/AuthProvider";

function App() {
    return (
        <AuthProvider>
            <Container style={{minHeight: "100vh"}}>
                <LoginPage/>
            </Container>
        </AuthProvider>
    );
}

export default App;
