import React, { useState } from "react";
import "./footer.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { Grid, Slider } from "@material-ui/core";

function Footer() {
  return (
    <div className="footer">
      <div className="footerLeft">
        <img
          className="footerAlbumLogo"
          src="https://m.media-amazon.com/images/I/812dhVyraKL._SS500_.jpg"
          alt=""
        />
        <div className="footerSongInfo">
          <h4>Cochise</h4>
          <p>Audioslave</p>
        </div>
      </div>
      <div className="footerCenter">
        <ShuffleIcon className="footerGreen" />
        <SkipPreviousIcon className="footerIcon" />
        <PlayCircleOutlineIcon fontSize="large" className="footerIcon" />
        <SkipNextIcon className="footerIcon" />
        <RepeatIcon className="footerGreen" />
      </div>
      <div className="footerRight">
        <Grid container space={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
