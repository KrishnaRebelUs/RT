import React from 'react'
import DashboardCard from '../../../components/shared/DashboardCard';
import {Box, styled, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Chart from 'react-apexcharts';
const RecoupedAmount = () => {
	const TypographyStyled = styled(Typography)(({ theme }) => ({
		color: theme.palette.secondary.main,
	  }));
	  const theme = useTheme();
	  const secondary = theme.palette.success.main;
	  const success = theme.palette.success.exrtaDark;
	  const errorlight = '#fdede8';
	
	  // chart
	  const optionscolumnchart = {
		chart: {
		  type: 'area',
		  fontFamily: "'Plus Jakarta Sans', sans-serif;",
		  foreColor: '#adb0bb',
		  stacked: true,
		  toolbar: {
			show: false,
		  },
		  height: 60,
		  sparkline: {
			enabled: true,
		  },
		  group: 'sparklines',
		},
		stroke: {
		  curve: 'smooth',
		  width: 5,
		},
		fill: {
			type: "gradient",
			gradient: {
			  shadeIntensity: 1,
			  opacityTo: 0.1,
			  stops: [30, 80, 100]
			}
		},
		marker: {
			show: false
		  },
		tooltip: {
		  theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
		},
	  };
	  const seriescolumnchart = [
		{
		  name: '',
		  color: secondary,
		  data: [25, 66, 20, 40, 12, 58, 20],
		},
	  ];
  return (
    <DashboardCard  
		title={
			<TypographyStyled variant='h5' sx={{color: theme.palette.success.extraDark}}>Recouped Amount</TypographyStyled>
		} 
		footer={
			<Chart options={optionscolumnchart} series={seriescolumnchart} type="area" height="100px" width='200px' className='recoupend-amount'/>
      	}
	>
		<TypographyStyled variant='h3'   sx={{color:  theme.palette.success.extraDark}}>$ {new Intl.NumberFormat().format(3794508)}</TypographyStyled>	

	</DashboardCard>
  )
}

export default RecoupedAmount;
