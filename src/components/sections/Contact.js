import React, { Component } from 'react';
import LinkedInLogo from '../../res/images/In-White-34.png'
import GithubMark from '../../res/images/GitHub-Mark-Light-32px.png'

class Contact extends Component {
    render () {
        return (
            <footer className = "page-footer theme-bg">
                <div className="container">
                    <div className="center">
                        <h5 className="white-text">Reach me @</h5>
                        <div className = "row center">
                            <div className="col l6 s12">
                                <a href="mailto:goyal.kri@husky.neu.edu" target = "_blank" rel="noopener noreferrer"><i className="hoverable rounded-edges material-icons medium white-text">email</i></a>
                                <br/><span className="white-text">goyal.kri@husky.neu.edu</span>
                            </div> 
                            <div className="col l6 s12">
                                <a href="https://goo.gl/maps/BMQaCwwZGupQ6jGA6" rel="noopener noreferrer" target="_blank"><i className="hoverable rounded-edges material-icons medium white-text">location_on</i></a>
                                <br/><span className="white-text">Boston, MA</span>
                            </div>
                            <ul className = "list-inline">
                                <li><a href="https://github.com/krit95" target = "_blank" rel="noopener noreferrer"><img className = "hoverable rounded-edges" src = { GithubMark } alt = "github account"/></a></li>
                                <li><a href="https://www.linkedin.com/in/krit-goyal-5096761a/" target = "_blank" rel="noopener noreferrer"><img className = "hoverable" src = { LinkedInLogo } alt = "linkedin account"/></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container center">
                    © 2019 Krit Goyal
                    </div>
                </div>
            </footer>
        )
    }
}

export default Contact;