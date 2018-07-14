import React, { Component } from 'react';
import ListPhone from '../Phone/ListPhone.js';
import './Main.css';
import Nav from '../Nav/Nav.js';

class Main extends Component {
    render() {
        return (
            <div className="main">
                <Nav path={'basket/'} name={'Корзина'} />
                <ListPhone />
            </div>
        );
    }
}

export default Main;
