import { Button, Grid, Typography } from "@mui/material";

import React, { useState } from "react";
import connectwithme from "/src/assets/images/connectwithme.jpg";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Fade from "react-reveal";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    Validate();
    showSuccess();
  };
  const Validate = () => {
    let NAME = document.querySelector("#name");
    let EMAIL = document.querySelector("#email");
    let SUBJECT = document.querySelector("#subject");
    let MESSAGE = document.querySelector("#message");
    if (
      NAME.value === "" ||
      EMAIL.value === "" ||
      SUBJECT.value === "" ||
      MESSAGE.value === ""
    ) {
      alert("You Must Fill Everything!!!");
    }
  };
  const showSuccess = () => {
    let NAME = document.querySelector("#name");
    let EMAIL = document.querySelector("#email");
    let SUBJECT = document.querySelector("#subject");
    let MESSAGE = document.querySelector("#message");
    if (
      NAME.value !== "" &&
      EMAIL.value !== "" &&
      SUBJECT.value !== "" &&
      MESSAGE.value !== ""
    ) {
      alert("Your message is submitted");
    }
    if (
      NAME.value === "" ||
      EMAIL.value === "" ||
      SUBJECT.value === "" ||
      MESSAGE.value === ""
    ) {
      NAME.value;
      EMAIL.value;
      SUBJECT.value;
      MESSAGE.value;
    } else {
      NAME.value = "";
      EMAIL.value = "";
      SUBJECT.value = "";
      MESSAGE.value = "";
    }
  };

  return (
    <>
      <section id="Contact">
        <Typography
          variant="h4"
          sx={{ marginBottom: "20px", padding: "0 20px" }}
        ></Typography>
        <Grid container rowGap={5}>
          <Grid
            item
            md="6"
            xs="12"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Fade left>
              <div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <img
                    src={connectwithme}
                    alt="image"
                    style={{ width: "100%" }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "10px",
                  }}
                >
                  <FacebookRoundedIcon
                    sx={{ cursor: "pointer", fontSize: "35px" }}
                  />
                  <TwitterIcon sx={{ cursor: "pointer", fontSize: "35px" }} />
                  <GitHubIcon sx={{ cursor: "pointer", fontSize: "35px" }} />
                  <LinkedInIcon sx={{ cursor: "pointer", fontSize: "35px" }} />
                  <InstagramIcon sx={{ cursor: "pointer", fontSize: "35px" }} />
                </div>
              </div>
            </Fade>
          </Grid>

          <Grid item md="6" xs="12" sx={{ padding: "0 20px" }}>
            <Fade right>
              <div>
                <form onSubmit={handleSubmit}>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <input
                      name="name"
                      type="text"
                      placeholder="Name"
                      id="name"
                    />
                    <input
                      name="email"
                      type="email"
                      placeholder="Email"
                      id="email"
                    />
                    <input
                      name="subject"
                      type="text"
                      placeholder="Subject"
                      id="subject"
                    />
                    <br />
                    <textarea
                      name="message"
                      placeholder="Message"
                      id="message"
                    ></textarea>
                  </div>
                  <br />
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <button className="sendbutton">Send Message</button>
                  </div>
                </form>
              </div>
            </Fade>
          </Grid>
        </Grid>
      </section>
    </>
  );
};

export default Contact;
