import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';

class Navbar extends Component {
    render () {
        return (
            <nav className = "nav-wrapper theme-bg sticky-nav">
                <div className = "container">
                    <NavLink to = "/" className = "brand-logo">Krit Goyal</NavLink>
                    <ul className = "right">
                        <li><NavLink to = "/">About</NavLink></li>
                        <li><NavLink to = "/worknedu">Work and Education</NavLink></li>
                        <li><NavLink to = "/projects">Projects</NavLink></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;