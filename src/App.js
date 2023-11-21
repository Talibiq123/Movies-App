import React,{useState} from "react";
import "./style.css"
import DisplayMovies from "./Components/DisplayMovies";
import SelectedMovies from "./Components/SelectedMovies";



const App = () => {
    let [clickedMovie, setClickedMovie] = useState({});


    return(
        <div className="movies">
                <DisplayMovies  addSelectedMovies={setClickedMovie}/>

                <SelectedMovies  selectedMovie={clickedMovie}/>
              
                    
        </div>
    )
}   

export default App;