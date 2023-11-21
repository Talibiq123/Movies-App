import React from "react";
// import { useState } from "react";
import moviesData from '../moviesData';


const DisplayMovies = ({addSelectedMovies}) => {
//   let [selectedMovie, setSelectedMovie] = useState({});

//   console.log(selectedMovie)


    return(
        <div className="all-movies">
        {
              moviesData.map((movie, index) => (
                <div className="display-movies"
                onClick={()=>addSelectedMovies(movie)}
                >
                    <h3>{movie.name}</h3>
                </div>
              ))
        }

            
        </div>
    )
}

export default DisplayMovies;

// export SelectedMovies


// props