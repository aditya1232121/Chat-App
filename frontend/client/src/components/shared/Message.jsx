import React from "react";
import { Typography, Box } from "@mui/material";
import moment from "moment";
import { fileFormat } from "../../lib/feature";
import RenderAttachment from "./RenderAttachment";

export default function Message({ message, user }) {
  const { sender, content, attachments = [], createdAt } = message;
  const sameSender = sender?._id === user._id;

  console.log(attachments)

  const timeage = moment(createdAt).fromNow();

  return (
    <div
      style={{
        alignSelf: sameSender ? "flex-end" : "flex-start",
        backgroundColor: "white",
        color: "black",
        borderRadius: "5px",
        padding: "0.5rem",
        width: "fit-content",
      }}
    >
      {!sameSender && (
        <Typography
          color={"#2694ab"}
          fontWeight={"600"}
          variant="caption"
        >
          {sender.name}
        </Typography>
      )}

      {content && <Typography>{content}</Typography>}

    {attachments.length > 0 &&
  attachments.map((i, index) => {
    const url = i.url;
    const file = fileFormat(url);
    return (
      <Box key={index} mt={1}>
        <a
          href={url}
          target="_blank"

          download
          style={{ color: "black", textDecoration: "underline" }}
        >
        {RenderAttachment(file,url)}
        </a>
      </Box>
    );
  })}


      <Typography
        variant="caption"
        color={"text.secondary"}
      >
        {timeage}
      </Typography>
    </div>
  );
}

// renderattachment not a prop pass but a function call 