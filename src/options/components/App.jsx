import React from 'react';
import { Component } from 'react';

import Menu from './Menu.jsx';

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <Menu/>
	            {this.props.children}
            </div>
        );
    }
}