import './App.css';
import fireApp from '../../utils/fireApp';
import LoginPage from "../LoginPage/LoginPage";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";

function App() {
    return (
        <Container style={{minHeight:"100vh"}}>
            <LoginPage/>
        </Container>
    );
}

export default App;
