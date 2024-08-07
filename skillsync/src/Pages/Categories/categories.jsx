import React from "react";
import "./categories.css";
import MainNav from "../../components/MainNav/MainNav";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import SearchIcon from '@mui/icons-material/Search';
import { PopularStudent } from "../../components/PopularStudent/popularStudent";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

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
        <h1 style={{ color: "white", fontSize: "20px", textAlign: "left", display: "flex", alignItems: "center" }}>
         Select a Category <div><ArrowForwardIcon style={{ marginTop: '12px', marginLeft:'5px' }}/></div>
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
                  primary="Mobile Developer"
                />
              </ListItemButton>
              <ListItemButton
                onClick={(event) => handleListItemClick(event, 2)}
              >
                <ListItemText
                  className="textcategory"
                  primary="Data Engineer"
                />
              </ListItemButton>
              <ListItemButton
                onClick={(event) => handleListItemClick(event, 3)}
              >
                <ListItemText
                  className="textcategory"
                  primary="Security Engineer"
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
                <ListItemText className="textcategory" primary="UI/UX Designer" />
              </ListItemButton>
              <ListItemButton
                onClick={(event) => handleListItemClick(event, 6)}
              >
                <ListItemText
                  className="textcategory"
                  primary="Site Reliability Engineer (SRE)"
                />
              </ListItemButton>
              <ListItemButton
                onClick={(event) => handleListItemClick(event, 7)}
              >
                <ListItemText
                  className="textcategory"
                  primary="Frontend Developmer"
                />
              </ListItemButton>
              <ListItemButton
                onClick={(event) => handleListItemClick(event, 8)}
              >
                <ListItemText
                  className="textcategory"
                  primary="Quality Assurance Engineer"
                />
              </ListItemButton>
              <ListItemButton
                onClick={(event) => handleListItemClick(event, 9)}
              >
                <ListItemText
                  className="textcategory"
                  primary="Machine Learning Engineer"
                />
              </ListItemButton>
              <ListItemButton
                onClick={(event) => handleListItemClick(event, 10)}
              >
                <ListItemText
                  className="textcategory"
                  primary="Systems Architect"
                />
              </ListItemButton>
              <ListItemButton
                onClick={(event) => handleListItemClick(event, 11)}
              >
                <ListItemText
                  className="textcategory"
                  primary="Game Developer"
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
