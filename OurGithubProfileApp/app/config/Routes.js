import React from "react";
import { hashRouter, Route, Link, Switch } from "react-router-dom";
import Home from "../components/Home";
import Search from "../components/Search";
import Details from "../components/Details";
import NotFound from "../components/NotFound";

const Routes = () => {
  return (
    <hashRouter>
      <div className="MyReactApp">
        <nav>
          <Link to="/">Home</Link>
          <Link to="search">Search</Link>
          <Link to="NotFound">NotFound</Link>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="search" component={Search} />
          <Route component={NotFound} />
      <div/>
    <HashRouter/>
  );
};

export default Routes;
