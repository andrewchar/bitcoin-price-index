import React, { useState, useEffect, useLayoutEffect } from 'react';

// import Chart from "chart.js";
import { Line } from 'react-chartjs-2';

const chart = props => {
  console.log(props.data);
  const [ctx, setCtx] = useState(null);
  const [ctxConfig, SetCtxConfig] = useState(null);

  const data = props.data;

  //   const myLineChart = new Chart(ctx, {
  //     type: "line",
  //     data: [20, 10, 30, 50, 40, 200, 125]
  //     // options: options
  //   });

  useEffect(() => {
    setCtx(document.getElementById('myChart'));
  });

  //   let myChart = new Chart(ctx, {
  //     type: "bar",
  //     data: {
  //       labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  //       datasets: [
  //         {
  //           label: "# of Votes",
  //           data: [12, 19, 3, 5, 2, 3],
  //           backgroundColor: [
  //             "rgba(255, 99, 132, 0.2)",
  //             "rgba(54, 162, 235, 0.2)",
  //             "rgba(255, 206, 86, 0.2)",
  //             "rgba(75, 192, 192, 0.2)",
  //             "rgba(153, 102, 255, 0.2)",
  //             "rgba(255, 159, 64, 0.2)"
  //           ],
  //           borderColor: [
  //             "rgba(255,99,132,1)",
  //             "rgba(54, 162, 235, 1)",
  //             "rgba(255, 206, 86, 1)",
  //             "rgba(75, 192, 192, 1)",
  //             "rgba(153, 102, 255, 1)",
  //             "rgba(255, 159, 64, 1)"
  //           ],
  //           borderWidth: 1
  //         }
  //       ]
  //     },
  //     options: {
  //       scales: {
  //         yAxes: [
  //           {
  //             ticks: {
  //               beginAtZero: true
  //             }
  //           }
  //         ]
  //       }
  //     }
  //   });

  const dataPrice = Object.keys(data.bpi).map((el, i) => {
    return Math.round(data.bpi[el] * 100) / 100;
  });
  console.log(dataPrice);

  const dataDates = Object.keys(data.bpi).map(el => {
    return el;
  });
  //   console.log(dataDates);

  const foo = {
    labels: dataDates,
    datasets: [
      {
        label: 'My First dataset',
        lineTension: 0,
        pointRadius: 0,
        pointHoverBackgroundColor: 'hotpink',
        data: dataPrice
      }
    ]
  };

  const chartOptions = {
    scales: {
      xAxes: [
        {
          gridLines: {
            drawOnChartArea: false
          }
        }
      ],
      yAxes: [
        {
          gridLines: {
            drawOnChartArea: false
          }
        }
      ]
    }
  };

  return (
    <div>
      <Line data={foo} options={chartOptions} />

      <hr />
      <hr />
      <hr />
      <hr />
      <h1>chart.js</h1>
      {/* <ul>
        {s.map(el => {
          return el;
        })}
      </ul> */}
    </div>
  );
};

export default chart;
