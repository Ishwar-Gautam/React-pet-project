import { useContext } from "react";

import FavoritesContext from "../store/favorites-context";
import classes from "./AllMusicList.module.css";

function MyFavorites() {
  const favoritesCtx = useContext(FavoritesContext);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You got no favorites yet. Start adding some?</p>;
  } else {
    content = (
      <div className={classes.card}>
        {favoritesCtx.favorites.map((list) => (
          <div key={list.id}>
            <div className={classes.countContainer}>
              <h1>{favoritesCtx.favorites.indexOf(list) + 1}</h1>
            </div>
            <div className={classes.image}>
              <img src={list.img_src} />
            </div>
            <span className={classes.title}>Name:</span> {list.title} <br />
            <span className={classes.title}>Artist:</span> {list.artist} <br />
            <br />
            <hr />
            <br />
          </div>
        ))}
      </div>
    );
  }

  return <section>{content}</section>;
}

export default MyFavorites;
