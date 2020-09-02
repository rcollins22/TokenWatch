import React from "react";
import Coin from "./components/Coin";

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
