import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { Form } from "semantic-ui-react";
import {
  Button,
  Grid,
  Header,
  Label,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";
import myImage from "./siby.png";
import "semantic-ui-css/semantic.min.css";


export default function SignUp() {
  const [fields, setFields] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const navigate = useNavigate();

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
      const req = await axios.post(
        "https://siby-back.herokuapp.com/api/user",
        fields
      );
      const message = req.data.success;
      console.log(req)
          return navigate("./homepage", {
            replace: true,
            state: {
              message,
            },
          });
    } catch (err) {
      const errMessage = err.response.data.error;
      return setError(errMessage);
    }
  }

  return (
    <Grid
      textAlign="center"
      style={{ height: "100vh" }}
      marginBottom="40%"
      verticalAlign="middle"
      id="signup">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="green" textAlign="center">
          <Image
            src={myImage}
            style={{ height: "25vh", width: "20vw", textAlign: "center" }}
          />
          <h1>Sign Up</h1>
        </Header>
        <Form size="large" onSubmit={handleSubmit}>
          <Segment stacked>
            <Form.Input
              type="email"
              name="email"
              fluid
              icon="envelope outline"
              iconPosition="left"
              placeholder="Email"
              onChange={(e) => handleChange({ email: e.target.value })}
              required
            />

            <Form.Input
              type="name"
              name="name"
              icon="id badge outline"
              iconPosition="left"
              placeholder="Name"
              onChange={(e) => handleChange({ name: e.target.value })}
              required
            />

            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => handleChange({ password: e.target.value })}
              required
            />

            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={(e) =>
                handleChange({ confirmPassword: e.target.value })
              }
              required
            />

            <Button type="submit">Sign Up</Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
}
