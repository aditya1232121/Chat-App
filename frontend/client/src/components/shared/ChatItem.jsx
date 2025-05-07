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
  index = 0,
  handleDeleteChat,
}) => {
  return (
    <StyledLink
      sx={{ padding: "0" }}
      to={`/chat/${_id}`}
      onContextMenu={(e) =>
        handleDeleteChat?.(e, _id, groupChat) // optional chaining
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


      <AvatarCard avatar={avatar} />


        <Stack>
          <Typography>{name}</Typography>
          {newMessageAlert?.count > 0 && (
            <Typography>{newMessageAlert.count} New Message</Typography>
          )}
        </Stack>

        {isOnline && (
          <Box
            sx={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "green",
              position: "absolute",
              top: "50%",
              right: "1rem",
              transform: "translateY(-50%)",
            }}
          />
        )}
      </Box>
    </StyledLink>
  );
};
