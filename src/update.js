import React, { useState, useEffect } from "react";
import axios from "axios";

function TodoItem() {
  const [todo, setTodo] = useState({
    id: "",
    address: "",
    edu_qual: "",
    email_id: "",
    gender: "",
    intrenships: "",
    languages_known: "",
    name: "",
    nationality: "",
    online_courses: "",
    other_achievments: "",
    paper_presentation: "",
    phone_no: "",
    skills: "",
    status: "",
    workshops: ""

  });

  const handleChange = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:8080/task`, todo).then((res) => {
      console.log(res.data);
      setTodo({ id: "", address: "", edu_qual: "", email_id: "", gender: "", intrenships: "", languages_known: "", name: "", nationality: "", online_courses: "", other_achievments: "", paper_presentation: "", phone_no: "", skills: "", status: "", workshops: "" });
    });
  };

  return (
    <div className="RoadRequest" >    
          <form id="regform" name="suForm" onSubmit={handleSubmit}>    
            <div className="hello">
                <div><h1 id="a">UPDATE</h1></div>
                <br/>
                <div id="d">
                    <div id="b">ID : </div>
                    <input name="id" type="" id="c"value={todo.id} onChange={handleChange}/>
                </div>
                <div id="d">
                    <div id="b">NAME : </div>
                    <input name="name" type="text" id="c"value={todo.name} onChange={handleChange}/>
                </div>
                <div id="d">
                    <div id="b">GENDER : </div>
                    <input name="gender" type="" id="c"value={todo.gender} onChange={handleChange}/>
                </div>
                <div id="d">
                    <div id="b">NATIONALITY : </div>
                    <input name="nationality" type="" id="c"value={todo.nationality} onChange={handleChange}/>
                </div>
                <div id="d">
                    <div id="b">ADDRESS : </div>
                    <input name="address" type="" id="c"value={todo.address} onChange={handleChange}/>
                </div>
                <div id="d">
                    <div id="b">EDUCATIONAL QUALIFICATION : </div>
                    <input name="edu_qual" type="" id="c"value={todo.edu_qual} onChange={handleChange}/>
                </div>
                <div id="d">
                    <div id="b"> EMAIL : </div>
                    <input name="email_id" type="email" id="c"value={todo.email_id} onChange={handleChange}/>
                </div>
                <div id="d">
                    <div id="b">PHONE NO : </div>
                    <input name="phone_no" type="" id="c"value={todo.phone_no} onChange={handleChange}/>
                </div>
                <div id="d">
                    <div id="b">STATUS : </div>
                    <input name="status" type="" id="c"value={todo.status} onChange={handleChange}/>
                </div>
                <div id="d">
                    <div id="b">PAPER PRESENTATION : </div>
                    <input name="paper_presentation" type="" id="c"value={todo.paper_presentation} onChange={handleChange}/>
                </div>
                <div id="d">
                    <div id="b">INTERNSHIPS : </div>
                    <input  name="intrenships" type="" id="c"value={todo.intrenships} onChange={handleChange}/>
                </div>
                <div id="d">
                    <div id="b">WORKSHOPS : </div>
                    <input name="workshops" type="" id="c"value={todo.workshops} onChange={handleChange}/>
                </div>
                <div id="d">
                    <div id="b">ONLINE COURSES : </div>
                    <input name="online_courses" type="" id="c"value={todo.online_courses} onChange={handleChange}/>
                </div>
                <div id="d">
                    <div id="b">SKILLS : </div>
                    <input name="skills" type="" id="c"value={todo.skills} onChange={handleChange}/>
                </div>
                <div id="d">
                    <div id="b">OTHER ACHEIVMENTS : </div>
                    <input name="other_achievments" type="" id="c"value={todo.other_achievments} onChange={handleChange}/>
                </div>
                <div id="d">
                    <div id="b">LANGUAGES KNOWN : </div>
                    <input name="languages_known" type="" id="c"value={todo.languages_known} onChange={handleChange}/>
                </div>
                <button className="button" type="submit">Update</button>
            </div>
          </form>
        </div>
  );
}
export default TodoItem;