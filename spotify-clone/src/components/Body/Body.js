import React from "react";
import "./body.css";
import { Header, SongRow } from "../index";
import { useDataLayerValue } from "../../contexts/DataLayer";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/FavoriteBorderOutlined";
import MoreHorizonIcon from "@material-ui/icons/MoreHoriz";

function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();

  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:37i9dQZEVXcFKQY8DI8eiS`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack(res).then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="bodyInfo">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="bodyInfoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="bodySongs">
        <div className="bodyIcons">
          <PlayCircleFilledIcon
            className="bodyShuffle"
            onClick={playPlaylist}
          />
          <FavoriteIcon fontSize="large" />
          <MoreHorizonIcon className="bodyMoreHorizon" />
        </div>
        {discover_weekly?.tracks.items.map(
          (item) => (
            console.log(item),
            (<SongRow playSong={playSong} track={item.track} />)
          )
        )}
      </div>
    </div>
  );
}

export default Body;
