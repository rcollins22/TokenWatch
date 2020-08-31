import React from 'react';
import Coin from './Coin'

const List = ({data}) => {
    
   return (<div className="coinNest"> {data.map((coin => {
        return (
             <Coin coin={coin} key={coin.id}>
                 <Chart
             </Coin>
            )    
    }))} </div>)

    
    }
export default List;