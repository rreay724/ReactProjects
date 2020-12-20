import React, { Component } from "react";

class MovieRow extends Component {
  viewMovie() {
    const movieUrl = "https://www.themoviedb.org/movie/" + this.props.movie.id;
    window.location.href = movieUrl;
  }

  viewPoster() {
    const posterUrl =
      "https://image.tmdb.org/t/p/w185" + this.props.movie.poster_path;
    window.location.href = posterUrl;
  }

  render() {
    return (
      <table key={this.props.movie.id}>
        <tbody>
          <tr className="movieRow">
            <td>
              <i onClick={this.viewPoster.bind(this)} value="View">
                <img
                  className="moviePoster"
                  src={
                    "https://image.tmdb.org/t/p/w185" +
                    this.props.movie.poster_path
                  }
                  width="100"
                  alt="movie poster"
                />
              </i>
            </td>
            <td>
              <i onClick={this.viewMovie.bind(this)} value="View">
                <h3 className="movieTitle">{this.props.movie.title}</h3>
              </i>
              <i onClick={this.viewMovie.bind(this)} value="View">
                <p>{this.props.movie.overview}</p>
              </i>
              {/* <input
                type="button"
                onClick={this.viewMovie.bind(this)}
                value="View"
              /> */}
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default MovieRow;
