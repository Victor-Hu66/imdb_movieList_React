import { useState, useEffect, createContext } from "react";
import "./App.css";
import axios from "axios";
import { CardList } from "./components/CardList/CardList";
import SearchBox from "./components/SearchBox/index";

const baseUrl = "https://api.themoviedb.org/3/search/movie";
const apiKey = "a1aa13ecb541106f47234372288eb64b";
export const MovieContext = createContext();

function Movie() {
  const [movieList, setMovieList] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("war")

  useEffect(() => {
    axios
      .get(baseUrl, {
        params: {
          api_key: apiKey,
          page: 1,
          query: searchKeyword,
        },
      })
      .then((res) => setMovieList(res?.data?.results))
      .catch()
      .finally();
  }, [searchKeyword]);

  console.log(movieList);

  return (
    <div className="App">
      <MovieContext.Provider value={{setSearchKeyword}}>
      <SearchBox/>
      <CardList movieList={movieList} />
      </MovieContext.Provider>
    </div>
  );
}

export default Movie;
