import React,{useState} from "react";
import "./style.css"

const moviesData = [
    {name: "The Shawshank Redemption", rating: 9.3, year: 1994, img_link: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTK7Os2YW_6OfJJGh9rvPUSbNYqUwQXZce6mMIrqMasLen8sg4BDbHwN-UMOAV6Q_lXdvqdhbY-NqCTcGA"},
    {name: "The Godfather", rating: 9.2, year: 1972,
     img_link: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg"
},
    {name: "The Godfather: Part II", rating: 9.0, year: 1974,img_link: "https://cdn.siasat.com/wp-content/uploads/2021/04/allu-arjun-1.jpg"},
    {name: "The Dark Knight", rating: 9.0, year: 2008,img_link: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTK7Os2YW_6OfJJGh9rvPUSbNYqUwQXZce6mMIrqMasLen8sg4BDbHwN-UMOAV6Q_lXdvqdhbY-NqCTcGA"},
    {name: "Tare Zamin Par", rating: 8.4, year: 2007,img_link: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTK7Os2YW_6OfJJGh9rvPUSbNYqUwQXZce6mMIrqMasLen8sg4BDbHwN-UMOAV6Q_lXdvqdhbY-NqCTcGA"},
    {name: "Schindler's List", rating: 8.9, year: 1993,img_link: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTK7Os2YW_6OfJJGh9rvPUSbNYqUwQXZce6mMIrqMasLen8sg4BDbHwN-UMOAV6Q_lXdvqdhbY-NqCTcGA"},
    {name: "Pulp Fiction", rating: 8.9, year: 1994,img_link: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTK7Os2YW_6OfJJGh9rvPUSbNYqUwQXZce6mMIrqMasLen8sg4BDbHwN-UMOAV6Q_lXdvqdhbY-NqCTcGA"},
    {name: "The Lord of the Rings: The Return of the King", rating: 8.9, year: 2003,img_link: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTK7Os2YW_6OfJJGh9rvPUSbNYqUwQXZce6mMIrqMasLen8sg4BDbHwN-UMOAV6Q_lXdvqdhbY-NqCTcGA"},
    {name: "Jeena Sirf Mere Liye", rating: 4.5, year: "2002",img_link: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTK7Os2YW_6OfJJGh9rvPUSbNYqUwQXZce6mMIrqMasLen8sg4BDbHwN-UMOAV6Q_lXdvqdhbY-NqCTcGA"}
]

const OldApp = () => {

  let [selectedMovie, setSelectedMovie] = useState({})

  console.log(selectedMovie)


    return(
        <div className="movies">
                 <div className="all-movies">
               {
                     moviesData.map((movie, index) => (
                            <div className="display-movies"
                              onClick={()=>setSelectedMovie(movie)}
                            >
                                <h3>{movie.name}</h3>
                            </div>
                     ))
               }
                  </div>

              
                    {
                        Object.keys(selectedMovie).length > 0 && (
                            <div className="movie-details">
                                <img src={selectedMovie.img_link} alt="movie-poster" />
                                <h2>{selectedMovie.name}</h2>
                                <p>{selectedMovie.rating}</p>
                                <p>{selectedMovie.year}</p>
                                

                            </div>
                        )
                    }


                    {/* {
                        Object.keys(selectedMovie).length > 0 ? () : ("")
                    } */}
               
        </div>
    )
}   

// export default App;