import axios from "axios";
import "./css/home.css";
import React, { useState,useEffect } from "react";

function Main(){
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
      axios.get('http://localhost:8080/getvalues')
          .then(response => {
              setQuotes(response.data);
          })
          .catch(error => {
              console.log(error);
          });
  }, []);
  
    return (
      <div className="body">
      <div className="navbar">
        
      </div>
      <div>
        <h1>
          GET
        </h1>
      </div>
      <div className="table">
        <table border={1}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Address</th>
              <th>Educational Qualification</th>
              <th>EmailId</th>
              <th>Gender</th>
              <th>Languages_Known</th>
              <th>Name</th>
              <th>Nationality</th>
              <th>Online Courses</th>
              <th>Other Achievments</th>
              <th>Paper Presentation</th>
              <th>Phone No</th>
              <th>Skills</th>
              <th>Status</th>
              <th>Workshops</th>

            </tr>
          </thead>
          <tbody>
             {quotes.map(quote =>(
              <tr key={quote.id}>
              <td>{quote.id}</td>
              <td>{quote.address}</td>
              <td>{quote.edu_qual}</td>
              <td>{quote.email_id}</td>
              <td>{quote.gender}</td>
              <td>{quote.languages_known}</td>
              <td>{quote.name}</td>
              <td>{quote.nationality}</td>
              <td>{quote.online_courses}</td>
              <td>{quote.other_achievments}</td>
              <td>{quote.paper_presentation}</td>
              <td>{quote.phone_no}</td>
              <td>{quote.skills}</td>
              <td>{quote.status}</td>
              <td>{quote.workshops}</td>
              </tr>

             )
          
              )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Main;