import React, { Component } from "react";
import "./App.css";
import MovieRow from "./MovieRow";
import $ from "jquery";

const logo = "green_app_icon.svg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    // const movies = [
    //   {
    //     id: 0,
    //     poster_src:
    //       "https://image.tmdb.org/t/p/w600_and_h900_bestv2/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
    //     title: "Avengers: Infinity War",
    //     overview:
    //       "Mothafuckin super heroes saving the world and shit again. Who even knows.",
    //   },
    //   {
    //     id: 1,
    //     poster_src:
    //       "https://image.tmdb.org/t/p/w600_and_h900_bestv2/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
    //     title: "The Avengers",
    //     overview:
    //       "Mothafuckin super heroes saving the world and shit. Who even knows.",
    //   },
    // ];

    // let movieRows = [];
    // movies.map((movie) => {
    //   const movieRow = <MovieRow movie={movie} />;

    //   movieRows.push(movieRow);
    // });

    // this.state = { rows: movieRows };

    this.performSearch("a");
  }

  performSearch(searchTerm) {
    const urlString =
      "https://api.themoviedb.org/3/search/movie?api_key=" +
      process.env.REACT_APP_API_KEY +
      "&query=" +
      searchTerm;
    console.log(urlString);
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        // console.log("Fetched data successfully");
        const results = searchResults.results;
        // console.log(results);

        let movieRows = [];
        results.map((movie) => {
          // console.log(movie.title);
          const movieRow = <MovieRow key={movie.id} movie={movie} />;
          movieRows.push(movieRow);
        });

        this.setState({ rows: movieRows });
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data: " + err);
      },
    });
  }

  searchChangeHandler(event) {
    // console.log(event.target.value);
    const searchTerm = event.target.value;
    this.performSearch(searchTerm);
  }

  render() {
    return (
      <div className="App">
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img width="50" src={logo} alt="movieDb logo" />
              </td>
              <td width="8" />
              <td>
                <h1>MoviesDB Search</h1>
              </td>
            </tr>
          </tbody>
        </table>
        <input
          className="searchBar"
          placeholder="Enter search term"
          onChange={this.searchChangeHandler.bind(this)}
        />

        {this.state.rows}
        <button className="previousPage">Previous Page</button>
        <button className="nextPage">Next Page</button>
      </div>
    );
  }
}

export default App;
