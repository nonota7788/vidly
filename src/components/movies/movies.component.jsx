import React, { Component } from "react";
import Movie from "../movie/movie.component";

class Movies extends Component {
  render() {
    const { movies, onDelete, onLike } = this.props;
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">title</th>
            <th scope="col">Genre</th>
            <th scope="col">Stock</th>
            <th scope="col">Rate</th>
            <th />
            <th />
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <Movie
              key={movie._id}
              movie={movie}
              onDelete={onDelete}
              onLike={() => onLike(movie)}
            />
          ))}
        </tbody>
      </table>
    );
  }
}

export default Movies;
