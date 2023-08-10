import React, { Component } from 'react';
import LinkedInLogo from '../../res/images/In-White-48.png'
import GithubMark from '../../res/images/GitHub-Mark-Light-64px.png'

class Contact extends Component {
    render () {
        return (
            <footer className = "page-footer theme-bg">
                <div className="container">
                    <div className="center">
                        <h5 className="white-text">Reach me @</h5>
                        <div className = "row center padding-40">
                            <div className="col l4 s12">
                                <a href="mailto:krit.goyal95@gmail.com" target = "_blank" rel="noopener noreferrer"><i className="hoverable rounded-edges material-icons medium white-text">email</i></a>
                                <br/><span className="white-text">krit.goyal95@gmail.com</span>
                            </div>
                            {/* <div className="col l6 s12">
                                <a href="https://goo.gl/maps/BMQaCwwZGupQ6jGA6" rel="noopener noreferrer" target="_blank"><i className="hoverable rounded-edges material-icons medium white-text">location_on</i></a>
                                <br/><span className="white-text">Boston, MA</span>
                            </div> */}
                            {/* <ul className = "list-inline"> */}
                            <div className="col l4 s12">
                                <a href="https://github.com/krit95" target = "_blank" rel="noopener noreferrer"><img className = "hoverable rounded-edges" src = { GithubMark } alt = "github account"/></a>
                                <br/><span className="white-text">krit95</span>
                            </div>
                            <div className="col l4 s12">
                                <a href="https://www.linkedin.com/in/krit-goyal-5096761a/" target = "_blank" rel="noopener noreferrer"><img className = "hoverable" src = { LinkedInLogo } alt = "linkedin account"/></a>
                                <br/><span className="white-text">Krit Goyal</span>
                            </div>
                            {/* </ul> */}
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container center">
                    Last updated on Aug 10, 2023
                    </div>
                </div>
            </footer>
        )
    }
}

export default Contact;
