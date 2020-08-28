import React from 'react';


const List = ({data}) => {
    const myArr = []
    console.log(data)
    data.forEach((coin => {

        if (coin.price_change_percentage_24h > 0){
            myArr.push(<li className="coin-inst"><span className="symbol">{coin.symbol}</span><span className="change up">{coin.price_change_percentage_24h}%</span></li>)
        } else {
            myArr.push(<li className="coin-inst"><span className="symbol">{coin.symbol}</span><span className="change down">{coin.price_change_percentage_24h}%</span></li>)
        }
    }))
    // const myList = (<ul>{myArr}</ul>)
    console.log(myArr)

    return (
    <ul className="coin-list">{myArr}<p>{}</p></ul>
    )
    }
export default List;