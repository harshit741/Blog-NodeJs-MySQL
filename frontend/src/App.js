import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreatePost from "./components/CreatePost";
import AllPosts from "./components/AllPosts";
import UpdatePost from "./components/UpdatePost";
import Post from "./components/Post";

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Switch>
        <Route path="/" exact component={AllPosts} />
        <Route path="/create" exact component={CreatePost} />
        <Route path="/update/:id" exact component={UpdatePost} />
        <Route path="/:id" exact component={Post} />
      </Switch>
    </Router>
  );
}

export default App; 
