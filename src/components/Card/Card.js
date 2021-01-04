import React from "react";
import {
  StyledCardContainer,
  StyledMovieImage,
  StyledText,
} from "./Card.style";

const Card = ({ title, moviePoster }) => {
  const imgBaseurl = "https://image.tmdb.org/t/p/w500";
  return (
    <div>
      <StyledCardContainer>
        <StyledMovieImage src={imgBaseurl + moviePoster} alt={"movie Poster"} />
        <StyledText>{title}</StyledText>
      </StyledCardContainer>
    </div>
  );
};

export default Card;
