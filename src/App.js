import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Chart from './Chart'
import ApexChart from './newChart'

class App extends React.Component {

  constructor() {
    super()
  }
  componentWillMount() {
    this.getData()
  }

  getData() {
    // create a new XMLHttpRequest
    var xhr = new XMLHttpRequest()

    // get a callback when the server responds
    xhr.addEventListener('load', () => {
      // update the state of the component with the result here
      console.log(xhr.responseText)
    })
    // open the request with the verb and the url
    xhr.open('GET', 'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=USD&days=max')
    // send the request
    xhr.send()
  }
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     error: null,
  //     isLoaded: false,
  //     items: []
  //   };
  // }
 
  // componentDidMount() {
  //   fetch("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=USD&days=max")
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         this.setState({
  //           isLoaded: true,
  //           items: result
  //         });
  //       },
  //       // Note: it's important to handle errors here
  //       // instead of a catch() block so that we don't swallow
  //       // exceptions from actual bugs in components.
  //       (error) => {
  //         this.setState({
  //           isLoaded: true,
  //           error
  //         });
  //       }
  //     )
  //     console.log(this.state.items)
  // }
  
  render (){
    return (
      <div className="App">
        <header className="App-header">
          <Chart name = "testing" />
          <p>
            nooo<code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
         
        </header>
      </div>
    );
  }
};

export default App;
