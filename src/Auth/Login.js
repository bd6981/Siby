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
          setFields({ [event.target.name]: event.target.value });
        };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const user = await signInWithEmailAndPassword(
                firebaseService.auth,
                email,
                password
            );
            if (user) {
                setAuthorized();
                navigate("/");
              
            }
            
        };

        return (
            <main>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Email Address</label>
                    </div>
                    <div>
                        <input
                            type="email"
                            name="email" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                    </div>
                    <div>
                        <input
                            type="password"
                            name="password" />
                    </div>
                    <div>
                        <button type="submit">Login</button>
                    </div>
                </form>
            </main>
        )
    }