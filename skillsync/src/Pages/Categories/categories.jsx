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
          <h1 style={{ color: "white", fontSize: "20px", textAlign: "center" }}>
            Category
          </h1>
          <Box
            sx={{
              width: "100%",
              maxWidth: 360,
              bgcolor: "rgba(0, 180, 216, 0.43)",
            }}
          >
            <List component="nav" aria-label="secondary mailbox folder">
              <ListItemButton
                onClick={(event) => handleListItemClick(event, 1)}
              >
                <ListItemText
                  className="textcategory"
                  primary="Software Development"
                />
              </ListItemButton>
              <ListItemButton
                onClick={(event) => handleListItemClick(event, 2)}
              >
                <ListItemText
                  className="textcategory"
                  primary="Data Sciences and Analytics"
                />
              </ListItemButton>
              <ListItemButton
                onClick={(event) => handleListItemClick(event, 3)}
              >
                <ListItemText
                  className="textcategory"
                  primary="Cyber Security"
                />
              </ListItemButton>
              <ListItemButton
                onClick={(event) => handleListItemClick(event, 4)}
              >
                <ListItemText
                  className="textcategory"
                  primary="It Support and Networking"
                />
              </ListItemButton>
              <ListItemButton
                onClick={(event) => handleListItemClick(event, 5)}
              >
                <ListItemText className="textcategory" primary="UI/UX Design" />
              </ListItemButton>
              <ListItemButton
                onClick={(event) => handleListItemClick(event, 6)}
              >
                <ListItemText
                  className="textcategory"
                  primary="Cloud Computing"
                />
              </ListItemButton>
            </List>
          </Box>
        </div>
        <div className="flex-box4"></div>
      </div>
    </div>
  );
};
