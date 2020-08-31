import React from 'react';
import Coin from './Coin'

const List = ({data}) => {
    
   return (<div> {data.map((coin => {
        return (
             <Coin coin={coin} key={coin.id}/>
            )    
    }))} </div>)

    
    }
export default List;