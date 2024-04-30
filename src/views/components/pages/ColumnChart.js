
import React from 'react';
import ReactApexChart from 'react-apexcharts';

const ColumnChart = () => {
  const options = {
    series: [{
      name: 'PRODUCT A',
      data: [-5.0, -2.5, -3.5, -4.5,-2.5],
    },  {
      name: 'PRODUCT C',
      data: [5, 2.5, 3.5, 4.5, 2.5],
    }],
    chart: {
      type: 'bar',
      stacked: true,
      toolbar: {
        show: false
      },
      zoom: {
        enabled: true
      },

    },
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
          position: 'bottom',
          offsetX: 20,
          offsetY: 60
        }
      }
    }],
    plotOptions: {
      bar: {
        vertical: true,
        borderRadius: 7,
        barWidth: '10%',
        barHeight: 100,
        borderRadiusApplication: 'end',
        borderRadiusWhenStacked: 'last',     
      },
    },
	stroke: {
		show: true,
		width: 30,
		lineCap: "butt",
		colors: ["transparent"],
   
	},
	dataLabels: {
         enabled: false
    },
    xaxis: {
      type: 'category',
	  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    },
    legend: {
		show: false
    },
    fill: {
      opacity: 1,
	  colors:['#f93131','#00A15D'],
	 
    }
  };

  return (
    <div id="chart">
      <ReactApexChart options={options} series={options.series} type="bar" height={200} />
    </div>
  );
};

export default ColumnChart;
