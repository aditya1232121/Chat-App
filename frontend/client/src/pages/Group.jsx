import React, { useState } from "react";
import {
  Grid,
  IconButton,
  Tooltip,
  Typography,
  Box,
  Menu,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";

export default function Group() {
  const navigate = useNavigate();

  const navigateBack = () => {
    navigate("/");
  };

  const MenuOnly = () => {
    const [isMobileMenuOpen , setIsMobileMenuOpen] = useState(false);
  

    const handleMobile = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen) ;
    };
  

    return (
      <Box
        sx={{
          position: "fixed",
          top: "1rem",
          right: "1rem",
          zIndex: 1000,
        }}
      >
        <Tooltip title="Menu">   
          <IconButton onClick={handleMobile}>
            <MoreVertIcon />
          </IconButton>
        </Tooltip>
        <Menu />
      </Box>
    );
  };

  const IconBtns = () => (
    <Tooltip title="Back">
      <IconButton
        size="large"
        sx={{ alignSelf: "flex-start", mb: 2 }}
        onClick={navigateBack}
      >
        <KeyboardBackspaceIcon fontSize="large" />
      </IconButton>
    </Tooltip>
  );

  return (
    <Grid container height="100vh">
  
      <Grid
        item
        sm={4}
        xs={false}
        sx={{
          display: {
            xs: "none",
            sm: "block",
          },
          width: "30rem",
          bgcolor: "bisque",
          padding: "1rem",
        }}
      >
        <Typography variant="h6">Group List</Typography>
      </Grid>

  
      <Grid
        item
        xs={12}
        sm={8}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          position: "relative",
          padding: "1rem 3rem",
        }}
      >
      
        <MenuOnly />
        <IconBtns />

        <Typography>Welcome to Group Chat</Typography>
      </Grid>
    </Grid>
  );
}
// dividing page