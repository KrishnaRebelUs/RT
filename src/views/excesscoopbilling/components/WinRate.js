import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { Divider, Typography } from '@mui/material';
import DashboardCard from '../../../components/shared/DashboardCard';
import { IconAnchor } from '@tabler/icons-react';
import { color, padding, style } from '@mui/system';

const WinRate = () => {
    const theme = useTheme();
    const primary = theme.palette.primary.main;
    const secondary = theme.palette.secondary.main;

    const yAxisLabelColors = [theme.palette.success.dark, theme.palette.accent.main, theme.palette.primary.main, theme.palette.warning.main];

    const optionsWinRate = {
        chart: {
            type: 'bar',
            toolbar: {
                show: false,
            },
            height: 380,
            offsetX: 0,
            offsetY: 0,
        },
        legend: {
            show: false,
        },
        plotOptions: {
            bar: {
                barHeight: '80%',
                distributed: true,
                horizontal: true,
                borderRadius: 3,
                dataLabels: {
                    position: 'start'
                },
                fill: {
                    colors: ['#FF5733', 'rgba(255, 87, 51, 0.5)'], 
                }
            }
        },
        colors: yAxisLabelColors,
        dataLabels: {
            enabled: true,
            textAnchor: 'middle',
            offsetX: 0,
            offsetY: -25,
            style: {
                colors: yAxisLabelColors,
                fontSize: '14px',
                fontWeight: '500',
                textAlign: 'left'

            },
            formatter: function (val, opt) {
                return val + '%'; 
            },
            
            background: {
                enabled: true,
                foreColor: '#fff',
                padding: 5,
                borderRadius: 4,
                opacity: 0.9,
                dropShadow: {
                    enabled: true,
                    top: 10,
                    left: 5,
                    blur: 5,
                    color: '#000',
                    opacity: 0.45
                }
            },
        },
        stroke: {
            show: true,
            width: 35,
            lineCap: "butt",
            colors: ["transparent"],
        },
        xaxis: {
            categories: ['Incorrect Freight', 'Incorrect Code', 'Incorrect Agreement', 'Duplicate Agreement'],
            labels: {
                show: true,
                formatter: function (val, opt) {
                    return val + '%'; 
                },
            },
            dataLabels: {
                 show: true,
            },
            axisBorder: {
                show: true
            },
            
        },
        yaxis: {
            labels: {
                show: true,
                offsetY: 0,
                style: {
                    fontSize: '14px',
                    colors: yAxisLabelColors,
                    fontWeight: '500',
                    textAnchor: 'start',
                },
                axisBorder: {
                    show: false,
                },
                maxWidth: 'auto',
            },
        },
        grid: {
            show: false
        },
    };

    const seriesWinRate = [
        {
            name: 'Win Rate %',
            data: [66, 57, 87, 60],
        },
    ];

    return (
        <DashboardCard title={
            <Typography variant='h4' sx={{ color: theme.palette.text.dark }}>Win Rate</Typography>}>
            <Chart
                options={optionsWinRate}
                series={seriesWinRate}
                type="bar"
                height="230px"
                width="100%"
            />
        </DashboardCard>
    );
};

export default WinRate;
