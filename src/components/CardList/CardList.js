import Card from "../Card/Card";


export const CardList = ({movieList}) => {
    
    return (
        <di>
           {movieList.map( (movie, index) => (<Card key={index}/>))} 
        </di>
    )
}