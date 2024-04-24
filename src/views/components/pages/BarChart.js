import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const BarChart = ({ color, percentage }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    console.log('Percentage changed:', percentage);
    const options = {
      chart: {
        height: 150,
        type: "radialBar"
      },
      
      series: [percentage],
      
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 3,
            size: "60%"
          },
         
          dataLabels: {
            showOn: "always",
            name: {
              show: false
            },
            value: {
              color: "#111",
              fontSize: "10px",
              show: true,
              offsetY: 0, 
              textAlign: 'center',
              textAnchor: 'middle'
            },
          },
          strokeWidth: 1
        }
      },
    
      stroke: {
        lineCap: "round",
      },
      labels: ["Progress"]
    };

    const chart = new ApexCharts(chartRef.current, options);
    chart.render();
    chartInstance.current = chart;

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [percentage]); 

  useEffect(() => {
    console.log('Color changed:', color);
    if (chartInstance.current) {
      chartInstance.current.updateOptions({
        colors: [color]
      });
    }
  }, [color]);

  return <div ref={chartRef} />;
};

export default BarChart;
