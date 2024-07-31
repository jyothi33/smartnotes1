/* eslint-disable default-case */
import React, { useState } from "react";
import { Alert, Avatar, Button, Grid, Paper, TextField } from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { signInUser, signInUsingGoogle, signUpUser } from "../../redux/actionCreators/authActionCreator";

const LoginForm = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const error = useSelector(state => state?.auth?.error?.error);

  const dispatch = useDispatch();

  const registerUser = (e) => {
    e.preventDefault();
    dispatch(signUpUser(email, password));
  };

  const login = (e) => {
    e.preventDefault();
    dispatch(signInUser(email, password));
  };

  const signInWithGoogle = async () => {
    dispatch(signInUsingGoogle());
  };

  return (
    <Grid>
      <Paper elevation={10} style={{ padding: 20, height: "70vh", width: 280, margin: "20px auto"}}>
        <Grid align="center">
          <Avatar style={{backgroundColor: "#1bbd7e"}}>
            <LockOutlined />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>
        {error && <Alert severity="error">{error}</Alert>}
        <form>
          <TextField
            label="Username"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter username"
            variant="standard"
            value={email}
            name={email}
            autoComplete="email"
            fullWidth
            required
            style={{ marginBottom: "20px" }}
          />
          <TextField
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            type="password"
            value={password}
            name={password}
            autoComplete="current-password"
            variant="standard"
            fullWidth
            required
            style={{ marginBottom: "10px" }}
          />
          <Button
            type="submit"
            onClick={login}
            color="primary"
            variant="contained"
            style={{ margin: "8px 0" }}
            fullWidth
          >
            Sign in
          </Button>
          <Button
            type="submit"
            onClick={registerUser}
            color="primary"
            variant="contained"
            style={{margin: "8px 0"}}
            fullWidth
          >
            Register
          </Button>
        </form>
        <Button
          type="submit"
          onClick={signInWithGoogle}
          color="primary"
          variant="contained"
          style={{margin: "8px 0"}}
          fullWidth
        >
          Sign in with Google
        </Button>
      </Paper>
    </Grid>
  );
};

export default LoginForm;
