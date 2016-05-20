import React, { Component } from 'react';
import { Link } from 'react-router';
import paths from '../libs/routes_path.js';

class Menu extends Component{
	constructor(props){
		super(props);
		this.activeMenuLink = this.activeMenuLink.bind(this);
	}
	activeMenuLink(path){
		let currentPath = document.location.href.split('/').pop();
		let currentRoute = path.split('/').pop();
		return (currentPath == currentRoute) ? 'active' : ''
	}
	render(){
		return <ul className="nav nav-tabs">
			<li role="presentation" className={this.activeMenuLink(paths.index)}><Link to={paths.index}>Home</Link></li>
			<li role="presentation" className={this.activeMenuLink(paths.products)}><Link to={paths.products}>Query Products</Link></li>
			<li role="presentation"><a href="#">About Us</a></li>
		</ul>
	}
}

export default Menu;