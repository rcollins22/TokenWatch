import React from "react";
import Coin from "./components/Coin";

// THIS FUNCTION COMPONENT MAPS THROUGH THE RETURNED LIST OF COINS AND CREATES AN LIST ELEMENT FOR EACH
const List = ({ data }) => {
  return (
    <div className="coinNest">
      {" "}
      {data.map((coin) => {                                  
        return <Coin coin={coin} key={coin.id} />;
      })}{" "}
    </div>
  );
};
export default List;
