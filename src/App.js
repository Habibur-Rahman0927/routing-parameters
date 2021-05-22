import React from 'react';
import Friend from './Component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Home from './Component/Home/Home';
import NoMatch from './Component/NoMatch/NoMatch';
import FriendDetails from './Component/FriendDetail/FriendDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Home">
          <Home></Home>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/friend/:id">
          <FriendDetails></FriendDetails>
        </Route>
        <Route path="*">
          <NoMatch></NoMatch>      
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
