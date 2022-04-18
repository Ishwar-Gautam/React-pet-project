import { musicList } from "../../music-list";
import classes from "./AllMusicList.module.css";

function AllMusicList() {
  return (
    <div className={classes.card}>
      {musicList.map((list) => (
        <div key={list.id}>
          <div className={classes.countContainer}>
            <h1>{list.id}</h1>
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

export default AllMusicList;
