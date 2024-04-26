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
        plotOptions: {
            bar: {
                barHeight: '70%',
                distributed: true,
                horizontal: true,
                dataLabels: {
                    position: 'end'
                },
            }
        },
        colors: yAxisLabelColors,
        dataLabels: {
            enabled: true,
            textAnchor: 'middle',
            offsetX: 0,
            offsetY: -17,
            style: {
                colors: yAxisLabelColors,
                fontSize: '14px',
                fontWeight: '500',

            },
            formatter: function (val, opt) {
                return val + '%';
            },
            background: {
                enabled: true,
                foreColor: 'black',
                padding: 4,
                borderRadius: 2,
                borderWidth: 1,
                borderColor: 'green',
                opacity: 0.9,
                dropShadow: {
                    enabled: true,
                    top: 1,
                    left: 1,
                    blur: 1,
                    color: '#000',
                    opacity: 0.45
                }
            },
        },
        stroke: {
            show: true,
            width: 32,
            lineCap: "butt",
            colors: ["transparent"],
        },
        xaxis: {
            categories: ['Incorrect Freight', 'Incorrect Code', 'Incorrect Agreement', 'Duplicate Agreement'],
            labels: {
                show: false,
            },
            axisBorder: {
                show: true,
            },
        },
        yaxis: {
            labels: {
                show: true,
                style: {
                    fontSize: '14px',
                    colors: yAxisLabelColors,
                    fontWeight: '500'
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
            name: 'Win Rate',
            data: [10, 20, 30, 10],
        },
    ];

    return (
        <DashboardCard title={
            <Typography variant='h4' sx={{ color: theme.palette.text.dark }}>Win Rate</Typography>}>
            <Divider />
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
