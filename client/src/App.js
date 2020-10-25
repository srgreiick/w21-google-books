import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SavedBooks from "./pages/SavedBooks";
import BookSearch from "./pages/BookSearch";
import Nav from "./components/Nav";



function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={BookSearch} />
          <Route exact path="/saved" component={SavedBooks} />
          <Route exact path="/saved/:id" component={SavedBooks} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;