import React, { useState, useEffect } from "react";
import { View } from "./View";
import "./Movie.css";
// getting the values of local storage
const getDatafromLS = () => {
  const data = localStorage.getItem("movies");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

export const Movie = () => {
  // main array of objects state || books state || books array of objects
  const [movies, setMovies] = useState(getDatafromLS());

  // input field states
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");

  // form submit event
  const handleAddMovieSubmit = (e) => {
    e.preventDefault();
    // creating an object
    let movie = {
      id: count,
      name: name,
      genre: genre,
      rating: rating,
    };
    setMovies([...movies, movie]);
    setName("");
    setGenre("");
    setRating("");
    setCount(count + 1);
  };

  // delete book from LS
  const deleteMovie = (id) => {
    const filteredMovies = movies.filter((element, index) => {
      return element.id !== id;
    });
    setMovies(filteredMovies);
  };

  // saving data to local storage
  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  return (
    <div className="wrapper">
      <h2 className="heading">User Management System</h2>
      <p>Hey AyushSoni1121!</p>
      <h1>Your watchList</h1>
      <div className="main">
        <div className="form-container">
          <form
            autoComplete="off"
            className="form-group"
            onSubmit={handleAddMovieSubmit}
          >
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
            ></input>
            <br></br>
            <label>Genre</label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(e) => setGenre(e.target.value)}
              value={genre}
            ></input>
            <br></br>
            <label>Rating</label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(e) => setRating(e.target.value)}
              value={rating}
            ></input>
            <br></br>
            <button type="submit" className="btn btn-success btn-md">
              ADD
            </button>
          </form>
        </div>

        <div className="view-container">
          {movies.length > 0 && (
            <>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Genre</th>
                      <th>Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    <View movies={movies} deleteMovie={deleteMovie} />
                  </tbody>
                </table>
              </div>
              {/* <button className='btn btn-danger btn-md'
            onClick={()=>setMovies([])}>Remove All</button> */}
            </>
          )}
          {movies.length < 1 && <div>No Movies are added yet</div>}
        </div>
      </div>
    </div>
  );
};

export default Movie;
