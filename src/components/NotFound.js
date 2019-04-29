import React, { Component } from 'react';

class NotFound extends Component {
    render () {
        return (
            <div className = "container">
                <h1 className = "center red-text darken-text-5">404</h1>
                <h4 className = "content center">You shall not pass!</h4>
            </div>
        )
    }
}

export default NotFound;