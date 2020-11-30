import React, { Component } from 'react';
import { CardColumns, Container } from 'react-bootstrap';
import ProductCard from '../ProductCard/ProductCard';
import { PIZZA_TYPES } from '../../utils/consts';
import Switch from '../Switch';

class MenuPage extends Component {
    render() {
        return (
            <Container>
                <Switch />
                <CardColumns className="p-2 m-0">
                    {PIZZA_TYPES.map((item) => (
                        <ProductCard key={item.name} pizzaType={item} />
                    ))}
                </CardColumns>
            </Container>
        );
    }
}

export default MenuPage;
