import {useState, useEffect} from "react";
import Card from "./components/Card/Card";
import './App.css';
import axios from "axios";
import {CardList} from "./components/CardList/CardList"

const baseUrl = "https://api.themoviedb.org/3/search/movie";
const apiKey = "a1aa13ecb541106f47234372288eb64b";


function App() {
  const [movieList, setMovieList] = useState([]);

  useEffect ( () => {
    axios.get(
      baseUrl,{params: {
        api_key: apiKey,
        page:1,
        query: "Matrix"
      }}
    )
    .then((res) => setMovieList(res?.data?.results))
    .catch()
    .finally()
  },[])

  console.log(movieList);

  return (
    <div className="App">
      <Card/>
      <CardList movieList={movieList}/>
    </div>
  );
}

export default App;
