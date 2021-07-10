import React from 'react';
import { CardColumns, Container } from 'react-bootstrap';
import ProductCard from './ProductCard';
import { PIZZA_TYPES } from '../../utils/consts';

const MenuPage = () => (
    <Container>
        <CardColumns className="p-2 m-0">
            {PIZZA_TYPES.map((item) => (
                <ProductCard key={item.name} pizzaType={item} />
            ))}
        </CardColumns>
    </Container>
);

export default MenuPage;
