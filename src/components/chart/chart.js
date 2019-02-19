import React from 'react';

import { Line } from 'react-chartjs-2';

const chart = props => {
  const data = props.data;
  const dataPrice = Object.keys(data.bpi).map(el => {
    return Math.round(data.bpi[el] * 100) / 100;
  });
  const dataDates = Object.keys(data.bpi).map(el => {
    return el;
  });

  const chartData = {
    labels: dataDates,
    datasets: [
      {
        label: 'My First dataset',
        lineTension: 0,
        pointRadius: 0,
        pointHoverBackgroundColor: 'hotpink',
        data: dataPrice,
        backgroundColor: 'rgba(8,124,167,0.1)',
        borderColor: 'rgb(8,124,167)',
        borderWidth: 2
      }
    ]
  };

  const chartOptions = {
    tooltips: {
      mode: 'index',
      intersect: false
    },
    hover: {
      mode: 'index',
      intersect: false
    },
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
      <Line id="canvas" data={chartData} options={chartOptions} />
    </div>
  );
};

export default chart;
