import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { useParams } from "react-router-dom";
import ApexCharts from "apexcharts";

function Donut(props) {
    let circ = props.cir_sup;
    console.log(circ)
    let ttl = props.ttl_sup;
    console.log(ttl)
    let rem;
    if (ttl == null) {
        ttl = circ;
        rem = 100
    } else {
        rem = ((circ / ttl) * 100).toFixed();
    };

    function numFormat(labelValue) {
        return Math.abs(Number(labelValue)) >= 1.0e9
          ? (Math.abs(Number(labelValue)) / 1.0e9).toFixed(2) + "B"
          : Math.abs(Number(labelValue)) >= 1.0e6
          ? (Math.abs(Number(labelValue)) / 1.0e6).toFixed(2) + "M"
          : Math.abs(Number(labelValue)) >= 1.0e3
          ? (Math.abs(Number(labelValue)) / 1.0e3).toFixed(2) + "K"
          : Math.abs(Number(labelValue));
      }
      const fCirc = numFormat(circ);
      const fTtl = numFormat(ttl);

    const options = {
        chart: {
            foreColor: '#ffffff',
            height: 480,
            type: "radialBar"
        },
        series: [rem
        ],
        // colors: ["#4918FF"],
        plotOptions: {
            radialBar: {
                startAngle: -135,
                endAngle: 135,
                track: {
                    dropShadow: {
                        enabled: true,
                        top: 2,
                        left: 0,
                        blur: 4,
                        opacity: 0.15
                    },
                    background: '#333',
                    startAngle: -135,
                    endAngle: 135,
                },
                dataLabels: {
                    name: {
                        show: true,
                    },
                    value: {
                        fontSize: "24px",
                        show: true

                    }
                }
            }
        },
        fill: {
            type: "gradient",
            gradient: {
                shade: "dark",
                type: "horizontal",
                gradientToColors: ["#574DD9"],
                stops: [0, 100]
            }
        },
        stroke: {
            lineCap: "butt"
        },
        labels: ["Circulating Supply"]
    };


    return (
        <div>
            <h3 style= {{margin: "0"}}>Token Metrics</h3>
            <ReactApexChart
                options={options}
                series={options.series}
                type="radialBar"
                width='100%'

            />
            <div className="legend">
                <p className="market-text 1">
                    Circulating Supply: <span className="rnum bld">{fCirc}</span>
                </p>
                <p className="market-text 2">
                    Total Supply: <span className="rnum bld">{fTtl}</span>
                </p>
            </div>
        </div> 
    );
};

export default Donut;
