import React, { useState } from "react";
import { useFileHandler } from "6pp"; // Assuming this is your custom hook
import {
  Avatar,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { CameraAlt } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);


  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
e.preventDefault () ;
  }

  const handleSignup = (e) => {
    e.preventDefault();
  }

  const avatar = useFileHandler("single"); 

  return (
    <div 
    style={
      {
        backgroundImage : 
        "linear-gradient(rgba(200 , 200 , 200 , 0.5 ) , rgba(120 , 110 , 220 , 0.5))"
      }
    }
    
    > 
      
 
    <Container
      component={"main"}
      maxWidth="xs"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {isLogin ? (
          <>
            <Typography variant="h5" gutterBottom>
              Login
            </Typography>
            <form style={{ width: "100%", marginTop: "1rem" }}
              onSubmit={handleLogin}
            >
              <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
              />
              <TextField
                required
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
              />
              <Button
                sx={{ marginTop: "1rem" }}
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
                Login
              </Button>
              <Typography textAlign="center" m="1rem">
                OR
              </Typography>
              <Button variant="text" fullWidth onClick={() => setIsLogin(false)}>
                Sign Up Instead
              </Button>
            </form>
          </>
        ) : (
          <>
            <Typography variant="h5" gutterBottom>
              Sign Up
            </Typography>
            <form style={{ width: "100%", marginTop: "1rem" }}
            onSubmit={handleSignup}
            >
        
              <Stack position="relative" width="10rem" margin="auto">
                <Avatar
                  sx={{
                    width: "10rem",
                    height: "10rem",
                    objectFit: "cover", 
                    borderRadius: "50%", 
                  }}
                  src={avatar.preview || "default-avatar-url.jpg"}
                />
                <IconButton
                  sx={{
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                    bgcolor: "white",
                  }}
                  component="label"
                >
                  <CameraAlt />
                  <VisuallyHiddenInput type="file" onChange={avatar.changeHandler} />
                </IconButton>
              </Stack>

              <TextField
                required
                fullWidth
                label="Name"
                margin="normal"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                required
                fullWidth
                label="Bio"
                margin="normal"
                variant="outlined"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
              <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                required
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                sx={{ marginTop: "1rem" }}
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
                Sign Up
              </Button>
              <Typography textAlign="center" m="1rem">
                OR
              </Typography>
              <Button variant="text" fullWidth onClick={() => setIsLogin(true)}>
                Login Instead
              </Button>
            </form>
          </>
        )}
      </Paper>
    </Container>
    </div>
  );
}
