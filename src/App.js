import React from "react";
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  // AXIOS IS USED TO FETCH API IN CLASS COMPONENTS
  componentWillMount() {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7dß"
      )
      .then((resp) => {
        this.setState({ data: resp.data });
        console.log(this.state.data);
      });
  }
  // SETS TITLE TO 'TokenWatch'
  componentDidMount() {
    document.title = "TokenWatch";
  }

  render() {
    return (
      <Router>
        <Switch>
          <div className="App">
            <header className="App-header">
              <nav className="nav-menu">
                <a style={{ fontSize: "12pt" }} className="nav-text" href="/">
                  {" "}
                  Home
                </a>
              </nav>
              <h1 style={{ fontSize: "36pt" }}>TokenWatch</h1>
              <p style={{ fontSize: "16pt" }}>
                The Crypto Monitoring App built with React
              </p>
            </header>
            <Route exact path="/TokenWatch/:coinID" component={withRouter(Info)} />
            <Route exact path="/TokenWatch">
              <List data={this.state.data} />{" "}
              {/*This components houses the list of tokens */}
            </Route>
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
