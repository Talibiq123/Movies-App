import React from "react";
import './style.css';


const moviesData = [
    {name: "The Shawshank Redemption", rating: 9.8, year: 1994},
    {name: "The Godfather", rating: 9.2, year: 1972},
    {name: "The Godfather II", rating: 9.0, year: 1974},
    {name: "The Dark Knight", rating: 9.0, year: 2008},
    {name: "Taare Jameen Par", rating: 8.4, year: 2007},
    {name: "Schindler's List", rating: 8.9, year: 1993},
    {name: "Pulp Fiction", rating: 8.9, year: 1994},
    {name: "The Lord of the Ring: Return of the King", rating: 8.9, year: 2003},
    {name: "Jeena Sirf Mere Liye", rating: 4.5, year: 2004},
]


function App() {
    


    return (
        <div className="movies">
            {
                moviesData.map((movie, index) => (
                <div key={index} className="display-movies">
                    <h3>{movie.name}</h3>
                </div>
            ))}
        </div>
    );
}

export default App;