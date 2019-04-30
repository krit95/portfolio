import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';
import M from "materialize-css";

class Navbar extends Component {
    componentDidMount() {
        const options = {
            inDuration: 250,
            outDuration: 200,
            draggable: true
        };
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems, options);
    }
    render () {
        return (
            <nav className = "nav-wrapper theme-bg sticky-nav">
                <div className = "container">
                    <NavLink to = "/" className = "brand-logo">Krit Goyal</NavLink>
                    <a href="#" data-target="slide-out" className = "sidenav-trigger"><i className = "material-icons">menu</i></a>
                    <div className="right">
                        <ul className = "hide-on-med-and-down">
                        <li><NavLink to = "/">About</NavLink></li>
                        <li><NavLink to = "/worknedu">Work and Education</NavLink></li>
                        <li><NavLink to = "/projects">Projects</NavLink></li>
                        <li><NavLink to = "/skills">Skills</NavLink></li>
                        <li><NavLink className = "hoverable rounded-edges hover-highlight padding-top-5" to = "res/files/resume.pdf" title = "Download resume" target = "_blank" rel="noopener noreferrer">
                            <i className = "material-icons">file_download</i>
                        </NavLink>
                        </li>
                    </ul>
                    </div>
                    <ul className = "sidenav" id="slide-out">
                        <li><NavLink className = "sidenav-close" to = "/">About</NavLink></li>
                        <li><NavLink className = "sidenav-close" to = "/worknedu">Work and Education</NavLink></li>
                        <li><NavLink className = "sidenav-close" to = "/projects">Projects</NavLink></li>
                        <li><NavLink className = "sidenav-close" to = "/skills">Skills</NavLink></li>
                        <li>
                            <NavLink className = "sidenav-close" to = "res/files/resume.pdf" title = "Download resume" target = "_blank" rel="noopener noreferrer">
                            <i className = "material-icons">file_download</i>
                        </NavLink></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;