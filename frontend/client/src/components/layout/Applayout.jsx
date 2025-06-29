import React from "react";
import Header from "./Header";
import Title from "../shared/Title";
import { Grid } from "@mui/material";
import ChatList from "../specific/ChatList";
import { samepleChats } from "../../constants/SampleData";
import { useParams } from "react-router-dom";
import Profile from "../specific/Profile";

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
        sx={{ mt: 2 }}
      >
        <Grid
          item
          sm={3}
          pt={10}
          sx={{
            paddingX: 2,
            paddingRight: 4,
            display: { xs: "none", sm: "block" },
            height: "120%",
          }}
        >
          <ChatList
            chats={samepleChats}
            chatId={chatId}
            newMessagesAlert={[{ chatId, count: 4 }]}
            onlineUsers={["1", "2"]}
          />
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={6}
          height={"100%"}
        >
          {content}
        </Grid>

        <Grid
          item
          sx={{
            width: "350px",
            bgcolor: "rgba(0,0,0,0.85)",
            padding: 3,
            height: "100vh",
            overflowY: "auto",
            ml: "auto",
          }}
        >
          <Profile />
        
        </Grid>
      </Grid>

      <div style={{ textAlign: "center", padding: "1rem" }}>Footer</div>
    </div>
  );
}
