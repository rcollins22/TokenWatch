import React, { useState, useEffect } from "react";
import "./App.css";
import "./index.css";
import { useParams } from "react-router-dom";
import Chart from "./components/Chart";
import Donut from './components/Donut'
import ReactDOM from 'react-dom'

function Info() {
  let { coinID } = useParams();          
  useEffect(() => {
    getInfo();
  }, []);

  
  // THIS SETS VARIABLE FETCH LINK TO CHANGE BASED ON THE TOKEN SELECTED.
  let fetchLink = `https://api.coingecko.com/api/v3/coins/${coinID}?localization=false&tickers=false`;

  // SETTING POTENTIALLY NEEDED VARIABLES TO STATE FOR USE
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
  const [pcgCh, setpcgCh] = useState([]);
  const [ttlSply, setttlSply] = useState([]);
  const [cirSply, setcirSply] = useState([]);
  const [vol, setvol] = useState([]);
  const [atlCh, setatlCh] = useState([]);
  const [athCh, setathCh] = useState([]);

  const getInfo = async () => {
    const cInst = await fetch(fetchLink);       //FETCHES API HERE

    const coinInfo = await cInst.json();
    console.log(coinInfo);
    setcoinInfo(coinInfo);

    const cPicOb = coinInfo.image;
    setCPicOb(cPicOb);

    const cMar = coinInfo.market_data;
    const volData = cMar.total_volume;

    const atl = cMar.atl.usd.toFixed(3);   //'.toFixed(3)' SETS THE DECIMAL TO ALWAYS ROUND TO HUNDREDTH (.000)
    setatl(atl);

    const ath = cMar.ath.usd.toFixed(3);
    setath(ath);

    const hourL = cMar.low_24h.usd.toFixed(3);
    sethourL(hourL);

    const hourH = cMar.high_24h.usd.toFixed(3);
    sethourH(hourH);

    const hourChg = cMar.market_cap_change_24h_in_currency.usd;
    sethourChg(hourChg);

    const shortString = function (str1, length) {             //THIS FUNCTION WAS USED TO CREATE TO TAKE ONLY THE 
      if (str1.constructor === String && length > 0) {       // NEEDED PORTION OF THE RETURNED DATE
        return str1.slice(0, length);
      }
    };
    const atlD = cMar.atl_date.usd;

    const atlDate = shortString(atlD, 10);
    setatlDate(atlDate);

    const athD = cMar.ath_date.usd;
    const athDate = shortString(athD, 10);
    setathDate(athDate);

    const pcgCh = cMar.price_change_percentage_24h.toFixed(2);
    setpcgCh(pcgCh);

    const ttlSply = cMar.max_supply;
    setttlSply(ttlSply);

    const cirSply = cMar.circulating_supply;
    setcirSply(cirSply);

    const vol = numFormat(volData.usd);
    setvol(vol);

    const rawPrice = cMar.current_price.usd;
    const curPrice = rawPrice.toFixed(3);
    setcurPrice(curPrice);

    // THE FOLLOWING FUNCTION FORMATS NUMBERS FROM (6743474990 -> 6.74B ) 
    function numFormat(labelValue) { 
      return Math.abs(Number(labelValue)) >= 1.0e9
        ? (Math.abs(Number(labelValue)) / 1.0e9).toFixed(2) + "B"
        : Math.abs(Number(labelValue)) >= 1.0e6
        ? (Math.abs(Number(labelValue)) / 1.0e6).toFixed(2) + "M"
        : Math.abs(Number(labelValue)) >= 1.0e3
        ? (Math.abs(Number(labelValue)) / 1.0e3).toFixed(2) + "K"
        : Math.abs(Number(labelValue));
    }

    const mCap = numFormat(cMar.market_cap.usd);
    setmCap(mCap);

    const coinD = coinInfo.description.en;
    function createElementFromHTML(htmlString) {
      let div = document.getElementById('infoBox');
      div.innerHTML = htmlString.trim();
    
    }
    const coinDesc = createElementFromHTML(coinD)
    setcoinDesc(coinDesc);

    const athCh = cMar.ath_change_percentage.usd.toFixed(2);
    setathCh(athCh);

    const atlCh = cMar.atl_change_percentage.usd.toFixed(2);
    setatlCh(atlCh);

    const cSym = coinInfo.symbol
  };

  
  return (
    <body>
      <div className="info-box head-box">
        <div id="leftHead">
          <img className="head-img" src={cPicOb.small} />
          <h1 className="head-text">{coinInfo.name}</h1>
          <h5 id="symb">{coinInfo.symbol}</h5>
        </div>
        <div id="rightHead">
          <p className="head-small">
            24h Low/High:
            <span className="down"> ${hourL}</span>/
            <span className="up">${hourH}</span>
          </p>
          <h2 className="price">
            ${curPrice} <span className="pcg">{pcgCh}%</span>
          </h2>
          <p className="head-small">
            Market Cap:<span className="bld"> ${mCap}</span>
          </p>
        </div>
      </div>
      <div id="section-mid">
        <div className=" info-box chart-box">
          <Chart coin={coinID} name={coinInfo.name} />
        </div>
        <div id="floatbox">
          <div className="info-box market-box">
            <p className="market-text 1">
              Market Rank:
              <span className="rnum bld">{coinInfo.market_cap_rank}</span>
            </p>
            <p className="market-text 2">
              24 Hour Volume: <span className="rnum bld">${vol}</span>
            </p>
            <p className="market-text 1">
              All-Time High:
              <span className="rnum bld">${ath}</span>
            </p>
            <p className="market-text 2">
              All-Time High Date:
              <span className="rnum bld">{athDate}</span>
            </p>
            <p className="market-text 1">
              All-Time High % Change: <span className="rnum bld">{athCh}%</span>
            </p>
            <p className="market-text 2">
              All-Time Low: <span className="rnum bld">${atl}</span>
            </p>
            <p className="market-text 1">
              All-Time Low Date:
              <span className="rnum bld">{atlDate}</span>
            </p>
            <p className="market-text 2">
              All-Time Low % Change: <span className="rnum bld">{atlCh}%</span>
            </p>
          </div>
          <div className=" info-box donut-box">
            <Donut cir_sup={cirSply} ttl_sup={ttlSply}/>
          </div>
        </div>
      </div>
      <div id="infoBox" className="info-box about-box">
        <h1>About {coinInfo.name}</h1>
        <p className="about-text">{coinDesc}</p>
      </div>
    </body>
  );
}

export default Info;
