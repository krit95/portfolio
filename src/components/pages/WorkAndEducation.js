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
            <div className="hoverable padding-20 curved-edges">
                <h5 className = "grey-text text-darken-4">{ item.title }</h5>
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