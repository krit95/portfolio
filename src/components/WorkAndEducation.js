import React, { Component } from 'react';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

class WorkAndEducation extends Component {
    render () {
        return (
            <Timeline lineColor={'#ddd'}>
                <TimelineItem
                    key="001"
                    dateText="Oct 2018 - Present"
                    style={{ color: '#e86971' }}
                >
                    <h4>mHealth Research Group, Boston MA</h4>
                    <h5>Graduate Research Assistant, Smartphone Programmer</h5>
                    <ul className="collection">
                        <li className = "collection-item">Developed Android Wear and Mobile OS applications designed for Micro Ecological Momentary Assessments(μEMA)</li>
                        <li className = "collection-item">Collected data using in-built sensors, MessageApi for inter-device communication, and firebase for database,
                        storage and authentication</li>
                    </ul>
                </TimelineItem>
                <TimelineItem
                    key="002"
                    dateText="Sept 2018 - Present"
                    dateInnerStyle = {{background: '#0277bd' }}
                    style={{ color: '#0277bd' }}
                >
                    <ul class="collection with-header">
                        <li class="collection-header"><h4>Northeastern University, Boston</h4></li>
                        <li class="collection-item"><div>Master of Science in Computer Science<p class="secondary-content">GPA: 4.0 / 4.0</p> </div></li>
                    </ul>
                    <ul className="collection">
                        <li className = "collection-item">Related courses: Programming Design Paradigm, Algorithms, Foundations of AI, Game AI</li>
                    </ul>
                </TimelineItem>
                <TimelineItem
                    key="003"
                    dateText="June 2017 - July 2018"
                    style={{ color: '#e57373' }}
                >
                    <div className="hoverable padding-20 curved-edges">
                        <h5 className = "red-text text-darken-4">Samsung Research Institute, Noida, India</h5>
                        <h5 className = "grey-text text-darken-3">Engineer I, Codec Team, Media Services</h5>
                        <ul className="collection curved-edges">
                            <li className = "collection-item grey lighten-4">Developed POC for automatic camera mode selection in phone with Google’s ML kit</li>
                            <li className = "collection-item grey lighten-4">Created POC android app for in-place video editing using FFMPEG</li>
                            <li className = "collection-item grey lighten-4">Built POC for storage efficient image file format for Android with help of CMake and Nokia’s open source library</li>
                        </ul>
                    </div>
                </TimelineItem>
                <TimelineItem
                    key="004"
                    dateText="Aug 2013 - May 2017"
                    dateInnerStyle = {{background: '#0277bd' }}
                    style={{ color: '#0277bd' }}
                >
                    <div className="hoverable padding-20 curved-edges">
                        <h5 className = "blue-text text-darken-4">Birla Institute of Technology and Science(BITS) Pilani</h5>
                        <h5 className = "grey-text text-darken-3">B.E. (Hons.) in Electrical and Electronics Engineering</h5>
                        <p className = "grey-text text-darken-2">GPA: 7.78 / 10</p>

                        <ul className="collection">
                            <li className = "collection-item">Related courses: Machine Learning, Object Oriented Programming, Data Structures and Algorithms, Discrete Mathematics, Operating Systems</li>
                        </ul>
                    </div>
                </TimelineItem>
            </Timeline>
        )
    }
}

export default WorkAndEducation;