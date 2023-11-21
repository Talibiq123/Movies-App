
import React from "react";
// import { useState } from "react";


const SelectedMovies = ({selectedMovie}) => {


    return(
        <div className="movie-details">
             {
                       selectedMovie && (
                            <div className="movie-details">
                                <img src={selectedMovie.img_link} alt="movie-poster" />
                                <h2>{selectedMovie.name}</h2>
                                <p>{selectedMovie.rating}</p>
                                <p>{selectedMovie.year}</p>
                                

                            </div>
                        )
                    }

        </div>
    )
}

export default SelectedMovies;