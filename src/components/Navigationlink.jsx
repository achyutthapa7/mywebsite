import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";
import { Button } from "@mui/material";
import styled from "@emotion/styled";
const Styledbutton = styled(Button)({
  letterSpacing: "2.5px",
});
const Navigationlink = () => {
  return (
    <>
      <BrowserRouter>
        <Link smooth to="#Home" className="Link">
          <Styledbutton variant="Text">home</Styledbutton>
        </Link>
        <Link smooth to="#About" className="Link">
          <Styledbutton variant="Text">about</Styledbutton>
        </Link>
        <Link smooth to="#Work" className="Link">
          <Styledbutton variant="Text">work</Styledbutton>
        </Link>
        <Link smooth to="#Contact" className="Link">
          <Styledbutton variant="Text">contact</Styledbutton>
        </Link>
      </BrowserRouter>
    </>
  );
};

export default Navigationlink;
