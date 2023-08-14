import React from "react";
import Navigation from "./Navigation";
import { Box, Button, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { HashLink as Link } from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";
const Styledbox = styled(Box)({
  width: "100%",
  height: "auto",

  color: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});
const Home = () => {
  window.onscroll = () => {
    const HOME_SECTION = document.getElementById("Home");
    let WINDOW_HEIGHT = window.pageYOffset;

    HOME_SECTION.style.backgroundPositionY = -0.1 * WINDOW_HEIGHT + "px";
  };

  return (
    <>
      <section id="Home">
        <Navigation />
        <Styledbox>
          <div>
            <Typography
              sx={{ fontSize: { md: "30px", xs: "20px", lg: "45px" } }}
            >
              <i>NAMASTE🙏I'M</i>
            </Typography>
          </div>
          <div>
            <Typography
              sx={{ fontSize: { md: "60px", xs: "40px", lg: "90px" } }}
            >
              ACHYUT THAPA
            </Typography>
          </div>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              flexDirection: { md: "row", xs: "column" },
            }}
          >
            <BrowserRouter>
              <div>
                <Link smooth to="#Contact" className="Link">
                  <Button
                    variant="Text"
                    sx={{
                      border: "1px solid white",
                      padding: "20px 25px",
                      letterSpacing: "3px",
                      fontSize: "17px",
                    }}
                  >
                    HIRE ME
                  </Button>
                </Link>
              </div>
              <div>
                <Link smooth to="#Work" className="Link">
                  <Button
                    variant="Text"
                    sx={{
                      letterSpacing: "3px",
                      padding: "20px 20px",
                      fontSize: "17px",
                      ":hover": {
                        background: "#bc9e32",
                      },
                    }}
                  >
                    MY WORK
                  </Button>
                </Link>
              </div>
            </BrowserRouter>
          </Box>
        </Styledbox>
      </section>
    </>
  );
};

export default Home;
