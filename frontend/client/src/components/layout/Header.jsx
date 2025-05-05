import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import { orange } from "../../constants/color";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import GroupIcon from "@mui/icons-material/Group";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Notifications } from "@mui/icons-material";

export default function Header() {
  const navigate = useNavigate();

  const [ismobile, setIsMobile] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isNewGroup, setIsGroup] = useState(false);
  const [isNotification, setIsNotification] = useState(false);

  const handleMobile = () => {
    setIsMobile(!ismobile);
  };

  const OpenSearchDialogue = () => {
    setIsSearch(!isSearch);
  };

  const OpenNewGroup = () => {
    setIsGroup(!isNewGroup);
  };

  const openNotification = () => {
    setIsNotification(!isNotification);
  };

  const NavigatetoGroup = (e) => {
    e.preventDefault();
    navigate("/groups");
  };

  const logoutHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
    <Box
      sx={{ flexGrow: 1 }}
      height={"4rem"}
    >
      <AppBar
        position="static"
        sx={{ bgcolor: orange }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              display: { xs: "none", sm: "block" },
            }}
          >
            Chatting
          </Typography>

          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            <IconButton
              color="inherit"
              onClick={handleMobile}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          <Box>
            <IconButton
              color="inherit"
              size="large"
              onClick={OpenSearchDialogue}
            >
              <SearchIcon />
            </IconButton>
            <IconButton
              color="inherit"
              size="large"
              onClick={OpenNewGroup}
            >
              <AddIcon />
            </IconButton>
            <IconButton
              color="inherit"
              size="large"
              onClick={NavigatetoGroup}
            >
              <GroupIcon />
            </IconButton>

            <IconButton
              color="inherit"
              size="large"
              onClick={openNotification}
            >
              <Notifications />
            </IconButton>

            <IconButton
              color="inherit"
              size="large"
              onClick={logoutHandler}
            >
              <LogoutIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>

    {
        isSearch && (
            
        )
    }
</>
  );
}
