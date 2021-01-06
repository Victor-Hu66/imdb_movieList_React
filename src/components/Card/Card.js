import React from "react";
import { useHistory } from "react-router-dom";
import {
  StyledCardContainer,
  StyledMovieImage,
  StyledText,
} from "./Card.style";

const Card = ({ title, moviePoster,id }) => {
  const imgBaseurl = "https://image.tmdb.org/t/p/w500";

  const history = useHistory();
  return (
    <div>
      <StyledCardContainer onClick={() => history.push(`/detail/${id}`)}>
        <StyledMovieImage src={imgBaseurl + moviePoster} alt={"movie Poster"} />
        <StyledText>{title}</StyledText>
      </StyledCardContainer>
    </div>
  );
};

export default Card;
