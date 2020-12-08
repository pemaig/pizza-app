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
        ingredients: [],
        price: 9.5,
        img: bianca,
    },
    {
        name: 'Funghi',
        ingredients: [],
        price: 9,
        img: funghi,
    },
    {
        name: 'Hawaiian',
        ingredients: [],
        price: 8,
        img: hawaiian,
    },
    {
        name: 'Margherita',
        ingredients: [],
        price: 7,
        img: margherita,
    },
    {
        name: 'Marinara',
        ingredients: [],
        price: 5.5,
        img: marinara,
    },
    {
        name: 'Mexicana',
        ingredients: [],
        price: 7.5,
        img: mexicana,
    },
    {
        name: 'Napoli',
        ingredients: [],
        price: 10,
        img: napoli,
    },
    {
        name: 'New york',
        ingredients: [],
        price: 6,
        img: new_york,
    },
    {
        name: 'Pepperoni',
        ingredients: [],
        price: 5,
        img: pepperoni,
    },
];
