import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@emotion/react';

const PieChart = () => {
  const theme = useTheme();
  const primary = theme.palette.success.main;
  const accentlight = theme.palette.accent.main;
  const successlight = theme.palette.secondary.main;
  const options = {
    chart: {
      width: 180,
      type: 'pie',
    },
    colors: [primary, accentlight, successlight],
    dataLabels: {
      enabled: false, 
    },
    legend: {
      show: false,
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 100,
        },
        legend: {
          show: false, 
        },
      },
    }],
  };

  const series = [1000, 2000, 3000]; 

  return (
    <div id="chart">
      <Chart options={options} series={series} type="donut" height='120px' />
    </div>
  );
};

export default PieChart;
