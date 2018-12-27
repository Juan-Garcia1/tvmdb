import React, { Component, Fragment } from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import Movies from "./pages/movies";
import MovieInfo from "./pages/movieInfo";
import Tv from "./pages/tvShows";
import TvShowInfo from "./pages/tvShowInfo";

import { connect } from "react-redux";
import { getApiConfig } from "./actions/apiConfigAction";
import Loading from "./components/loading";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

class App extends Component {
  componentDidMount() {
    this.props.getApiConfig();
  }
  render() {
    if (!Object.keys(this.props.config.config).length) {
      return <Loading />;
    }
    return (
      <Router>
        <Fragment>
          <Nav />
          <Switch>
            <Route exact path="/movies" component={Movies} />
            <Route exact path="/movies/details/:id" component={MovieInfo} />
            <Route exact path="/tv" component={Tv} />
            <Route exact path="/tv/details/:id" component={TvShowInfo} />
            <Route path="/" component={() => <Redirect to="/movies" />} />
          </Switch>
          <Footer />
        </Fragment>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    config: state.config
  };
};

export default connect(
  mapStateToProps,
  { getApiConfig }
)(App);
