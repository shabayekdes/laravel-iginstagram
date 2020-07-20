import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom'

class Nav extends Component {
    render() {
        return (
            <nav className='navbar navbar-expand-md navbar-light navbar-laravel'>
                <div className='container'>
                    <Link className='navbar-brand' to='/'>Account</Link>
                    <Link className='navbar-brand' to='/profile'>Profile</Link>
                </div>
            </nav>
        );
    }
}

export default Nav;
