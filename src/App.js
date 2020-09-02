import React, { useState } from "react";
import "./App.css";
import List from "./List";
import axios from "axios";
import Info from "./Info";
import {
  BrowserRouter as Router,
  withRouter,
  Route,
  Switch,
} from "react-router-dom";
import ApexCharts from 'apexcharts'
import Chart from './components/Chart'




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentWillMount() {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7dß"
      )
      .then((resp) => {
        this.setState({ data: resp.data });
      });
  }

  render() {
    return (
      <Router>
        <Switch>
          <div className="App">
            <header className="App-header">
              <h1>The 100 Watch App</h1>
            </header>
            <Route exact path="/:coinID" component={withRouter(Info)} />
            <Route exact path="/">
              <List data={this.state.data} />
            </Route>
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
