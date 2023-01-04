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
    password: ""
    });
    
    return (
        <div>
        <h1>login</h1>
            <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email Address</label>
                </div>
                <div>
                    <input/>
            <button type="submit">Login</button>
            </div>
            </form>
        </div>
  );
}