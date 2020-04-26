import React, { Component } from "react";
import Movies from "./components/movies/movies.component";
import Navbar from "./components/common/navbar/navbar.component";
import "./App.css";
import { getMovies } from "./services/fakeMovieService";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
library.add(far, faHeart);

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleLike = this.handleLike.bind(this);
  }

  componentDidMount() {
    let movies = getMovies();
    movies = movies.map((m) => {
      m.isLiked = false;
      return m;
    });
    this.setState({ movies });
  }

  handleLike(m) {
    /*
    // P1
    const movies = this.state.movies.map((el) => {
      if (el._id === m._id) {
        let newMovie = { ...m };
        newMovie.isLiked = !newMovie.isLiked;
        return newMovie;
      }
      return el;
    });
    */

    // P2
    const movies = [...this.state.movies];
    const index = movies.indexOf(m);
    movies[index] = { ...movies[index] };
    movies[index].isLiked = !movies[index].isLiked;

    this.setState({ movies });
  }

  handleDelete(movie) {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  }

  render() {
    console.log("App-render");
    return (
      <React.Fragment>
        <main className="container">
          <Navbar movieNum={this.state.movies.length} />
          <Movies
            movies={this.state.movies}
            onDelete={this.handleDelete}
            onLike={this.handleLike}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
