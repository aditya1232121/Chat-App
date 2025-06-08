// src/pages/Home.jsx
import React from "react";
import Applayout from "../components/layout/Applayout";
import { Typography, Box } from "@mui/material";

export default function Home() {
  return (
    <Applayout
      content={
        <Box
        bgcolor="grey.200"
          height="100%"
          display="flex"
          justifyContent="center"               
          alignItems="flex-start" 
          pt={5}
          ml={15}
          px = {65}
        >
          <Typography variant="h6" textAlign="center">
            Select a friend to start chatting
          </Typography>
        </Box>
      }
    />
  );
}
