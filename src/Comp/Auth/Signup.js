import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import axios from 'axios'


export default function SignUp() {
  const [fields, setFields] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  // const navigate = useNavigate();

  const handleChange = (value) => {
    return setFields((field) => {
      return {...field, ...value}
    })
      
}


  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (fields.password.length < 6) {
      return setError("Password must be at least 6 characters in length.");
    }
    if (fields.confirmPassword !== fields.password) {
      return setError("Password and confirm password must match.");
    }

    try {
      const req = await axios.post("http://localhost:4000/api/user", fields);
      const message = req.data.success;
      console.log(req)
      //     return navigate("", {
      //       replace: true,
      //       state: {
      //         message,
      //       },
      //     });
    } catch (err) {
      const errMessage = err.response.data.error;
      return setError(errMessage);
    }
  }

  return (
    <div id="signup">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email Address</label>
        </div>
        <div>
          <input
            type="email"
            name="email"
            onChange={(e) => handleChange({email: e.target.value})}
            required
          />
        </div>
        <div style={{ marginTop: "1rem" }}>
          <label htmlFor="name">Name</label>
        </div>
        <div>
          <input
            type="name"
            name="name"
            onChange={(e) => handleChange({name: e.target.value})}
            required
          />
        </div>
        <div style={{ marginTop: "1rem" }}>
          <label htmlFor="password">Password</label>
        </div>
        <div>
          <input
            type="password"
            name="password"
            onChange={(e) => handleChange({password: e.target.value})}
            required
          />
        </div>
        <div style={{ marginTop: "1rem" }}>
          <label htmlFor="confirmPassword">Confirm Password</label>
        </div>
        <div>
          <input
            type="password"
            name="confirmPassword"
            onChange={(e) => handleChange({confirmPassword: e.target.value})}
            required
          />
        </div>

       
        <div style={{ marginTop: "1rem" }}>
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
}
