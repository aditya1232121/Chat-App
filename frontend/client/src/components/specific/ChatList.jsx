import React from "react";
import { Stack } from "@mui/material";
import { ChatItem } from "../shared/ChatItem";

export default function ChatList({
  w = "100%",
  chats = [],
  chatId,
  onlineUsers = [],
  newMessagesAlert = [
    {
      chatId: "",
      count: 0,
    },
  ],
  handleDeleteChat,
}) {
  return (
    <Stack width={w} direction={"column"}>
      {chats.map((data, index) => {
        const { avatar, _id, name, groupChat, members } = data;
        // Check if any member's ID is included in the onlineUsers list
        const isOnline = members.some((memberId) => onlineUsers.includes(memberId));
        
        // Find new message alert for the current chat
        const messageAlert = newMessagesAlert.find(alert => alert.chatId === _id);

        return (
          <ChatItem
            key={_id}
            avatar={avatar}
            name={name}
            _id={_id}
            groupChat={groupChat}
            isOnline={isOnline}
            newMessageAlert={messageAlert}
            chatId={chatId}
            handleDeleteChat={handleDeleteChat}
          />
        );
      })}
    </Stack>
  );
}
