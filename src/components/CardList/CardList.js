import Card from "../Card/Card";


export const CardList = ({movieList}) => {
    

    return (
        <div>
           {movieList.map( (movie, index) => (
           <Card 
           key={index}
           moviePoster={movie.poster_path}
           title={movie.title}
           />))} 
        </div>
    )
}