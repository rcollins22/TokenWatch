import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";


// THIS FUNCTION COMPONENT TAKES THE COIN INSTANCES AND POPULATES A JSX ELEMENT DEPENDING ON WHETHER ITS UP OR DOWN IN PRICE
const Coin = ({ coin }) => {      
    const switchURL = () => {
        window.location=`/${coin.id}`   //THIS SWITCHES THE PAGE TO THE COIN BASED ON COIN'S ID
    }
  if (coin.price_change_percentage_24h > 0) {   //OPTIONS FOR POSITIVE MOVING TOKENS ARE PLACED IN JSX HERE. FOR STYLING
    return (
      <Router>
          <div className="coin-inst iup" onClick={switchURL}>
            <span className="rankNo">{coin.market_cap_rank}</span>    
            <img src={coin.image} className="pic" />
            <span className="name">{coin.name}</span>
            <span className="symbol">{coin.symbol}</span>
            <span className="curPrice">
              ${Math.ceil(coin.current_price * 100) / 100}
            </span>
            <span className="change up">
              {Math.round(
                (coin.price_change_percentage_24h + Number.EPSILON) * 100
              ) / 100}
              %
            </span>
          </div>
      </Router>
    );
  } else {                             //NEGATIVE MOVING COINS ARE PLACED IN JSX HERE. FOR STYLING
    return (                         
        <Router>
          <div className="coin-inst idwn" onClick={switchURL} >
            <span className="rankNo">{coin.market_cap_rank}</span>
            <img src={coin.image} className="pic" />
            <span className="name">{coin.name}</span>
            <span className="symbol">{coin.symbol}</span>
            <span className="curPrice">
              ${Math.ceil(coin.current_price * 100) / 100}
            </span>
            <span className="change down">
              {Math.round(
                (coin.price_change_percentage_24h + Number.EPSILON) * 100           //SETS PERCENTAGE TO READABLE FORMAT
              ) / 100}
              %
            </span>
          </div>
      </Router>
    );
  }
};

export default Coin;
