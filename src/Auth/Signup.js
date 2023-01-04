import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
        
      const [fields, setFields] = useState({
        email: "",
        name: "",
        password: "",
        confirmPassword: "",
      });
      const [error, setError] = useState("");

      const navigate = useNavigate();

      const handleChange = (event) => {
        setFields({ ...fields, [event.target.name]: event.target.value });
      };
    const handleSubmit = async (event) => { }
    return (
      <div>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email Address</label>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
            <label htmlFor="password">Password</label>
            <input type="password" name="password"/>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" name="confirmPassword" />
            <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }