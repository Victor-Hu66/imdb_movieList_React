import Card from "../Card/Card";
import { StyledCardList } from "./CardList.style";

export const CardList = ({ movieList }) => {
  return (
    <StyledCardList>
      {movieList.map((movie, index) => (
        <Card key={index} moviePoster={movie.poster_path} title={movie.title} />
      ))}
    </StyledCardList>
  );
};
