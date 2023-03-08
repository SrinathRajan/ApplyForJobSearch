import axios from "axios";
import React, { Component } from "react";
import "./css/home.css";


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:'',
      address:'',
      edu_qual: '',
      email_id:'',
      gender: '',
      intrenships: '',
      languages_known: '',
      name: '',
      nationality: '',
      online_courses: '',
      other_achievments: '',
      paper_presentation: '',
      phone_no: '',
      skills: '',
      status: '',
      workshops: '',
    };
  }
  handleidChange = (event) => {
    this.setState({ id: event.target.value });
  };

  handleaddressChange = (event) => {
    this.setState({ address: event.target.value });
  };
  handleedu_qualChange = (event) => {
    this.setState({ edu_qual: event.target.value });
  };
  handleemail_idChange = (event) => {
    this.setState({ email_id: event.target.value });
  };
  handlegenderChange = (event) => {
    this.setState({ gender: event.target.value });
  };
  handleintrenshipsChange = (event) => {
    this.setState({ intrenships: event.target.value });
  };
  handlelanguages_knownChange = (event) => {
    this.setState({ languages_known: event.target.value });
  };
  handlenameChange = (event) => {
    this.setState({ name: event.target.value });
  };
  handlenationalityChange = (event) => {
    this.setState({ nationality: event.target.value });
  };
  handleonline_coursesChange = (event) => {
    this.setState({ online_courses: event.target.value });
  };
  handleother_achievmentsChange = (event) => {
    this.setState({ other_achievments: event.target.value });
  };
  handlepaper_presentationChange = (event) => {
    this.setState({ paper_presentation: event.target.value });
  };
  handlephone_noChange = (event) => {
    this.setState({ phone_no: event.target.value });
  };
  handleskillsChange = (event) => {
    this.setState({ skills: event.target.value });
  };
  handlestatusChange = (event) => {
    this.setState({ status: event.target.value });
  };
  handleworkshopsChange = (event) => {
    this.setState({ workshops: event.target.value });
  };


  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      id: this.state.id,
      address: this.state.address,
      edu_qual: this.state.edu_qual,
      email_id: this.state.email_id,
      gender: this.state.gender,
      intrenships: this.state.intrenships,
      languages_known: this.state.languages_known,
      name: this.state.name,
      nationality: this.state.nationality,
      online_courses: this.state.online_courses,
      other_achievments: this.state.other_achievments,
      paper_presentation: this.state.paper_presentation,
      phone_no: this.state.phone_no,
      skills: this.state.skills,
      status: this.state.status,
      workshops: this.state.workshops,
    };
    axios.post('http://127.0.0.1:8080/post', data)
  };
  render(){
    return (
        <div className="RoadRequest" >    
          <form id="regform" name="suForm" onSubmit={this.handleSubmit}>    
            <div className="hello">
                <div><h1 id="a">APPLY FOR JOB SEARCH</h1></div>
                <br/>
                <div id="d">
                    <div id="b">ID : </div>
                    <input type="" id="c"value={this.state.id} onChange={this.handleidChange}/>
                </div>
                <div id="d">
                    <div id="b">NAME : </div>
                    <input type="text" id="c"value={this.state.name} onChange={this.handlenameChange}/>
                </div>
                <div id="d">
                    <div id="b">GENDER : </div>
                    <input type="" id="c"value={this.state.gender} onChange={this.handlegenderChange}/>
                </div>
                <div id="d">
                    <div id="b">NATIONALITY : </div>
                    <input type="" id="c"value={this.state.nationality} onChange={this.handlenationalityChange}/>
                </div>
                <div id="d">
                    <div id="b">ADDRESS : </div>
                    <input type="" id="c"value={this.state.address} onChange={this.handleaddressChange}/>
                </div>
                <div id="d">
                    <div id="b">EDUCATIONAL QUALIFICATION : </div>
                    <input type="" id="c"value={this.state.edu_qual} onChange={this.handleedu_qualChange}/>
                </div>
                <div id="d">
                    <div id="b"> EMAIL : </div>
                    <input type="email" id="c"value={this.state.email_id} onChange={this.handleemail_idChange}/>
                </div>
                <div id="d">
                    <div id="b">PHONE NO : </div>
                    <input type="" id="c"value={this.state.phone_no} onChange={this.handlephone_noChange}/>
                </div>
                <div id="d">
                    <div id="b">STATUS : </div>
                    <input type="" id="c"value={this.state.status} onChange={this.handlestatusChange}/>
                </div>
                <div id="d">
                    <div id="b">PAPER PRESENTATION : </div>
                    <input type="" id="c"value={this.state.paper_presentation} onChange={this.handlepaper_presentationChange}/>
                </div>
                <div id="d">
                    <div id="b">INTERNSHIPS : </div>
                    <input type="" id="c"value={this.state.intrenships} onChange={this.handleintrenshipsChange}/>
                </div>
                <div id="d">
                    <div id="b">WORKSHOPS : </div>
                    <input type="" id="c"value={this.state.workshops} onChange={this.handleworkshopsChange}/>
                </div>
                <div id="d">
                    <div id="b">ONLINE COURSES : </div>
                    <input type="" id="c"value={this.state.online_courses} onChange={this.handleonline_coursesChange}/>
                </div>
                <div id="d">
                    <div id="b">SKILLS : </div>
                    <input type="" id="c"value={this.state.skills} onChange={this.handleskillsChange}/>
                </div>
                <div id="d">
                    <div id="b">OTHER ACHEIVMENTS : </div>
                    <input type="" id="c"value={this.state.other_achievments} onChange={this.handleother_achievmentsChange}/>
                </div>
                <div id="d">
                    <div id="b">LANGUAGES KNOWN : </div>
                    <input type="" id="c"value={this.state.languages_known} onChange={this.handlelanguages_knownChange}/>
                </div>
                <button className="button" type="submit">Submit</button>
            </div>
          </form>
        </div>
    );
  }
}
export default Login;