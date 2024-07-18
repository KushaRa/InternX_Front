import React from "react";
import "./categories.css";
import MainNav from "../../components/MainNav/MainNav";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import SearchIcon from '@mui/icons-material/Search';
import { PopularStudent } from "../../components/PopularStudent/popularStudent";

const handleListItemClick = (Categories, index) => {};
export const Categories = () => {
  return (
    <div className="category_page">
      <MainNav />
      <div className="cardSearchBar"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "40%",
          marginTop: "20px"
        }}>
        <input 
          type="text" 
          placeholder="Type Here.." 
          style={{
            border: "none",
            outline: 0,
            padding: "12px 25px",
            fontSize: "18px",
            backgroundColor: "aliceblue",
            color: "black",
            borderRadius: "30px",
            flex: 1,
            marginRight: "18px",
            marginLeft: "50px",
            marginTop: "20px"
          }}
        />  
        <button className="searchButton"><SearchIcon /></button>
      </div>
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
        <div className="flex-box4">
          <div className="category_cards">
            <PopularStudent />
          </div>
        </div>
      </div>
    </div>
  );
};
