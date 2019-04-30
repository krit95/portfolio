import React from 'react';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import ProjectsDetails from '../details/ProjectsDetails';


const Projects = () => {
    const ProjectsList = ProjectsDetails.map(project => {
        return (
            <TimelineItem
                    key={project.id}
                    dateText = { project.period }
                    dateInnerStyle = {{background: '#00695c' }}
                    style = {{ color: '#00695c' }}
                >
                <div className="card">
                    <div className="card-image">
                        <img className="card-img" src = { project.img_src } alt = "project screenshot"/>
                    </div>
                    <div className = "card-stacked">
                        <div className="padding-top-left-20">
                            <div className="card-title teal-text text-darken-1">{project.title}</div>
                            <div className="teal-text text-darken-4">{project.subtitle}</div>
                            <div className="red-text text-darken-4"><b>Keywords</b>: {project.keywords}</div>
                        </div>
                        <div className="card-content">
                            <p>{project.content}</p>
                        </div>
                        <div className="card-action">
                            {
                                project.links.map(link => {
                                    return (
                                        <p key = {link.display_text}><a className = "orange-text text-darken-4 focusable" href={ link.url } target = "_blank" rel="noopener noreferrer">{ link.display_text }</a></p>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </TimelineItem>
        )
    });
    return (
        <Timeline lineColor={'#bdbdbd'}>
            { ProjectsList }
        </Timeline>
    )
}

export default Projects;