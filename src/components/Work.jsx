import { Typography } from "@mui/material";
import React from "react";
import Cardsample from "./Cardsample";
import calculator from "/src/assets/cardimages/calculator.png";
import genderguess from "/src/assets/cardimages/genderguess.png";
import jokegenerator from "/src/assets/cardimages/jokegenerator.png";
import movie from "/src/assets/cardimages/movie.png";
import rps from "/src/assets/cardimages/rps.png";
import tictactoe from "/src/assets/cardimages/tictactoe.png";
import todo from "/src/assets/cardimages/todo.png";
import weather from "/src/assets/cardimages/weather.png";
import { Fade } from "react-reveal";
const Work = () => {
  return (
    <>
      <section id="Work">
        <Typography
          variant="h4"
          sx={{ marginBottom: "20px", padding: "0 20px" }}
        >
          My Works
        </Typography>
        <div className="cards">
          <Fade bottom>
            <Cardsample imgSrc={calculator} name="calculator app" />
            <Cardsample imgSrc={genderguess} name="genderguess app" />
            <Cardsample imgSrc={jokegenerator} name="jokegenerator app" />
            <Cardsample imgSrc={movie} name="movie app" />
            <Cardsample imgSrc={rps} name="rock paper scissor" />
            <Cardsample imgSrc={tictactoe} name="tic tac toe" />
            <Cardsample imgSrc={todo} name="todo app" />
            <Cardsample imgSrc={weather} name="weather app" />
          </Fade>
        </div>
      </section>
    </>
  );
};

export default Work;
