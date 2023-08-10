import React from 'react';
import AboutDetails from '../details/AboutDetails';

const About =() => {
    const { img_src, subtitle, content, post_script } = AboutDetails;
    return (
        <div className = "container center padding-20 rounded-edges row">
            <img className = "profile-img circle responsive" src = { img_src } alt = "profile"/>
            <h3 className="blue-grey-text text-darken-2">{ subtitle }</h3>
            <div className="col l10 offset-l1">
            <h5 className = "content center teal-text text-darken-4">{ content }</h5>
            {/*
            <br/><br/>
            <blockquote>
            <h6 className = "content center teal-text text-darken-2">{ post_script }</h6>
            </blockquote>
            */
          }
            </div>
        </div>
    )
}

export default About;
