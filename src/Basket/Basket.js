import React, { Component } from 'react';
import '../Phone/Phone.css';

class Basket extends Component {
    render() {
        return (
            <div className="phone">
                <div className='phone__img'>
                    <img width='200' src={this.props.img} />
                </div>
                <div className='phone__name'>
                    Название: {this.props.name}
                </div>
                <div className='phone__price'>
                    Цена: {this.props.price}
                </div>
            </div>
        );
    }
}

export default Basket;