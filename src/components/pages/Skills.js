import React from 'react';
import SkillsDetails from '../details/SkillsDetails';

const Skills = () => {
    const SkillsBlocks = SkillsDetails.map(categoryItem => {
        return (
            <div key = {categoryItem.id} className="container card grey lighten-3 hoverable curved-edges col l5 offset-l1">
                    <h4 className="teal-text text-darken-2">
                        <b>{ categoryItem.category_name }</b>
                    </h4>
                    <div className="card-content padding-80" >
                    {
                        categoryItem.skills.map(skill => {
                            const skillClass = skill.level ? "determinate" : "indeterminate";
                            return (
                                <img key = { skill.id } src = { skill.logo } className = "skill-img" alt = { skill.name }/>
                            )
                                {/* <div > */}
                                    {/* <div className = ""> */}
                                    
                                    {/* <h4 className="teal-text col l2">
                                        { skill.name }
                                    </h4> */}
                                    {/* </div> */}
                                    {/* <div  className = "progress">
                                        <div className = {skillClass} style={{width: skill.level, background: "teal", color: "red"}}></div>
                                    </div> */}
                                {/* </div> */}
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