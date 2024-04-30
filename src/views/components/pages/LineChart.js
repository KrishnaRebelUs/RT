import React from 'react';
import ReactApexChart from 'react-apexcharts';

const LineChart = () => {
  const series = [{
    name: "",
    data: [-5.0,-2.5,0.0,2.5,5.0],

  }];

  const options = {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      },
	  toolbar:{
		show: false,
	},
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
	    colors: '#00A15D', 
    },	
    title: {
     show: false,
    },
    grid: {
      row: {
        colors: ['#fff', 'transparent'],
        opacity: 0.5
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    }
  };

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={options} series={series} type="line" height={200} />
      </div>
    </div>
  );
};

export default LineChart;
