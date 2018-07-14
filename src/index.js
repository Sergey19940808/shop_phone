import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import Main from './Main/Main.js';
import ListBasket from './Basket/ListBasket.js';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path='/' component={Main} />
            <Route exact path='/basket/' component={ListBasket} />
        </div>
    </BrowserRouter>,
    document.getElementById('root')
);
