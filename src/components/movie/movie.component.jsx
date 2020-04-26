import React, { Component } from "react";
import Like from "../common/likes/like.component";

class Movie extends Component {
  render() {
    const { movie, onDelete, onLike } = this.props;
    return (
      <tr>
        <th scope="row">{movie.title}</th>
        <td>{movie.genre.name}</td>
        <td>{movie.numberInStock}</td>
        <td>{movie.dailyRentalRate}</td>
        <td>
          <Like onLike={onLike} isLiked={movie.isLiked} />
        </td>
        <td>
          <button className="btn btn-danger" onClick={() => onDelete(movie)}>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default Movie;
