import React, { useState } from "react";
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

const [members , setmembers] = useState(sampleUsers) ;
const [selectedMembers, setSelectedMembers] = useState([]) ;



// Toggle hai select nahi hai toh add karo and agar add hai toh emove karo 
 const selectMemberHandler = (id) => {
  setSelectedMembers((prevSelected) => {
    const isAlreadySelected = prevSelected.includes(id);

    if (isAlreadySelected) {
      return prevSelected.filter((memberId) => memberId !== id); // remove
    } else {
      return [...prevSelected, id]; // add
    }
  });
};


  const submitHandler = () =>{
    alert("click")
  }

  return (
    <Dialog open={true}>
      <Stack p={{ xs: "1rem", sm: "2rem" }} maxWidth={"25rem"} spacing={2}>
        <DialogTitle textAlign={"center"} variant="h4" >New Group</DialogTitle>

        <TextField  label = "Group Name "value={groupName.value} onChange={groupName.changeHandler} />

        <Typography variant="body1"> Memebers </Typography>

        <Stack spacing={1}>
          {members.map((user) => (
            <UserItem
              user={user}
              key={user._id}
              handler={selectMemberHandler}
              isAdded = {selectedMembers.includes(user._id)}
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
