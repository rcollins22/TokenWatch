import React from "react";



const Coin = ({ coin }) => {
    console.log(coin.image)
    if (coin.price_change_percentage_24h > 0) {
        return (
            <div className="coin-inst"><img src={coin.image} className="pic" /><span className="symbol">{coin.name}</span><span className="change up">{Math.round((coin.price_change_percentage_24h + Number.EPSILON) * 100) / 100}%</span></div>)
    } else {
        return (
            <div className="coin-inst"><img src={coin.image} className="pic" /><span className="symbol">{coin.name}</span><span className="change down">{Math.round((coin.price_change_percentage_24h + Number.EPSILON) * 100) / 100}%</span></div>)
    }
}

export default Coin