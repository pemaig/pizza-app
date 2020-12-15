import bianca from '../images/bianca.jpg';
import funghi from '../images/funghi.jpg';
import hawaiian from '../images/hawaiian.jpg';
import margherita from '../images/margherita.jpg';
import marinara from '../images/marinara.jpg';
import mexicana from '../images/mexicana.jpg';
import napoli from '../images/napoli.jpg';
import new_york from '../images/new_york.jpg';
import pepperoni from '../images/pepperoni.jpg';

export const FIREBASE_BASE_URL = 'https://pizza-app-d3506.firebaseio.com';
export const FIREBASE_ORDERS_URL = FIREBASE_BASE_URL + '/orders.json';

export const ROUTES = {
    HOME: '/',
    LOGIN: '/login',
    ORDERS: '/orders',
    ORDER: '/order',
    CART: '/cart',
};

export const PIZZA_TYPES = [
    {
        name: 'Bianca',
        price: 9.5,
        img: bianca,
    },
    {
        name: 'Funghi',
        price: 9,
        img: funghi,
    },
    {
        name: 'Hawaiian',
        price: 8,
        img: hawaiian,
    },
    {
        name: 'Margherita',
        price: 7,
        img: margherita,
    },
    {
        name: 'Marinara',
        price: 5.5,
        img: marinara,
    },
    {
        name: 'Mexicana',
        price: 7.5,
        img: mexicana,
    },
    {
        name: 'Napoli',
        price: 10,
        img: napoli,
    },
    {
        name: 'New york',
        price: 6,
        img: new_york,
    },
    {
        name: 'Pepperoni',
        price: 5,
        img: pepperoni,
    },
];
