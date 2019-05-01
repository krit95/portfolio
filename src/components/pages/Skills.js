import React from 'react';
import SkillsDetails from '../details/SkillsDetails';

const Skills = () => {
    const SkillsBlocks = SkillsDetails.map(categoryItem => {
        return (
            <div key = {categoryItem.id} className="container card grey lighten-3 hoverable curved-edges col l5 offset-l1">
                    <h4 className="card-title grey-text text-darken-2">
                        <b>{ categoryItem.category_name }</b>
                    </h4>
                    <div className="card-content">
                    {
                        categoryItem.skills.map(skill => {
                            const skillClass = skill.level ? "determinate" : "indeterminate";
                            return (
                                <div key = { skill.id }>
                                    <h4 className="teal-text">
                                        { skill.name }
                                    </h4>
                                    <div  className = "progress">
                                        <div className = {skillClass} style={{width: skill.level, background: "#424242", color: "red"}}></div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
            </div>
        )
    });
    return (
        <div className="padding-80 center">
            {/* <h3 className="header teal-text text-darken-4">Skills</h3> */}
            <div className="row">
                <div className="container">
                    { SkillsBlocks }
                </div>
            </div>
        </div>
    )
}

export default Skills;