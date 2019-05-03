import React from 'react';
import ProjectsDetails from '../details/ProjectsDetails';
import { NavLink} from 'react-router-dom';

const Projects = () => {
    const ProjectsList = ProjectsDetails.map(project => {
        return (
                <div className="card horizontal" key = { project.id }>
                    <div className="card-image card-img valign-wrapper">
                    {/* <NavLink to = {"/projects/" + project.id}> */}
                        <img className = "hoverable z-depth-1" src = { project.img_src[0] } alt = "project screenshot"/>
                    {/* </NavLink> */}
                    </div>
                    <div className = "card-stacked">
                        <div className="padding-20">
                            <div className="card-title teal-text text-darken-1">
                                {/* <NavLink to = {"/projects/" + project.id}> */}
                                    {project.title}
                                {/* </NavLink> */}
                            </div>
                            <div className="teal-text text-darken-4">{project.subtitle}</div>
                            <div className="blue-text text-darken-4"><b>Keywords</b>: {project.keywords}</div>
                            <div className="red-text text-darken-4"><b>Tools</b>: {project.tools}</div>
                        </div>
                        <div className="card-content">
                            <p>{project.content}</p>
                        </div>
                        <div className="card-action">
                        <div className="teal-text text-darken-2 text-bold right">{ project.period }</div>
                            {
                                project.links.map(link => {
                                    return (
                                        <p key = {link.display_text}><a className = "waves-effect orange-text text-darken-4 focusable" href={ link.url } target = "_blank" rel="noopener noreferrer">{ link.display_text }</a></p>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
        )
    });
    return (
        <div className = "container padding-40">
            { ProjectsList }
        </div>
    )
}

export default Projects;