import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';
import M from "materialize-css";

class Navbar extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {index : null};
    }
    componentDidMount() {
        const options = {
            inDuration: 250,
            outDuration: 200,
            draggable: true
        };
        var elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems, options);
    }

    handleClick = (index) => {
        this.setState({
            index
        });
    }
    render () {
        return (
            <nav className = "nav-wrapper theme-bg sticky-nav">
                <div className = "container">
                    <NavLink to = "/" className = "brand-logo" onClick = { () => this.handleClick(null) }>Krit Goyal</NavLink>
                    <a href="#" data-target="slide-out" className = "sidenav-trigger"><i className = "material-icons">menu</i></a>
                    <div className="right">
                        <ul  className = "hide-on-med-and-down">
                            <li className = { this.state.index === 0 ? "active text-bold" : null } onClick = { () => this.handleClick(0) }><NavLink  className = "waves-effect" to = "/">About</NavLink></li>
                            <li className = { this.state.index === 1 ? "active text-bold" : null } onClick = { () => this.handleClick(1) }><NavLink className = "waves-effect" to = "/worknedu">Work and Education</NavLink></li>
                            <li className = { this.state.index === 2 ? "active text-bold" : null } onClick = { () => this.handleClick(2) }><NavLink className = "waves-effect" to = "/projects">Projects</NavLink></li>
                            <li className = { this.state.index === 3 ? "active text-bold" : null } onClick = { () => this.handleClick(3) }><NavLink className = "waves-effect" to = "/skills">Skills</NavLink></li>
                            <li><a href = "res/files/resume.pdf" title = "Download resume" target = "_blank" rel="noopener noreferrer">
                                <i className = "material-icons right padding-top-5">file_download</i>Resume
                            </a>
                            </li>
                        </ul>
                    </div>
                    <ul className = "sidenav" id="slide-out">
                        <li className = { this.state.index === 0 ? "active text-bold" : null } onClick = { () => this.handleClick(0) }><NavLink className = "sidenav-close waves-effect" to = "/">About</NavLink></li>
                        <li className = { this.state.index === 1 ? "active text-bold" : null } onClick = { () => this.handleClick(1) }><NavLink className = "sidenav-close waves-effect" to = "/worknedu">Work and Education</NavLink></li>
                        <li className = { this.state.index === 2 ? "active text-bold" : null } onClick = { () => this.handleClick(2) }><NavLink className = "sidenav-close waves-effect" to = "/projects">Projects</NavLink></li>
                        <li className = { this.state.index === 3 ? "active text-bold" : null } onClick = { () => this.handleClick(3) }><NavLink className = "sidenav-close waves-effect" to = "/skills">Skills</NavLink></li>
                        <li>
                            <a className = "sidenav-close" href = "res/files/resume.pdf" title = "Download resume" target = "_blank" rel="noopener noreferrer">
                            <i className = "material-icons right">file_download</i>Resume
                        </a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;