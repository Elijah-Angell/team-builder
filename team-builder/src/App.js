import React, { useState } from "react";
import './App.css';


function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState()


  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handleRoleChange = event => {
    setRole(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(name);
    console.log(email);
    console.log(role);
  };



  return (
    <div className="App">
      <form onSubmit={event => handleSubmit(event)}>
        <label>
          name:
          <input type="text" onChange={event => handleNameChange(event)} />
        </label>
        <label>
          email:
          <input type="text" onChange={event => handleEmailChange(event)} />
        </label>
        <label>
          role:
          <input type="change" onChange={event => handleRoleChange(event)} />
        </label>
      </form>
    </div>
  );
}

export default App;
