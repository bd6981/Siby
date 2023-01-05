
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import firebaseService from "./Fire";
import { useMainContext } from "../Map/Hooks/Hooks";

export default function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const [fields, setFields] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [setAuthorized] = useMainContext();

  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(
        firebaseService.auth,
        fields.email,
        fields.password
      );
      if (user) {
        setAuthorized();
        navigate("/");
        console.log("Called");
      }
    } catch (err) {
      console.log(err);
      setError("Invalid email address or password.");
    }
  };

  return (
    <main>
     
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email Address</label>
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={fields.email}
            onChange={handleChange}
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
            value={fields.password}
            onChange={handleChange}
            required
          />
        </div>
        
        <div style={{ marginTop: "1rem" }}>
          <button type="submit">Sign In</button>
        </div>
      </form>
    </main>
  );
}
