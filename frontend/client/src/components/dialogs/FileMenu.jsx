import { Menu } from '@mui/material';
import React from 'react';

export default function FileMenu({ anchor }) {
  return (
    <Menu
      anchorEl={anchor}
      //open={true} 
    >
      <div style={{ width: "10rem", padding: "1rem" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, iusto libero ducimus eius, amet fugiat modi labore aut saepe consequatur explicabo maiores! Omnis quasi eum saepe harum atque nihil suscipit!
      </div>
    </Menu>
  );
}
