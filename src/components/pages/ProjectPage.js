import React, { Component } from 'react';
import ProjectsDetails from '../details/ProjectsDetails';
import M from "materialize-css";

class ProjectPage extends Component {
    componentDidMount() {
        var elems = document.querySelectorAll('.slider');
        M.Slider.init(elems, {});
    }
    render = () => {
        const id = this.props.match.params.proj_id;
        const { img_src, title, subtitle, content } = ProjectsDetails.find(project => project.id === id);
        return (
            <div className = "container center margin-40 rounded-edges row">
                <div className = "slider">
                    <ul className = "slides">
                    {
                        img_src.map((img, index) => {
                            return <li key = {index}><a href = { img } ><img id = {index} className = "project-img theme-bg" src = { img } alt = "project screen"/></a></li>
                        })
                    }
                </ul>
                </div>
                <h4 className="left blue-grey-text text-darken-2">{ title }</h4>
                <div className="col l10 offset-l1">
                    <h6 className = "content center teal-text text-darken-4">{ content }</h6>
                    <br/><br/>
                    <blockquote className = "teal-text">
                    <h6 className = "content center teal-text text-darken-2">{ subtitle }</h6>
                </blockquote>
                </div>
            </div>
        )
    }
}

export default ProjectPage;