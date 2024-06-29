import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

export default function Register() {
  const [username, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [password2, setPassword2] = React.useState("");


  function handleSubmit(e) {
    console.log(username);
    console.log(password);
    console.log(password2)
  }
  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh", // Makes the form take full viewport height
        padding: "20px",
        borderRadius: "8px",
      }}
      noValidate
      autoComplete="off"
    >
      <Typography
        style={{
          marginBottom: "200px",
        }}
        variant="h1"
        component="h2"
      >
        PLACEHOLDER
      </Typography>
      <TextField
        style={{ margin: "20px" }}
        id="username"
        name="username"
        label="Username"
        variant="outlined"
        onChange={(e) => setUserName(e.target.value)}
      />
      <TextField
        id="password"
        name="password"
        type="password"
        label="Password"
        variant="filled"
        onChange={(e) => setPassword(e.target.value)}
      />
	<TextField
		style={{ margin: "20px" }}
        id="password"
        name="password"
        type="password"
        label="Confirm Password"
        variant="filled"
        onChange={(e) => setPassword2(e.target.value)}
      />
      <Button
        style={{ margin: "20px" }}
        variant="contained"
        onClick={() => handleSubmit()}
      >
        Register
      </Button>
    </Box>
  );
}
