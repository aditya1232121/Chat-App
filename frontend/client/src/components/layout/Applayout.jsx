import React from "react";
import Header from "./Header";
import Title from "../shared/Title";
import { Grid } from "@mui/material";
import ChatList from "../specific/ChatList";
import { samepleChats } from "../../constants/SampleData";
import { useParams } from "react-router-dom";

export default function Applayout({ content }) {
  const params = useParams();
  const chatId = params.chatId;

  return (
    <div>
      <Title title={"Chat App"} />
      <Header />

      <Grid
        container
        height={"calc(100vh - 4rem)"}
        spacing={95}
        sx={{ mt: 2 }}
      >
        <Grid
          item
          sm={3}
          xs={4}
          sx={{
            paddingX: 2,
            display: { xs: "none", sm: "block" },
          }}
          height={"100%"}
        >
          <ChatList
            chats={samepleChats}
            chatId={chatId}  // Dynamically set chatId from URL
            newMessagesAlert={[
              {
                chatId,
                count: 4,
              },
            ]}
            onlineUsers={["1", "2"]}
          />
        </Grid>
        <Grid
          item
          xs={4}
          sm={8}
          md={5}
          lg={6}
          height={"100%"}
        >
          {content}
        </Grid>
        <Grid
          item
          xs={4}
          sm={8}
          md={5}
          lg={3}
          sx={{
            display: { xs: "none", md: "block" },
            padding: "4rem",
            bgcolor: "rgba(0,0,0,0.85)",
            height: "100%",
            width: "10%",
            mr: 5,
          }}
        >
          third
        </Grid>
      </Grid>
      <div>Footer</div>
    </div>
  );
}
