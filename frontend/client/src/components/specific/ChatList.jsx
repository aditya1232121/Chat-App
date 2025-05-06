import { Stack } from '@mui/material';
import React from 'react';

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
      {chats.map((data) => (
        <div>
          {data}
        </div>
      ))}
    </Stack>
  );
}
