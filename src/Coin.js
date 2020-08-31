import React from "react";



const Coin = ({ coin }) => {
    if (coin.price_change_percentage_24h > 0) {
        return (
        <div className="coin-inst iup"><span className="rankNo">{coin.market_cap_rank}</span><img src={coin.image} className="pic" /><span className="name">{coin.name}</span><span className="symbol">{coin.symbol}</span><span className="curPrice">${Math.ceil(coin.current_price * 100)/100}</span><span className="change up">{Math.round((coin.price_change_percentage_24h + Number.EPSILON) * 100) / 100}%</span></div>)
    } else {
        return (
            <div className="coin-inst idwn"><span className="rankNo">{coin.market_cap_rank}</span><img src={coin.image} className="pic" /><span className="name">{coin.name}</span><span className="symbol">{coin.symbol}</span><span className="curPrice">${Math.ceil(coin.current_price * 100)/100}</span><span className="change down">{Math.round((coin.price_change_percentage_24h + Number.EPSILON) * 100) / 100}%</span></div>)
    }
}

export default Coin