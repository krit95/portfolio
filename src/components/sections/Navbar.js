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
                        <li><NavLink className = "waves-effect" to = "/">About</NavLink></li>
                        <li><NavLink className = "waves-effect" to = "/worknedu">Work and Education</NavLink></li>
                        <li><NavLink className = "waves-effect" to = "/projects">Projects</NavLink></li>
                        <li><NavLink className = "waves-effect" to = "/skills">Skills</NavLink></li>
                        <li><a className = "hoverable rounded-edges hover-highlight padding-top-5" href = "res/files/resume.pdf" title = "Download resume" target = "_blank" rel="noopener noreferrer">
                            <i className = "material-icons">file_download</i>
                        </a>
                        </li>
                    </ul>
                    </div>
                    <ul className = "sidenav" id="slide-out">
                        <li><NavLink className = "sidenav-close waves-effect" to = "/">About</NavLink></li>
                        <li><NavLink className = "sidenav-close waves-effect" to = "/worknedu">Work and Education</NavLink></li>
                        <li><NavLink className = "sidenav-close waves-effect" to = "/projects">Projects</NavLink></li>
                        <li><NavLink className = "sidenav-close waves-effect" to = "/skills">Skills</NavLink></li>
                        <li>
                            <a className = "sidenav-close" href = "res/files/resume.pdf" title = "Download resume" target = "_blank" rel="noopener noreferrer">
                            Download resume<i className = "material-icons right">file_download</i>
                        </a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;