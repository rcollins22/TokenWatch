import React, { useState, useEffect } from "react";
import "./App.css";
import { useParams } from "react-router-dom";

function Info() {
  let { coinID } = useParams();
  useEffect(() => {
    getInfo();
  }, []);

  let fetchLink = `https://api.coingecko.com/api/v3/coins/${coinID}?localization=false`;

  const [coinInfo, setcoinInfo] = useState([]);
  const getInfo = async () => {
    const cInst = await fetch(fetchLink);

    const coinInfo = await cInst.json();
    console.log(coinInfo);
    setcoinInfo(coinInfo);
  };

  return (
    <header>
      <p>This is the Info Page {coinInfo.id}</p>
    </header>
  );
}

export default Info;
