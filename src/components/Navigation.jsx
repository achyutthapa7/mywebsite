import {
  AppBar,
  Avatar,
  Box,
  Button,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import Navigationlink from "./Navigationlink";
import Hammenu from "./Hammenu";
import profile from "/src/assets/images/profile.jpg";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const Navigation = () => {
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: "none",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Box className="left_Box">
            <BrowserRouter>
              <Link smooth to="#Home" className="Link">
                <Avatar
                  src={profile}
                  sx={{
                    display: { xs: "none", md: "flex" },
                    cursor: "pointer",
                  }}
                ></Avatar>
              </Link>
            </BrowserRouter>

            <Hammenu />
          </Box>

          <Box
            className="middle_Box"
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <Navigationlink />
          </Box>
          <Box className="right_Box">
            <Button variant="Text" sx={{ background: "#bc9e32" }}>
              Download CV
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navigation;
