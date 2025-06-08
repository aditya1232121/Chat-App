import React, { Fragment, useRef } from "react";
import Applayout from "../components/layout/Applayout";
import { IconButton, Stack } from "@mui/material";
import { grayColor } from "../constants/color";
import { AttachFile, Send } from "@mui/icons-material";
import { InputBox } from "../components/styles/StyledComponents";

export default function Chat() {
  const containerRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
    alert("clicked");
  };

  return (
    <div>
      <Applayout
        content={
          <Fragment>
            <Stack
              ref={containerRef}
              boxSizing={"border-box"}
              padding={"1rem"}
              spacing={"1rem"}
              bgcolor={grayColor}
              height={"90%"}
              sx={{
                overflowX: "hidden",
                overflowY: "auto",
              }}
            ></Stack>
            <form
              style={{
                height: "10%",
              }}
              onSubmit={submitHandler}
            >
              <Stack
              width={"100%"}
                direction={"row"}
                height={"100%"}
                padding={"1rem"}
                alignItems={"center"}
                position={"relative"}
              >
                <IconButton>
                  <AttachFile />
                </IconButton>
                <InputBox placeholder="Type Message Here" />
                <IconButton>
                  <Send />
                </IconButton>
              </Stack>
            </form>
          </Fragment>
        }
      />
    </div>
  );
}
