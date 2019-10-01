import React, { Component } from 'react';


export default class CourseDisplay extends Component {
    //renderCardView function
    renderCardView (course, index) {
        return (
            <div className="course-name" key={index}>
                <ul className="contentAttributes">
                        <li><span>Course Name</span><br/>{course["Course Name"]}</li>
                        <li><span>Parent Subject</span><br/>{course["Parent Subject"]}</li>
                        <li><span>Parent Subject</span><br/>{course["Next Session Date"]}</li>
                        <li><span>Provider</span><br/>{course.Provider}</li>
                </ul> 
            </div>
        )
    }

    render(){
        const { display } = this.props
        return (
            <div className="course-list-view">
                {display.map((course,index) => this.renderCardView(course, index))}
            </div>
        ); 
    }
}