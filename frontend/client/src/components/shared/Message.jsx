import { Typography } from "@mui/material";
import moment from "moment";
import React from "react";
import { fileFormat } from "../../lib/feature";

export default function Message({ message, user }) {
  const { sender, content, attachments = [], createdAt } = message;
  const sameSender = sender?._id === user._id;

  const timeage = moment(createdAt).fromNow() 
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
      {!     sameSender && (
        <Typography
          color={"#2694ab"}
          fontWeight={"600"}
          variant="caption"
        >
          {sender.name}
        </Typography>
      )}

      {content && <Typography>{content}</Typography>}

{
    attachments.length > 0 &&  attachments.map((i , index) => {  
        const url = i.url 
        const file = fileFormat(url)
        return <Box key={index} >
        <a href="" target="_blank" download  style={{
                  color: "black",
                }}> </a>
            </Box>
    })
}


      <Typography variant="caption" color={"text.secondary"}>{timeage}</Typography>
    </div>
  );
}


// moment is used to work with date and time 
// downlaod is used to download a file when on click 