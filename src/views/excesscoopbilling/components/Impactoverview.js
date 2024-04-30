import React from 'react'
import DashboardCard from '../../../components/shared/DashboardCard';
import {Box, styled, Typography, Avatar, Grid, Divider } from '@mui/material';
import BarChart from '../../components/pages/Barchart';
import { useTheme } from '@emotion/react';
import NumberData from '../../components/pages/NumberData';



const Impactoverview = () => {
  
  const theme = useTheme();
  const data = [
    { body: "Hour Saved", number: "18 h", icon: "IconClock", avatarBackgroundColor: theme.palette.success.extrDark, numberColor: theme.palette.success.extrDark},
    { body: "Resources Saved", number: "496", icon: "IconBriefcase", avatarBackgroundColor: theme.palette.accent.main, numberColor: theme.palette.success.extrDark },
    { body: "Amount Saved", number: "$57,423", icon: "IconCurrencyDollar",avatarBackgroundColor: theme.palette.primary.light, numberColor: theme.palette.success.extrDark}
  ];
  
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

  return (
    <DashboardCard
      title={
        <Typography variant='h3' sx={{ color: theme.palette.primary.main }}>Impact Overview</Typography>
      }
    >
      <Grid container alignItems="center">
        <Grid item sm={6} py={2}>
         
          <Typography variant='h6' mb={1} sx={{ color: theme.palette.accent.main }} >Recouped Amount</Typography>
          <Typography variant='h2' sx={{ color: theme.palette.accent.main }} >$ {new Intl.NumberFormat().format(1280)}</Typography>
        </Grid>
        <Grid item sm={6}>
          <BarChartStyled><BarChart color={theme.palette.accent.main} percentage={75.5} chartWidth="180" chartHeight="180" chartLableFonrSize="18px" /></BarChartStyled>
          <Typography variant='body1' style={{ textAlign: 'center', marginLeft: '25px', marginTop: '5px', fontWeight: '500'}} sx={{ color: theme.palette.accent.main }} >Rate</Typography>
        </Grid>
      </Grid>
      <Box mt={4}></Box>
      <NumberData data={data} />


	  </DashboardCard>
  )
}

export default Impactoverview;
