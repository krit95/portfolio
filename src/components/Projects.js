import React, { Component } from 'react';
import RGEPhoto from '../rge_screenshot.webp';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

class Projects extends Component {
    render () {
        return (
            <Timeline lineColor={'#bdbdbd'}>
                <TimelineItem
                    key="001"
                    dateText="Apr 2018 - July 2018"
                    dateInnerStyle = {{background: '#00695c' }}
                    style={{ color: '#00695c' }}
                >
                    <div className="card large">
                        <div className="card-image">
                            <img className="card-img" src = { RGEPhoto } alt = "screenshot"/>
                        </div>
                        <div className = "card-stacked">
                            <div className="card-title teal-text text-darken-2 padding-20">SME Inventory Showcase</div>
                            <div className="card-content">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore numquam et sequi deserunt molestias veritatis aliquid iure reprehenderit, soluta voluptate laudantium quo accusantium, asperiores corrupti dolores eius rerum perspiciatis harum!</p>
                            </div>
                            <div className="card-action">
                                <p><a className = "orange-text text-darken-4 focusable" href="https://play.google.com/store/apps/details?id=com.tiklyo.bpih.rge" target = "_blank" rel="noopener noreferrer">PLAY STORE LINK</a></p>
                            </div>
                        </div>
                    </div>
                </TimelineItem>
                <TimelineItem
                    key="002"
                    dateText="Apr 2018 - July 2018"
                    dateInnerStyle = {{background: '#00695c' }}
                    style={{ color: '#00695c' }}
                >
                    <div className="card large">
                        <div className="card-image">
                            <img className="card-img" src = { RGEPhoto } alt = "screenshot"/>
                        </div>
                        <div className = "card-stacked">
                            <div className="card-title teal-text text-darken-2 padding-20">SME Inventory Showcase</div>
                            <div className="card-content">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore numquam et sequi deserunt molestias veritatis aliquid iure reprehenderit, soluta voluptate laudantium quo accusantium, asperiores corrupti dolores eius rerum perspiciatis harum!</p>
                            </div>
                            <div className="card-action">
                                <p><a className = "orange-text text-darken-4 focusable" href="https://play.google.com/store/apps/details?id=com.tiklyo.bpih.rge" target = "_blank" rel="noopener noreferrer">PLAY STORE LINK</a></p>
                            </div>
                        </div>
                    </div>
                </TimelineItem>
                <TimelineItem
                    key="003"
                    dateText="Apr 2018 - July 2018"
                    dateInnerStyle = {{background: '#00695c' }}
                    style={{ color: '#00695c' }}
                >
                    <div className="card large">
                        <div className="card-image">
                            <img className="card-img" src = { RGEPhoto } alt = "screenshot"/>
                        </div>
                        <div className = "card-stacked">
                            <div className="card-title teal-text text-darken-2 padding-20">SME Inventory Showcase</div>
                            <div className="card-content">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore numquam et sequi deserunt molestias veritatis aliquid iure reprehenderit, soluta voluptate laudantium quo accusantium, asperiores corrupti dolores eius rerum perspiciatis harum!</p>
                            </div>
                            <div className="card-action">
                                <p><a className = "orange-text text-darken-4 focusable" href="https://play.google.com/store/apps/details?id=com.tiklyo.bpih.rge" target = "_blank" rel="noopener noreferrer">PLAY STORE LINK</a></p>
                            </div>
                        </div>
                    </div>
                </TimelineItem>
            </Timeline>
        )
    }
}

export default Projects;

{/* <div className = "container">
                <h1 className = "center blue-grey-text darken-text-3">Projects</h1>
                <div className ="row">
                    <div className ="col s12 m4 l4">
                        <div className="card">
                            <div className="card-image">
                                <img className="card-img" src = { RGEPhoto } alt = "screenshot"/>
                            </div>
                            <div className = "card-stacked">
                                <div className="card-title black-text darken-4 padding-left-20">SME Inventory Showcase</div>
                                <div className="card-content">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore numquam et sequi deserunt molestias veritatis aliquid iure reprehenderit, soluta voluptate laudantium quo accusantium, asperiores corrupti dolores eius rerum perspiciatis harum!</p>
                                </div>
                                <div className="card-action">
                                    <p><a href="https://play.google.com/store/apps/details?id=com.tiklyo.bpih.rge" target = "_blank" rel="noopener noreferrer">PLAY STORE LINK</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}