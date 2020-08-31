import React, { Component, useState, useRef, useEffect } from "react";
import { Line, Pie, Bar } from "react-chartjs-2";
import { render } from "@testing-library/react";
import axios from "axios"

const Chart = (props) => {
  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/bitcoin?localization=false")
      .then((resp) => {
        this.setState({ data: resp.data });
        console.log(this.state.data);
      });
  });

  console.log(props.name);
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  );
};

export default Chart;
