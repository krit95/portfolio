import React, { Component } from 'react';

class NotFound extends Component {
    render () {
        return (
            <div className = "container padding-40 center">
                <h1 className = "red-text darken-text-4">404</h1>
                <h4 className = "content blue-grey-text text-darken-2">You shall not pass!</h4>
            </div>
        )
    }
}

export default NotFound;