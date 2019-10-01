import React, { Component } from 'react';
import SearchBar from '../src/components/search-bar'
import CourseDisplay from '../src/components/course-display'

// web template consuming open Rest API
// User select the Provider or Universities or Subject to search Courses


export default class App extends Component {

   //constructor initialization
    constructor(props) {
        super(props);
        this.state = {
            courseList: [],
            filterCourseList: [],
            // uniqueParentSub: [],
            // uniqueProvider: [],
            // uniqueInstitute: [],
        }
    }

    // init function
    init(){
        this.fetchCourseListing();
    }

    // onSubject change function
    onSubjectChange(subject,id){
        const { courseList } = this.state
        const result = courseList.filter(course => {
            if(course[id]===subject){
                return true;
            }
                return false;
            });

          
        this.setState({
            filterCourseList: result
        });
    }

    //onUniversityChangeFunction
    onUniversityChange(Institution){
        const { courseList } = this.state
        const result = courseList.filter(course => {
        if(course.Universities.Institutions === Institution){
            return true;
        }
            return false;
        });
        this.setState({
            filterCourseList: result
        });
    }

    
    //FetchCourseListing function
    fetchCourseListing(){
        fetch("https://api.myjson.com/bins/1fq8pm")
          .then(res => res.json())
          .then(
            (result) => {
                this.setState(
                    {courseList: result}
                //     , () => {
                //         this.UniqueElements();
                // }
                    
                )
      
            },
            
         (error) => {
              this.setState({
                error
              });
            }

        )
    }
    
    // UniqueElements(){
    //         const { courseList } = this.state;
    //         const parentSub = [];
    //         const provider = [];
    //         const institution = [];
           
    //         courseList.map((course,index) => {
    //             parentSub.push(course["Parent Subject"]);
    //         });
           
    //         courseList.map((course,index) => {
    //             provider.push(course.Provider);
    //         });

    //         courseList.map((course,index) => {
    //             institution.push(course.Universities.Institutions);
    //         });
    //         
    //         const uniqueParentSub = [...new Set(parentSub)];
    //         const uniqueProvider = [...new Set(provider)];
    //         const uniqueInstitute = [...new Set(institution)];
    //         console.log(uniqueInstitute)
    //         this.setState({ uniqueParentSub: uniqueParentSub })
    //         this.setState({ uniqueProvider: uniqueProvider })
    //         this.setState({ uniqueInstitute: uniqueInstitute })
    //      }

    
    // componentDidMount function
    componentDidMount() {
        this.init()
    }
    
    render(){
        const { courseList, /*uniqueParentSub, uniqueProvider, uniqueInstitute,*/ filterCourseList } = this.state
        return (
         <div>
             { courseList.length ? 
            <SearchBar
                courses = { courseList }
                // parentSubject = { uniqueParentSub }
                // Provider = { uniqueProvider }
                // institute = { uniqueInstitute } 
                onSubjectChangeCallBack = {(subject, id) => {this.onSubjectChange(subject,id)}}
                onUniversityChange = {(Institution) => {this.onUniversityChange(Institution)}}
            />  : null
             }
            <CourseDisplay
                display = {filterCourseList.length ? filterCourseList: courseList }
            />
       </div>
        );
    }
}


   
 
