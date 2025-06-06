import React, { useState } from "react";
import { Dialog, DialogTitle, InputAdornment, List, ListItem, ListItemText, Stack, TextField } from "@mui/material";
import { useInputValidation } from "6pp"; // agar aapke paas hai
import { Search as SearchIcon } from "@mui/icons-material";
import UserItem from "../shared/UserItem";
import { sampleUsers } from "../../constants/SampleData";


export default function Search() {
  const search = useInputValidation("");
  const [users , setusers] = useState(sampleUsers) ;
  const addFriendHandler = (id) => {
    console.log(id);
  }

  let isLoadingSendFriendRequest = false ;

  return (
    <Dialog open>
      <Stack p={"2rem"} direction={"column"} width={"25rem"}>
        <DialogTitle textAlign={"center"}>Find People</DialogTitle>
        <TextField
          label="Finding people"
          value={search.value}
          onChange={search.changeHandler}
          variant="outlined"
          size="small"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            },
          }}
        />
<List>
{users.map((user) => {
  return (
    <UserItem
      user={user}
      key={user._id}
      handler={addFriendHandler}
      handlerIsLoading={isLoadingSendFriendRequest}
    />
  );
})}

</List>


      </Stack>
    </Dialog>
  );
}


// dialog == temporary pop up box
// stack == store data in vertical and horizontal way with equal spacing
// dialog title tells the header to the user
// text field it allows users to take input
