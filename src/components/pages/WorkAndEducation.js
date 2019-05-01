import React from 'react';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import WorkNEduDetails from '../details/WorkNEduDetails';

const WorkAndEducation = () => {
    const WorkEduList = WorkNEduDetails.map(item => {
        const itemColor = item.type === "work" ? "#e86971" : "#0277bd";
        return (
            <TimelineItem
                key = { item.id }
                dateText = { item.period }
                dateInnerStyle = {{ background : itemColor }}
                style = {{ color: itemColor }}
            >
            <div className="card hoverable padding-20 curved-edges">
                {/* <div className="card-image">
                <img className="card-img" src = { item.img_src } alt = "project screenshot"/>
                </div> */}
                <div className="row">
                    <a href = { item.link } target = "_blank" rel="noopener noreferrer" className = "waves-effect">
                        <img src = { item.logo } alt = { item.title } className = "col l3 small-img"/>
                        <div className = "col l9 card-title grey-text text-darken-4">
                            <i className="material-icons grey-text text-darken-2 right small">{ item.type }</i>
                            { item.title }
                        </div>
                    </a>
                </div>
                
                <h6 className = "grey-text text-darken-3">{ item.subtitle }</h6>
                { 
                    item.secondary_text ? <p className = "grey-text text-darken-3">{item.secondary_text}</p> : null
                }
                <ul className="collection curved-edges">
                    {
                        item.content.map(bullet => {
                            return (
                                <li key = {bullet} className = "collection-item grey lighten-4">{ bullet}</li>
                            )
                        })
                    }
                </ul>
                </div>
            </TimelineItem>
        )
    });
    return (
        <Timeline lineColor={'#bdbdbd'}>
            { WorkEduList}
        </Timeline>
    )
}

export default WorkAndEducation;