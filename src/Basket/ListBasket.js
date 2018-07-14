import React, { Component } from 'react';
import '../Main/Main.css';
import './Basket.css';
import Nav from '../Nav/Nav.js';
import Basket from './Basket.js';

class ListBasket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phonesBasket: [
                
            ]
        }
    }

    componentWillMount() {
        JSON.parse(localStorage.getItem('phonesBasket')) !== null ?
            this.setState({phonesBasket: JSON.parse(localStorage.getItem('phonesBasket'))})
            :
            this.setState({phonesBasket: []})
    }

    render() {
        return (
            <div>
                <Nav path={'/'} name={'Список товаров'} />
                <div className='list-phone__title'>
                    Список добавленных товаров:
                </div>
                <div className="list-phone">
                    {
                        this.state.phonesBasket.length > 0 ? 
                            this.state.phonesBasket.map((i, index)=>{
                                return (
                                    <Basket
                                        key={i+index}
                                        img={i.img}
                                        name={i.name}
                                        price={i.price}
                                    />
                                )
                            }) : <i>В корзине пока пусто</i>
                    }
                </div>
            </div>
        );
    }
}

export default ListBasket;