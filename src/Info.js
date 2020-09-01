import React, { useState, useEffect } from "react";
import "./App.css";
import { useParams } from "react-router-dom";

function Info() {
  let { coinID } = useParams();
  useEffect(() => {
    getInfo();
  }, []);

  let fetchLink = `https://api.coingecko.com/api/v3/coins/${coinID}?localization=false&tickers=false`;

  const [coinInfo, setcoinInfo] = useState([]);
  const [cPicOb, setCPicOb] = useState([]);
  const [ath, setath] = useState([]);
  const [atl, setatl] = useState([]);
  const [hourL, sethourL] = useState([]);
  const [hourH, sethourH] = useState([]);
  const [hourChg, sethourChg] = useState([]);
  const [atlDate, setatlDate] = useState([]);
  const [athDate, setathDate] = useState([]);
  const [curPrice, setcurPrice] = useState([]);
  const [mCap, setmCap] = useState([]);
  const [coinDesc, setcoinDesc] = useState([]);

  const getInfo = async () => {
    const cInst = await fetch(fetchLink);

    const coinInfo = await cInst.json();
    console.log(coinInfo);
    setcoinInfo(coinInfo);

    const cPicOb = coinInfo.image;
    setCPicOb(cPicOb);

    const cMar = coinInfo.market_data;

    const atl = cMar.atl.usd;
    setatl(atl);

    const ath = cMar.ath.usd.toFixed(2);
    setath(ath);

    const hourL = cMar.low_24h.usd.toFixed(2);
    sethourL(hourL);

    const hourH = cMar.high_24h.usd;
    sethourH(hourH);

    const hourChg = cMar.market_cap_change_24h_in_currency.usd;
    sethourChg(hourChg);

    const atlDate = cMar.atl_date.usd;
    setatlDate(atlDate);

    const athDate = cMar.ath_date.usd;
    setathDate(athDate);

    const rawPrice = cMar.current_price.usd;
    const curPrice = rawPrice.toFixed(2);
    setcurPrice(curPrice);

    function numFormat(labelValue) {
      // Nine Zeroes for Billions
      return Math.abs(Number(labelValue)) >= 1.0e9
        ? (Math.abs(Number(labelValue)) / 1.0e9).toFixed(2) + "B"
        : // Six Zeroes for Millions
        Math.abs(Number(labelValue)) >= 1.0e6
        ? (Math.abs(Number(labelValue)) / 1.0e6).toFixed(2) + "M"
        : // Three Zeroes for Thousands
        Math.abs(Number(labelValue)) >= 1.0e3
        ? (Math.abs(Number(labelValue)) / 1.0e3).toFixed(2) + "K"
        : Math.abs(Number(labelValue));
    }
    const mCap = numFormat(cMar.market_cap.usd);

    setmCap(mCap);

    const coinDesc = coinInfo.description.en;
    setcoinDesc(coinDesc);
  };

  return (
    <header>
      <div className="info-box head-box">
        <div id="leftHead">
          <img className="head-img" src={cPicOb.small} />
          <h1 className="head-text">{coinInfo.name}</h1>
          <h5>{coinInfo.symbol}</h5>
        </div>
        <div id="rightHead">
          <p className="head-small">
            24h Low/High:
            <span className="down"> ${hourL}</span>/
            <span className="up">${hourH}</span>
          </p>
          <h2 className="price">${curPrice}</h2>
          <p className="head-small">
            Market Cap:<span className="cap">${mCap}</span>
          </p>
        </div>
      </div>
    </header>
  );
}

export default Info;
