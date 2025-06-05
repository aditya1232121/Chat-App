// src/components/specific/Profile.js
import React from "react";
import { Avatar, Stack, Typography } from "@mui/material";
import {
  Face as FaceIcon,
  AlternateEmail as UserNameIcon,
  CalendarMonth as CalendarIcon,
} from "@mui/icons-material";
import moment from "moment";

export default function Profile() {
  return (
    <Stack
      direction="column"
      alignItems="center"
      spacing={3}
      sx={{
        color: "white",
        padding: "1rem",
        textAlign: "center",
        width: "100%",
      }}
    >
      <Avatar
        sx={{
          width: 200,
          height: 200,
          objectFit: "contain",
          marginBottom: "1rem",
          border: "5px solid white",
        }}
      />

      {/* Profile Cards */}
      <ProfileCard heading="Bio" text="Aditya" Icon={<UserNameIcon />} />
      <ProfileCard heading="Name" text="adityaisalways" Icon={<FaceIcon />} />
      <ProfileCard
        heading="Joined"
        text={moment().format("MMMM Do, YYYY")}
        Icon={<CalendarIcon />}
      />
    </Stack>
  );
}

const ProfileCard = ({ text, Icon, heading }) => {
  return (
    <Stack
      direction="row"
      spacing={2}
      alignItems="center"
      sx={{
        padding: "0.5rem 1rem",
        width: "100%",
        maxWidth: 350,
        borderBottom: "1px solid rgba(255,255,255,0.3)",
      }}
    >
    
      <Stack sx={{ color: "white" }}>{Icon}</Stack>

      <Stack>
        <Typography variant="body1" sx={{ color: "white" }}>
          {text}
        </Typography>
        <Typography variant="caption" sx={{ color: "lightgreen" }}>
          {heading}
        </Typography>
      </Stack>
    </Stack>
  );
};
