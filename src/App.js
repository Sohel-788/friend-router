import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import FriendDetail from "./Components/FriendDetail/FriendDetail";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
function App() {

  return (
    <Router>
      <Switch>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path="/friend/:friendId">
          <FriendDetail/>
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
