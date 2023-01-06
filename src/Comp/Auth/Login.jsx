
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";
import myImage from "./siby.png";
import "semantic-ui-css/semantic.min.css";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import firebaseConfig from "./Fire.js";
import React, { useState } from "react";
import Call from "./Call";
import Signup from "./Signup";
import { useNavigate, Link } from "react-router-dom"

const Login = () => {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const provider = new GoogleAuthProvider();
  provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
  const auth = getAuth();

  const [authorizedUser, setAuthorizedUser] = useState(
    false || sessionStorage.getItem("accessToken")
  );
  const [email, password] = useState(
    false || sessionStorage.getItem("accessToken")
  );
    const navigate = useNavigate();
  const signInwithGoogle = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        if (user) {
          user.getIdToken().then((tkn) => {
            // set access token in session storage
            sessionStorage.setItem("accessToken", tkn);
            setAuthorizedUser(true);
             return navigate("./login/homepage", {
               replace: true,
              
             });
            
          });
        }
        console.log(user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };
  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        // clear session storage
        sessionStorage.clear();
        setAuthorizedUser(false);
        // window.location.replace("/");
        alert("Logged Out Successfully");
      })
      .catch((error) => {
        // An error happened.
        alert(error);
      });
  };

  return (
    <Grid
      textAlign="center"
      style={{ height: "100vh" }}
      marginBottom="40%"
      verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="violet" textAlign="center">
          <Image
            src={myImage}
            style={{ height: "25vh", width: "20vw", textAlign: "center" }}
          />
          <h5>Log-in to your account</h5>
        </Header>
        <Form size="large">
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
            />

            <Button color="violet" fluid size="large">
              Login
            </Button>
          </Segment>
          <div>
            {authorizedUser ? (
              <div>
                <Call token={sessionStorage.getItem("accessToken")} />
                <Button onClick={logoutUser}>Logout Button</Button>
              </div>
            ) : (
              <div>
                <Button onClick={signInwithGoogle}>Sign in with Google</Button>
              </div>
            )}
          </div>
        </Form>

        <Message>
          <Link to="/login/signup">New to us?</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};
export default Login;

