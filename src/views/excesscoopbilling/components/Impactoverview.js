import React from 'react'
import DashboardCard from '../../../components/shared/DashboardCard';
import {Box, styled, Typography, Avatar, Grid, Divider } from '@mui/material';
import BarChart from '../../components/pages/BarChart';
import { useTheme } from '@emotion/react';
import NumberData from '../../components/pages/NumberData';


const Impactoverview = () => {
  const AvatarStyled = styled(Avatar)(({ theme }) => ({
    backgroundColor: theme.palette.success.main,
    borderRadius: '6px',
    width: '30px',
    height: '30px',
    '& svg':{
      color: 'white',
      width: '18px',
      height: '18px'
    }
  }));

  const BarChartStyled = styled(Box)(({ theme }) => ({
    marginTop: '-25px',
    marginBottom: '-25px'
  }));

  const theme = useTheme();
  return (
    <DashboardCard
      title={
        <Typography variant='h3' sx={{ color: theme.palette.primary.main }}>Impact Overview</Typography>
      }
    >
      <Grid container alignItems="center">
        <Grid item sm={6} py={2}>
         
          <Typography variant='h6' mb={1}>Recouped Amount</Typography>
          <Typography variant='h2' sx={{ color: theme.palette.accent.main }} >$ {new Intl.NumberFormat().format(1280)}</Typography>
        </Grid>
        <Grid item sm={6}><BarChartStyled><BarChart color={theme.palette.accent.main} percentage={75.5} chartWidth="180" chartHeight="180" chartLableFonrSize="18px" /></BarChartStyled></Grid>
      </Grid>
      <Box mt={4}><Divider/></Box>
      <NumberData />

	  </DashboardCard>
  )
}

export default Impactoverview;
