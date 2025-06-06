import React from "react";
import {
  Dialog,
  DialogTitle,
  Stack,
  Typography,
  Divider,
  Button,
  Avatar,
  ListItem,
} from "@mui/material";
import { sampleNotifications } from "../../constants/SampleData";

export default function Notifications() {
  const friendRequestHandler = ({ _id, accept }) => {
    console.log(
      `Friend request ${accept ? "accepted" : "rejected"} for ID: ${_id}`
    );
  };

  return (
    <Dialog open={true}>
      <Stack p={{ xs: "1rem", sm: "2rem" }} maxWidth={"25rem"}>
        <DialogTitle>Notifications</DialogTitle>

        {sampleNotifications.length > 0 ? (
          sampleNotifications.map((item) => (
            <NotificationsItem
              sender={item.sender}
              _id={item._id}
              handler={friendRequestHandler}
              key={item._id}
            />
          ))
        ) : (
          <Typography textAlign={"center"}>No Notifications</Typography>
        )}
      </Stack>
    </Dialog>
  );
}

const NotificationsItem = ({ sender, _id, handler }) => {
  const { name, avatar } = sender;
  return (
    <>
      <ListItem>
        <Stack
          direction={"row"}
          alignItems={"center"}
          spacing={"1rem"}
          width={"100%"}
        >
          <Avatar src={avatar} alt={name} />
          <Typography
            variant="body1"
            sx={{
              flexGrow: 1,
              display: "-webkit-box",
              WebkitLineClamp: 1,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
              width: "100%",
            }}
          >
            {`${name} sent you a friend request`}
          </Typography>
          <Stack
            direction={{
              xs: "column",
              sm: "row",
            }}
            spacing={1}
          >
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={() => handler({ _id, accept: true })}
            >
              Accept
            </Button>
            <Button
              variant="outlined"
              color="error"
              size="small"
              onClick={() => handler({ _id, accept: false })}
            >
              Reject
            </Button>
          </Stack>
        </Stack>
      </ListItem>
      <Divider />
    </>
  );
};
