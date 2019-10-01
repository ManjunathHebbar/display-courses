// Table Data
import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
        uniqueParentSub: [],
        uniqueProvider: [],
        uniqueInstitute: [],
    }
  }
 
  // onSubjectChange function
  onSubjectChange = (e, id) => {
    this.props.onSubjectChangeCallBack(e.target.value, id)
  }

  //onUniversityChange function
  onUniversityChange = (e) =>{
    this.props.onUniversityChange(e.target.value)
  }
  
  // init function
  init(){
        const { courses } = this.props
        const parentSub = [];
        const provider = [];
        const institution = [];
        
        courses.map((course, index) => {
          parentSub.push(course["Parent Subject"]);
        });

        courses.map((course, index) => {
          provider.push(course.Provider);
        });

        courses.map((course, index) => {
          institution.push(course.Universities.Institutions);
        });
        
        
        const uniqueParentSub = [...new Set(parentSub)]
        const uniqueProvider = [...new Set(provider)]
        const uniqueInstitute = [...new Set(institution)]
        
  
        this.setState({ uniqueParentSub: uniqueParentSub })
        this.setState({ uniqueProvider: uniqueProvider })
        this.setState({ uniqueInstitute: uniqueInstitute })
        
  }
  
  //componentDidMount function
  componentDidMount() {
  
    this.init();
    
  }

render(){
  
  const {uniqueParentSub, uniqueProvider, uniqueInstitute } = this.state
  return (
     <div>
      <Form>
          <Form.Group controlId="exampleForm.ControlSelect1" onChange={(e) => this.onSubjectChange(e, "Parent Subject")}>
            <Form.Label>select subject:</Form.Label>
            <Form.Control as="select">
                {uniqueParentSub.map((course,index) =>  <option key={index} value={course}>{course} </option>)}
              }
            </Form.Control>
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlSelect2" onChange={(e) => this.onSubjectChange(e,"Provider")}>
            <Form.Label>select Provider:</Form.Label>
            <Form.Control as="select">
              {uniqueProvider.map((course,index) => <option key={index} value={course}> {course} </option>)}]
            </Form.Control>
        </Form.Group>

         <Form.Group controlId="exampleForm.ControlSelect3" onChange={(e) =>this.onUniversityChange(e)}>
            <Form.Label>select university:</Form.Label>
            <Form.Control as="select">
                {uniqueInstitute.map((course,index) => <option key={index} value={course}>{course} </option>)}
            </Form.Control>
        </Form.Group>
    </Form> 
  </div>); 
  }
}


