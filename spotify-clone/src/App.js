import React, { useEffect, useState } from "react";
import "./App.css";
import { Login, Player } from "./components/index";
import { getTokenFromUrl } from "./utils/spotify";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState();
  useEffect(() => {
    // run code based on a given condition
    // if you want to run once, put empty brackets, otherwise load when variable changes
    // grab token from url at point app kicks off
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        console.log(user);
      });
    }

    console.log("I HAVE A TOKEN >>> ", token);
  }, []);

  return <div className="App">{token ? <Player /> : <Login />}</div>;
}

export default App;
