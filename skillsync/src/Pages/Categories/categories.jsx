import React from "react";
import "./categories.css";
import MainNav from "../../components/MainNav/MainNav";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const handleListItemClick = (Categories, index) => {};
export const Categories = () => {
  return (
    <div className="category_page">
      <MainNav />
      <div className="flex-container">
        <div className="flex-box3">
          <h1 style={{color: 'white' , fontSize: '20px' , textAlign: 'center'}}>Category</h1>
          <Box
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            <List component="nav" aria-label="secondary mailbox folder">
              <ListItemButton
                onClick={(event) => handleListItemClick(event, 2)}
              >
                <ListItemText primary="Software Development" />
              </ListItemButton>
              <ListItemButton
                onClick={(event) => handleListItemClick(event, 3)}
              >
                <ListItemText primary="Cyber Security" />
              </ListItemButton>
            </List>
          </Box>
        </div>
        <div className="flex-box4"></div>
      </div>
    </div>
  );
};
