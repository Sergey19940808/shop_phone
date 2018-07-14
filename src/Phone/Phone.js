import React, { Component } from 'react';
import './Phone.css';

class Phone extends Component {
    render() {
        return (
            <div className="phone">
                {
                    this.props.isBasket !== true ?
                        <a 
                            href='' 
                            className='phone__link'
                            data-index={this.props.index} 
                            data-name={this.props.name}
                            onClick={this.props.addPhone}
                        >
                            Добавить в корзину
                        </a>
                        :
                        <a 
                            href='' 
                            className='phone__link' 
                            data-index={this.props.index} 
                            data-name={this.props.name}
                            onClick={this.props.removePhone}
                        >
                            Удалить из корзины
                        </a>
                }
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

export default Phone;