import {useState, useEffect} from "react";
import Card from "./components/Card/Card";
import './App.css';
import axios from "axios";

const baseUrl = 


function App() {
  const [movieList, setMovieList] = useState([]);

  useEffect ( () => {
    axios.get(
      baseUrl,{}
    )
    .then()
    .catch()
    .finally()
  },[]

  )

  return (
    <div className="App">
      <Card/>
    </div>
  );
}

export default App;
