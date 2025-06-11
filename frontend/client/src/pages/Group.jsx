import React from "react";
import { Grid, IconButton, Tooltip, Typography } from "@mui/material";

export default function Group() {

const IconBtns = () => {
  return (
    <Tooltip title="back">
      <IconButton>
        <keyboardBackspaceIcon/>
      </IconButton>
      </Tooltip>
  )
}

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
            width : "30rem"
          },
          bgcolor: "bisque",
          padding: "1rem",
        }}
      >
        <Typography variant="h6">Group List</Typography>
      </Grid>

      {/* Main Content */}
      <Grid
        item
        xs={12}
        sm={8}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          padding: "1rem 3rem",
        }}
      >
        {IconBtns}
      </Grid>

    </Grid>
  );
}


// grid ====> divinding pages 