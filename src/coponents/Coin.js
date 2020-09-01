import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

const Coin = ({ coin }) => {
    const switchURL = () => {
        window.location=`/${coin.id}`
    }
  if (coin.price_change_percentage_24h > 0) {
    return (
      <Router>
        {/* <Link to={`/${coin.id}`}> */}
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
        {/* </Link> */}
      </Router>
    );
  } else {
    return (
        <Router>
        {/* <Link to={`/${coin.id}`} > */}
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
                (coin.price_change_percentage_24h + Number.EPSILON) * 100
              ) / 100}
              %
            </span>
          </div>
        {/* </Link> */}
      </Router>
    );
  }
};

export default Coin;
