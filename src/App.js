import { Route, Switch } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import HomePage from "./components/Pages/HomePage";
import AllMusicList from "./components/Pages/AllMusicList";
import MyFavorites from "./components/Pages/MyFavorites";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/add-music">
          <AllMusicList />
        </Route>
        <Route path="/my-favorites">
          <MyFavorites />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
