import React, { useEffect } from "react";
import {StyledMovieImage} from "./components/Card/Card.style";
import axios from "axios";

const movieDetailBaseUrl = "https://api.themoviedb.org/3/movie/"
const apiKey = "a1aa13ecb541106f47234372288eb64b";
const baseImageUrl = "https://image.tmdb.org/t/p/w500";


export default function MovieDetails () {
    
    
    

    useEffect(()=>{
        axios.get(
            movieDetailBaseUrl+id, {params: {
            api_key: apiKey,
            }}
        )
        .then(res=>setMovieDetails(res?.data))
        .catch()
        .finally()
    },[id])

    return (
        <div>
            <h1>{movieDetails?.original_title}</h1>
            <StyledMovieImage src={baseImageUrl+movieDetails?.poster_path} alt={"Movie Poster"}/>
            <p>{movieDetails?.overview}</p> 
        </div>
    )
}


