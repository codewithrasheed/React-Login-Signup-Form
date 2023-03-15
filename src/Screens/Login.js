import { useState} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

export default function Login() {
  const [loginuser,setUser] = useState("");
  const [loginpassword,setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // console.log(location.state);

  const moveTOHome = () => {
    let a = {
       user:location.state.user,
       password:location.state.password,
       email: location.state.email 
    }
           if (location.state.user == loginuser && location.state.password == loginpassword) {
               navigate("/home",{
                   state : a
               })
           }
           else {
               alert("Please Enter Correct Username and Password")
           }
       }
  return (
    <>
      <div className="login" style={{width:'100%', margin:'auto', height:'100%'}}>
        <Box
          sx={{
            width: "100%",
            // padding: "20px",
            backgroundColor: "#fff",
          }}
        >
          <Typography variant="h4" sx={{ padding: "20px" }}>
            LOGIN
          </Typography>
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            color="primary"
            // value={location.state.user}
            style={{ width:"400px", marginBottom: "20px" }}
            onChange={(e)=> {
              setUser(e.target.value)
            }}
          />
          <br />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            color="primary"
            // value={location.state.password}
            style={{ width:"400px", marginBottom: "20px" }}
            onChange = {(e) => setPassword(e.target.value)}
          />
          <br />
            
          <Button variant="contained" onClick={moveTOHome}>Submit</Button>
        </Box>
      </div>
    </>
  );
}
