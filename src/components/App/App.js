import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import UserContextProvider from '../../contexts/UserContextProvider';
import Navigation from '../Navigation/Navigation';
import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <UserContextProvider>
                <Container className="custom-container p-0">
                    <Navigation />
                </Container>
            </UserContextProvider>
        </BrowserRouter>
    );
}

export default App;
