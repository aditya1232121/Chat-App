import React, { Fragment, useEffect, useRef, useState } from "react";
import Applayout from "../components/layout/Applayout";
import { IconButton, Stack } from "@mui/material";
import { grayColor, orange } from "../constants/color";
import { AttachFile, Send } from "@mui/icons-material";
import { InputBox } from "../components/styles/StyledComponents";
import FileMenu from "../components/dialogs/FileMenu";
import { sampleMessage } from "../constants/SampleData";
import Message from "../components/shared/Message";

export default function Chat() {
  const containerRef = useRef(null);
  const fileMenuButtonRef = useRef(null);
  const [anchorEl, setAnchorEl] = useState(null);

  // Set anchor once the button is mounted
  useEffect(() => {
    setAnchorEl(fileMenuButtonRef.current);
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    alert("clicked");
  };

  const user = {
    _id: "sdfsdfsdf",
    name: "Aditya",
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
            >
              {sampleMessage.map((i) => (
                <Message
                  key={i._id}
                  message={i}
                  user={user}
                />
              ))}
            </Stack>

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
                <IconButton
                  sx={{
                    position: "absolute",
                    left: "1.5rem",
                    rotate: "30deg",
                  }}
                  ref={fileMenuButtonRef}
                >
                  <AttachFile />
                </IconButton>

                <InputBox placeholder="Type Message Here" />

                <IconButton
                  type="submit"
                  sx={{
                    rotate: "-30deg",
                    bgcolor: orange,
                    color: "white",
                    marginLeft: "1rem",
                    padding: "0.5rem",
                    "&:hover": {
                      bgcolor: "error.dark",
                    },
                  }}
                >
                  <Send />
                </IconButton>
              </Stack>
            </form>

            {/* FileMenu shown over AttachFile icon */}
            <FileMenu anchor={anchorEl} />
          </Fragment>
        }
      />
    </div>
  );
}
