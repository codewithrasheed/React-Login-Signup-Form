import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  let add = () => {
    if(!user && !password){
      alert("Field is Required");
    }
    else{

      navigate(`/login`, {
        state: { user : user, password: password, email: email},
      });
    }
    };

  return (
    <div className="signup" style={{ width: "100%", margin: "auto", height: "100%" }}>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#fff",
          // display: "inline"
          color: "black"
        }}
      >
        <Typography variant="h4" sx={{ padding: "20px" }}>
          SIGN UP
        </Typography>

        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          color="primary"
          style={{ width: "400px", marginBottom: "20px" }}
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
        <br />

        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          color="primary"
          style={{ width: "400px", marginBottom: "20px" }}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          color="primary"
          style={{ width: "400px", marginBottom: "20px" }}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        {/* <p>{user}</p> */}

        <Button variant="contained" onClick={add}>
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default Signup;
