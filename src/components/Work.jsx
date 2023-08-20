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
            <Cardsample
              imgSrc={calculator}
              name="calculator app"
              link="/mywebsite/src/js/CALCULATOR/index.html"
            />
            <Cardsample
              imgSrc={genderguess}
              name="genderguess app"
              link="/mywebsite/src/js/GENDERGUESS/index.html"
            />
            <Cardsample
              imgSrc={jokegenerator}
              name="jokegenerator app"
              link="/mywebsite/src/js/JOKE/index.html"
            />
            <Cardsample
              imgSrc={movie}
              name="movie app"
              link="/mywebsite/src/js/MOVIE/index.html"
            />
            <Cardsample
              imgSrc={rps}
              name="rock paper scissor"
              link="/mywebsite/src/js/RPS/index.html"
            />
            <Cardsample
              imgSrc={tictactoe}
              name="tic tac toe"
              link="/mywebsite/src/js/TICTACTOE/index.html"
            />
            <Cardsample
              imgSrc={todo}
              name="todo app"
              link="/mywebsite/src/js/TODO/index.html"
            />
            <Cardsample
              imgSrc={weather}
              name="weather app"
              link="/mywebsite/src/js/WEATHER/index.html"
            />
          </Fade>
        </div>
      </section>
    </>
  );
};

export default Work;
