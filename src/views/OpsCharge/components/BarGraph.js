import React from 'react';
import Chart from 'react-apexcharts';

const BarGraph = () => {
  const options = {
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
      toolbar: {
        show: false
      },
      zoom: {
        enabled: true
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 7,
        columnWidth: '30%', 
      },
    },
    stroke: {
      show: true,
      width: 1,
      colors: ['#fff']
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
      labels: {
        rotate: -45
      }
    },
    dataLabels: {
      enabled: false
    },
    fill: {
      opacity: 1
    },
    colors: ['#f93131', '#00A15D'],
    yaxis: {},
    legend: {
      position: 'top',
      horizontalAlign: 'left',
      show: false
    }
  };

  const series = [
    {
      name: 'Bar Data',
      data: [-65, -59, -80, -81, -56, -55],
    },
    {
      name: 'Line Data',
      data: [28, 48, 40, 19, 86, 27],
    },
  ];

  return (
    <div id="chart">
      <Chart options={options} series={series} type="bar" height={150} />
    </div>
  );
};

export default BarGraph;
