import React, { useEffect } from "react";
import "./App.css";
import { Login, Player } from "./components/index";
import { getTokenFromUrl } from "./utils/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./contexts/DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  // const [token, setToken] = useState(null);

  const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    // run code based on a given condition
    // if you want to run once, put empty brackets, otherwise load when variable changes
    // grab token from url at point app kicks off
    const hash = getTokenFromUrl();
    window.location.hash = "";
    let _token = hash.access_token;

    if (_token) {
      spotify.setAccessToken(_token);

      dispatch({ type: "SET_TOKEN", token: _token });
      // setToken(_token);

      spotify.getMe().then((user) => {
        dispatch({ type: "SET_USER", user: user });
      });

      spotify.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );

      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify,
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify.getPlaylist("37i9dQZEVXcFKQY8DI8eiS").then((response) => {
        dispatch({ type: "SET_DISCOVER_WEEKLY", discover_weekly: response });
      });
    }

    console.log("I HAVE A TOKEN >>> ", token);
  }, [token, dispatch]);

  // console.log("User: " + user);
  // console.log("Token: " + token);

  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
