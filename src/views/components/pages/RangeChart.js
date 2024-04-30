import React from 'react';
import Chart from 'react-apexcharts'

const RangeChart= () => {
  function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const seriesData = [
    {
      type: 'rangeArea',
      name: 'Dispute Amount',
      data: Array.from({ length: 12 }, (_, i) => ({
        x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i],
        y: [getRandomInRange(500, 3000), getRandomInRange(2000, 6000)]
      }))
    },
    {
      type: 'rangeArea',
      name: 'Denied Amount',
      data: Array.from({ length: 12 }, (_, i) => ({
        x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i],
        y: [getRandomInRange(3000, 5000), getRandomInRange(4000, 7000)]
      }))
    },
    {
      type: 'rangeArea',
      name: 'Approved Amount',
      data: Array.from({ length: 12 }, (_, i) => ({
        x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i],
        y: [getRandomInRange(2000, 4000), getRandomInRange(3000, 6000)]
      }))
    },
    {
      type: 'line',
      name: 'Dispute Median',
      data: Array.from({ length: 12 }, (_, i) => ({
        x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i],
        y: getRandomInRange(1000, 3000)
      }))
    },
    {
      type: 'line',
      name: 'Denied Median',
      data: Array.from({ length: 12 }, (_, i) => ({
        x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i],
        y: getRandomInRange(3000, 6000)
      }))
    },
    {
      type: 'line',
      name: 'Approved Median',
      data: Array.from({ length: 12 }, (_, i) => ({
        x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i],
        y: getRandomInRange(2000, 5000)
      }))
    }
  ];
  const options = {
    chart: {
      height: 350,
      type: 'rangeArea',
      animations: {
        speed: 500
      },
	  toolbar:{
		show: false,
	  }
    },
    colors: ['#d4526e', '#33b2df', '#d4526e', '#33b2df'],
    dataLabels: {
      enabled: false
    },
    fill: {
      opacity: [0.24, 0.24, 1, 1]
    },
    forecastDataPoints: {
      count: 2
    },
    stroke: {
      curve: 'straight',
      width: [0, 0, 2, 2]
    },
    legend: {
      show: true,
      customLegendItems: ['Dispute Amount', 'Denied Amount', 'Approved Amount'],
      inverseOrder: true
    },
    title: {
      text: ''
    },
    markers: {
      hover: {
        sizeOffset: 5
      }
    }
  };

  return (
    <div>
       <Chart options={options} series={seriesData} type="rangeArea" height={350} />
    </div>
  );
};

export default RangeChart;
