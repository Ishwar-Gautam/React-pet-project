import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faForward,
  faBackward,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

import classes from "./Controls.module.css";
import FavoritesContext from "../store/favorites-context";

const storeColor = {};

function Controls(props) {
  const favoritesCtx = useContext(FavoritesContext);

  if (!storeColor[props.id]) storeColor[props.id] = "ivory";

  function toggleColor() {
    if (storeColor[props.id] === "red") {
      storeColor[props.id] = "ivory";

      favoritesCtx.removeFavorite(props.id);
    } else {
      storeColor[props.id] = "red";

      favoritesCtx.addFavorite({
        id: props.id,
        title: props.songs[props.id].title,
        artist: props.songs[props.id].artist,
        img_src: props.songs[props.id].img_src,
        src: props.songs[props.id].src,
      });
    }
  }

  return (
    <div className={classes.controlContainer}>
      <div
        className={
          storeColor[props.id] === "ivory" ? classes.ivory : classes.red
        }
      >
        <FontAwesomeIcon
          icon={faHeart}
          onClick={toggleColor}
          title="Add to Favorites"
        />
      </div>
      <div className="c-player--controls">
        <button className="skip-btn" onClick={() => props.SkipSong(false)}>
          <FontAwesomeIcon icon={faBackward} title="Go to Back" />
        </button>
        <button
          className="play-btn"
          onClick={() => props.setIsPlaying(!props.isPlaying)}
          title="Play"
        >
          <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
        </button>
        <button className="skip-btn" onClick={() => props.SkipSong()}>
          <FontAwesomeIcon icon={faForward} title="Go to Next" />
        </button>
      </div>
    </div>
  );
}

export default Controls;
