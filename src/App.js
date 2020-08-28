import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Chart from "./Chart";
import ApexChart from "./newChart";
import List from './List'
import axios from "axios"


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  
  componentWillMount () {
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7dß")
      .then(resp=> {
        this.setState({data: resp.data})
        console.log(this.state.data)
      })
  }
  


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Chart name="The 100 Watch App" />
          <p>
           The crypto Market app Built with React
          </p>
          
          <List  data = {this.state.data} />
          
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            This will be a cool app at some point
          </a>
        </header>
      </div>
    );
  }
}

export default App;
