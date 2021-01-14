import React from "react";
import { Container, Grid, Button, TextField } from "@material-ui/core";
import useSignIn from "./useSignIn";

export default function ProductForm() {
  const [handleInputChange, handleSubmit, user] = useSignIn();
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item md={6}>
          <TextField
            name={"login"}
            value={user.login}
            type="text"
            onChange={handleInputChange}
            autoComplete="Login"
            label="Login"
            margin="normal"
            variant="filled"
          />
        </Grid>

        <Grid item md={6}>
          <TextField
            name={"password"}
            value={user.password}
            type="password"
            onChange={handleInputChange}
            autoComplete="Password"
            label="Password"
            margin="normal"
            variant="filled"
          />
        </Grid>
      </Grid>
      <Grid item md={4}>
        <Button variant="contained" onClick={handleSubmit} color="primary">
          Submit
        </Button>
      </Grid>
    </Container>
  );
}
