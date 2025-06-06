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
  TextField,
} from "@mui/material";
import { sampleUsers } from "../../constants/SampleData";

import UserItem from "../shared/UserItem";

import { useInputValidation } from "6pp";

export default function NewGroup() {

 
const groupName  = useInputValidation("")


  const selectMemberHandler = () => {
    console.log("select member handler");
  };

  const submitHandler = () =>{
    
  }

  return (
    <Dialog open={true}>
      <Stack p={{ xs: "1rem", sm: "2rem" }} maxWidth={"25rem"} spacing={2}>
        <DialogTitle textAlign={"center"} variant="h4" >New Group</DialogTitle>

        <TextField  label = "Group Name "value={groupName.value} onChange={groupName.changeHandler} />

        <Typography variant="body1"> Memebers </Typography>

        <Stack spacing={1}>
          {sampleUsers.map((user) => (
            <UserItem
              user={user}
              key={user._id}
              handler={selectMemberHandler}
            />
          ))}
        </Stack>

        <Stack direction="row" spacing={2} justifyContent="flex-end">
          <Button  variant="text" color="error" size="large">Cancel</Button>
          <Button variant="contained" size="large" onClick={submitHandler}>Create</Button>
        </Stack>
      </Stack>
    </Dialog>
  );
}



// variant styles used in button 
// justify content flex for spacing 
