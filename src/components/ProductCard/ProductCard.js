import React, {Component} from 'react';
import {Button, Card} from "react-bootstrap";

class ProductCard extends Component {
    // TODO добавить PropTypes ???
    render() {

        const {pizzaType: {name, price, ingredients, img}} = this.props
        return (
            <Card className=" custom-cardmt-5">
                <Card.Body>
                    <Card.Img variant="top" src={img} alt={name}/>
                    <Card.Text>Ingredients: {ingredients}</Card.Text>
                    <Card.Text>Price: {price}</Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between">
                    <Button variant="dark" bg="dark">Add</Button>
                    <Button variant="dark" bg="dark">Delete</Button>
                </Card.Footer>
            </Card>
        );
    }
}

export default ProductCard;