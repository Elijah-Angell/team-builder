import React, { useState } from "react";
import Form from "./Form";
import './App.css';


function App() {
  const [members, setMembers] = useState([])

  const addMembers = (member) => {
    setMembers(...members, member)
  }
  return (
    <div className="App">
      <h2>Team Members List</h2>
      {members.map((member, idx) => {
        return (
          <React.Fragment key={idx}>
            <p >{member.name}</p>
            <p >{member.email}</p>
            <p >{member.role}</p>
          </React.Fragment>
        )
      })}
      <Form addMembers={addMembers} />
    </div>
  );
};






export default App;
