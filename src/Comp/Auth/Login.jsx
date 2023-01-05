
import './Login.css'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import myImage from "./siby.png"
import "semantic-ui-css/semantic.min.css";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import firebaseConfig from "./Fire.js"
import React, { useState } from "react";
import Call from './Call'
  import Signup from './Signup'

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
        <Header as="h2" color="#2d2f63" textAlign="center">
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

            <Button color="#2d2f63" fluid size="large">
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
          New to us? <Button><Signup/></Button>
        </Message>
      </Grid.Column>
    </Grid>
  );
}
export default Login
    // <div>
    //   <main>
    //     <h1>Sign In</h1>
    //     <form>
    //       <div>
    //         <label >Email Address</label>
    //       </div>
    //       <div>
    //         <input type="email" name="email" required />
    //       </div>
    //       <div style={{ marginTop: "1rem" }}>
    //         <label >Password</label>
    //       </div>
    //       <div>
    //         <input type="password" name="password" />
    //       </div>

    //       <div style={{ marginTop: "1rem" }}>
    //         <button type="submit">Sign In</button>
    //         <h2>Welcome</h2>
    //         <button
    //          >
    //           Login with Google
    //         </button>
    //         Logged in as
            
    //       </div>
    //     </form>
    //   </main>
    // </div>



 


