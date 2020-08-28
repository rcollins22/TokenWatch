import React from 'react';


const List = ({data}) => {
    const myArr = []
    console.log(data)
    data.forEach((coin => {

        if (coin.price_change_percentage_24h > 0){
            myArr.push(<li className="coin-inst"><img src={coin.image} className="pic"/><span className="symbol">{coin.name}</span><span className="change up">{Math.round((coin.price_change_percentage_24h + Number.EPSILON) * 100) / 100}%</span></li>)
        } else {
            myArr.push(<li className="coin-inst"><img src={coin.image} className="pic"/><span className="symbol">{coin.name}</span><span className="change down">{Math.round((coin.price_change_percentage_24h + Number.EPSILON) * 100) / 100}%</span></li>)
        }
    }))
    // const myList = (<ul>{myArr}</ul>)
    console.log(myArr)

    return (
    <ul className="coin-list">{myArr}<p>{}</p></ul>
    )
    }
export default List;