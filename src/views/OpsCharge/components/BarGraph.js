import { JoinFullRounded } from '@mui/icons-material';
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
    stroke: {
      width: 1,
      colors: ['#fff']
    
    },
	plotOptions: {
		bar: {
		  vertical: true,
		  borderRadius: 7,
		  barWidth: '',
		  barHeight: 150,  
		},
		
	  },
	  stroke: {
		show: true,
		lineCap: "butt",
		colors: ["transparent"],
   
	},
	options: {
        legend: {
          position: 'bottom',
        },
	},
	dataLabels: {
         enabled: false
    },
    xaxis: {
		categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May','June','July'],
    },
	legend: {
		show: false
    },
    fill: {
      opacity: 1
    },
    colors:['#f93131','#00A15D'],
    yaxis: {
      labels: {
        show: false
      }
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left',
	  show:false
    }
  };

  const series = [
{
		name: 'Bar Data',
		data: [65,59,80,81,56,55,40],
	  }, 
	   {
		  name: 'Line Data',
		  data: [28,48,40,19,86,27,90],
	  },
  ];

  return (
    <div id="chart">
      <Chart options={options} series={series} type="bar"  height={180} />
    </div>
  );
};

export default BarGraph;
