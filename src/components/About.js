import React from 'react';
import AboutDetails from './details/AboutDetails';

const About =() => {
    const { img_src, subtitle, content, post_script } = AboutDetails;
    return (
        <div className = "container center padding-20 rounded-edges ">
            <img className = "profile-img circle responsive hoverable" src = { img_src } alt = "profile"/>
            <h4 className="blue-grey-text text-darken-2">{ subtitle }</h4>
            <h6 className = "content center teal-text text-darken-4">{ content }</h6>
            <br/><br/>
            <h6 className = "content center teal-text text-darken-2">{ post_script }</h6>
        </div>
    )
}

export default About;