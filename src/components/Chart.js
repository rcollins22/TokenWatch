import React, { useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts'
import { useParams } from 'react-router-dom';
import ApexCharts from 'apexcharts'




function Chart(props) {
  let coinID = props.coin
  const [dateArr, setdateArr] = useState([]);
  const [priceArr, setpriceArr] = useState([]);
  const [chartPrices, setchartPrices] = useState([]);


  const getInfo = async () => {
    const rawData = await fetch(`https://api.coingecko.com/api/v3/coins/${coinID}/market_chart?vs_currency=usd&days=365`);
    const chartData = await rawData.json();
    let dateArr=[];
    let priceArr=[];
    const chartPrices = chartData.prices
    setchartPrices(chartPrices)
    chartData.prices.map((instArr)=>{
      dateArr.push(new Date(instArr[0]));
      setdateArr(dateArr)
      priceArr.push(instArr[1].toFixed(2))
      setpriceArr(priceArr)
    });
    console.log(coinID)
  }
  useEffect(() => {
    getInfo()
  }, []);

  const series =[{
    name: {coinID},
    data: chartPrices
  }];
  
  const options = {
    chart: {
      // background: none,
      type: "area",
      stacked: false,
      height: 350,
      foreColor: '#ffffff',
      zoom: {
        type: "x",
        enabled: true,
        autoScaleYaxis: true,
      },
      toolbar: {
        autoSelected: "zoom",
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0
    },
    title: {
      text: `Price Movement`,
      align: "center"
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100]
      }
    },
    theme: {
      mode: 'light', 
      palette: 'palette10', 
      monochrome: {
          enabled: true,
          color: '#e1d5e8',
          shadeTo: 'dark',
          shadeIntensity: 0.95
      }
  },
    yaxis: {
      labels: {
        formatter: function (val) {
          return (val).toFixed(3);
          },
      },
      title: {
        text: "Price",
      },
      tickAmount:10
    },
    xaxis: {
      type: "datetime",
    },
    tooltip: {
      shared: false,
      y: {
        formatter: function (val) {
        return val.toFixed(4);
        },
      },
    },
  }

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={550}
      />
    </div>
  );
}

export default Chart;

