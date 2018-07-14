import React, { Component } from 'react';
import '../Main/Main.css';

class Nav extends Component {
    render() {
        return (
            <nav className='main__nav'>
                <ul className='main__nav-list'>
                    <li className='main__nav-item'>
                        <a href={this.props.path} className='main__nav-link main__nav-link_link-style'>
                            {this.props.name}
                        </a>
                    </li>
                </ul>
            </nav>
                
        );
    }
}

export default Nav;