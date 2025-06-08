import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { StyledLink } from "../styles/StyledComponents";
import AvatarCard from "./AvatarCard";

export const ChatItem = ({
  avatar = [],
  name,
  _id,
  groupChat = false,
  sameSender,
  isOnline,
  newMessageAlert,
  handleDeleteChat,
}) => {
  return (
    <StyledLink
      sx={{ padding: "0" }}
      to={`/chat/${_id}`}
      onContextMenu={(e) =>
        handleDeleteChat?.(e, _id, groupChat) 
      }
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "10px",
          transition: "background-color 0.3s",
          position: "relative",
          backgroundColor: sameSender ? "#f0f0f0" : "white",
        }}
      >
      
        <Box sx={{ position: "relative", mr: 2 }}>
          <AvatarCard avatar={avatar} />
          
         {isOnline && (
            <Box
              sx={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                backgroundColor: "green",
                position: "absolute",
                bottom: 22,
                left: 180,
                border: "2px solid white", 
                
                transform: "translate(-25%, 25%)", 
                zIndex: 10,
              }}
            />
          )}
        </Box>

        <Stack>
          <Typography>{name}</Typography>
          {newMessageAlert?.count > 0 && (
            <Typography color="error" fontSize="0.8rem">
              {newMessageAlert.count} New Message
            </Typography>
          )}
        </Stack>
      </Box>
    </StyledLink>
  );
};
