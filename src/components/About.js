import React, { Component } from 'react';
import MyPhoto from '../my_photo.jpg';

class About extends Component {
    render () {
        return (
            <div className = "container center padding-20 rounded-edges ">
                <img className = "profile-img circle responsive hoverable" src = {MyPhoto} alt = "profile photo"/>
                <h4 className="blue-grey-text text-darken-2">Android developer | AI Enthusiast</h4>
                <p className = "content justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus repellat vero, a error reiciendis maiores labore sunt autem placeat possimus cum fugiat odio voluptates nihil obcaecati nam quae dignissimos vel.</p>
            </div>
        )
    }
}

export default About;