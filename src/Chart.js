import React, { Component, useState, useRef, useEffect } from 'react';
import {Line, Pie, Bar} from 'react-chartjs-2';
import { render } from '@testing-library/react';


const Chart = (props) => {
    console.log(props.name)
   return(
       <div>
           <h1>{props.name}</h1>
       </div>
   )
}




export default Chart;

