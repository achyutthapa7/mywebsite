import { Grid, Typography } from "@mui/material";
import React from "react";
import myImage from "/src/assets/images/at.jpg";
import { Fade } from "react-reveal";

const About = () => {
  return (
    <>
      <section id="About">
        <Typography
          variant="h4"
          sx={{ marginBottom: "20px", padding: "0 20px" }}
        >
          About Me
        </Typography>

        <Typography
          sx={{
            letterSpacing: "2px",

            lineHeight: "40px",
            padding: "0 20px",
            fontFamily:
              "system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;",
          }}
        >
          Hi there, I'm Achyut Thapa, currently pursuing my studies at Patan
          Multiple Campus. I'm enrolled in the Bachelors of Computer
          Applications (BCA) program, where I'm diving deep into the fascinating
          world of technology. My academic journey has been exciting so far, and
          I'm constantly exploring new horizons in the realm of computer
          science.
        </Typography>
        <br />
        <br />
        <Grid container>
          <Grid item md="5" xs="12" sx={{ padding: "0 20px" }}>
            <Fade left>
              <img
                src={myImage}
                alt="my photo"
                style={{
                  width: "100%",
                  maxHeight: "500px",
                  objectFit: "cover",
                }}
              />
            </Fade>
          </Grid>
          <Grid item md="7" xs="12" sx={{ padding: "0 20px" }}>
            <Fade right>
              <Typography
                sx={{
                  color: "indigo",
                  letterSpacing: "5px",
                  fontSize: "30px",
                  fontWeight: "bolder",
                }}
              >
                UI/UX Designer and web developer
              </Typography>
              <br />
              <Grid
                container
                rowGap={2}
                sx={{
                  fontFamily:
                    "system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif",
                }}
                className="before_element"
              >
                <Grid
                  item
                  md="6"
                  xs="12"
                  sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
                >
                  <div>
                    <span style={{ fontWeight: "bold" }}>Name:</span> Achyut
                    Thapa
                  </div>
                  <div>
                    <span style={{ fontWeight: "bold" }}>Date Of Birth:</span>{" "}
                    jan 17, 2004
                  </div>
                  <div>
                    <span style={{ fontWeight: "bold" }}>Address: </span>
                    Dang,Narayanpur
                  </div>
                  <div>
                    <span style={{ fontWeight: "bold" }}>Email: </span>
                    achyut777thapa@gmail.com
                  </div>
                </Grid>

                <Grid
                  item
                  md="6"
                  xs="12"
                  sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
                >
                  <div>
                    <span style={{ fontWeight: "bold" }}>Name:</span> Achyut
                    Thapa
                  </div>
                  <div>
                    <span style={{ fontWeight: "bold" }}>Date Of Birth:</span>{" "}
                    jan 17, 2004
                  </div>
                  <div>
                    <span style={{ fontWeight: "bold" }}>Address: </span>
                    Dang,Narayanpur
                  </div>
                  <div>
                    <span style={{ fontWeight: "bold" }}>Email: </span>
                    achyut777thapa@gmail.com
                  </div>
                </Grid>
              </Grid>
              <br />
              <br />
              <Typography
                sx={{
                  letterSpacing: "2px",
                  width: "100%",
                  lineHeight: "33px",
                  fontFamily:
                    "system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;",
                }}
              >
                When I'm not studying or attending classes, you'll often find me
                immersed in the world of programming. I'm particularly
                passionate about web development, and I've taken it upon myself
                to learn various technologies and languages. From JavaScript and
                React to HTML and CSS, I've delved into these technologies
                through self-teaching and hands-on projects. You can often find
                my code on GitHub, where I document my progress and collaborate
                with fellow developers. At the age of 19, I'm eager to continue
                honing my skills and contributing to the ever-evolving tech
                landscape.
              </Typography>
            </Fade>
          </Grid>
        </Grid>
      </section>
    </>
  );
};

export default About;
