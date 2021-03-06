import React, { useState } from "react";
import Movie from "./components/Movie";
import "./components/Login.css";

function App() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "XYZ",
      password: "123",
    },
    {
      username: "admin",
      password: "admin123",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="outer">
      <div className="heading">User Manangement System</div>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="text"
            name="uname"
            required
            className="username"
            placeholder="User Name"
          />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <input
            type="password"
            name="pass"
            required
            className="password"
            placeholder="Password"
          />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" value="Login" className="submit login" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">{isSubmitted ? <Movie /> : renderForm}</div>
    </div>
  );
}

export default App;
