import React, { useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts'
import { useParams } from 'react-router-dom';
import ApexCharts from 'apexcharts'

function Donut(props) {
    let circ = props.cir_sup
    let ttl = props.ttl_sup
    if(ttl == null){
        ttl = 0
    }
    let rem = ttl-circ

    const state = {
        series: [circ,rem],
        options: {
            chart: {
                width: 380,
                type: 'donut',
            },
            dataLabels: {
                enabled: false
            },
            fill: {
                type: 'gradient',
            },
            legend: {
                formatter: function (val, opts) {
                    return val + " - " + opts.w.globals.series[opts.seriesIndex]
                }
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        },
    };



    return (
        <div id="chart">
            <ReactApexChart options={state.options} series={state.series} type="donut" width={380} />
        </div>
    );
}

export default Donut