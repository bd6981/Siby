import { useStoreActions } from "easy-peasy";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import firebaseService from "./Fire";

export default function Login() {
    const location = useLocation();
    const navigate = useNavigate();
    const [fields, setFields] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState("");
      const setAuthorized = useStoreActions((actions) => actions.setAuthorized);
        const handleChange = (event) => {
          setFields({...fields, [event.target.name]: event.target.value });
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
        }
      } catch (err) {
        console.log(err);
        setError("try again");
      }
    };

        return (
          <div>
            {location.state && location.state.message ? (
              <p style={{ color: "blue" }}>{location.state.message}</p>
            ) : null}
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email">Email Address</label>
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={fields.password}
                  onChange={handleChange}
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
                />
              </div>
              {error ? <p style={{ color: "red" }}>Error: {error}</p> : null}
              <div style={{ marginTop: "1rem" }}>
                <button type="submit">Login</button>
              </div>
            </form>
          </div>
        );
    }