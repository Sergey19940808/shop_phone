import React, { Component } from 'react';
import Phone from './Phone.js';
import {phonesList} from '../StorePhone/phonesList.js';
import './Phone.css';

class ListPhone extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phones: []
        }

    }

    componentWillMount() {
        if (localStorage.getItem('phones') === null) {
            localStorage.setItem('phones', JSON.stringify(phonesList))
        }

        this.setState({phones: JSON.parse(localStorage.getItem('phones'))})
    }

    addPhone = (e) => {
        e.preventDefault();

        const index = e.target.getAttribute('data-index');
        const phones = JSON.parse(localStorage.getItem('phones'));
        
        if (localStorage.getItem('phonesBasket') === null) {
            localStorage.setItem('phonesBasket', JSON.stringify([].concat(this.state.phones[index])));
        }
        else {
            localStorage.setItem('phonesBasket', JSON.stringify(
                JSON.parse(localStorage.getItem('phonesBasket')).concat(this.state.phones[index])));
        }

        phones[index].isBasket = true;
        localStorage.setItem('phones', JSON.stringify(phones));
        
        this.setState({ phones: phones });
        
    }

    removePhone = (e) => {
        e.preventDefault();
        // localStorage.removeItem('phones')
        // localStorage.removeItem('phonesBasket')
        const index = e.target.getAttribute('data-index');

        const phones = JSON.parse(localStorage.getItem('phones'));
        const phonesBasket = JSON.parse(localStorage.getItem('phonesBasket'));
        
        const phoneName = e.target.getAttribute('data-name');
        const indexPhone = phonesBasket.map((i, index)=>{
            if (i.name === phoneName) return index;
        });
        const newPhoneList = phonesBasket.splice(indexPhone, 1);
        
        localStorage.setItem('phonesBasket', JSON.stringify(newPhoneList));
        phones[index].isBasket = false;

        localStorage.setItem('phones', JSON.stringify(phones));

        this.setState({ phones: phones });
    }

    render() {
        return (
            <div>
                <div className='list-phone__title'>
                    Список телефонов:
                </div>
                <div className="list-phone">
                    {
                        this.state.phones.map((i, index)=>{
                            return (
                                <Phone
                                    key={i.name+index}
                                    index={index}
                                    img={i.img}
                                    name={i.name}
                                    price={i.price}
                                    isBasket={i.isBasket}
                                    addPhone={this.addPhone}
                                    removePhone={this.removePhone}
                                />
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default ListPhone;