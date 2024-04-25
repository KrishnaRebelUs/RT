import React from 'react'
import DashboardCard from '../../../components/shared/DashboardCard';
import {Box, styled, Stack, Typography, Avatar, Grid } from '@mui/material';
import {IconClock,IconBriefcase, IconCoinPound} from '@tabler/icons-react';
import BarChart from '../../components/pages/BarChart';
import { useTheme } from '@emotion/react';
import NumberData from '../../components/pages/NumberData';
import moment from 'moment';


const AuditTime = () => {
  const theme= useTheme();
	const TypographyStyled = styled(Typography)(({ theme }) => ({
		color: theme.palette.text.white,
	  }));
    const AvatarStyled = styled(Avatar)(({ theme }) => ({
      backgroundColor: theme.palette.primary.light,
      borderRadius: '7px',
     '& svg':{
        color:theme.palette.primary.contrastText,
      }

      }));
  return (
    <DashboardCard 
      title={
        <Typography variant='h5'>Audit Time Period</Typography>
      }
      date={
        moment().format('MM/DD/YY')
      }
    >
    <Grid container alignItems={'center'}>
      <Grid item lg={6}>
        <TypographyStyled variant='h5' marginBottom={1} sx={{ color: theme.palette.accent.main}}>Contribution to Total Findings</TypographyStyled>
      </Grid>
      <Grid item lg={6}>
        <Box style={{ marginTop: '-25px', marginBottom: '-25px', marginLeft: '20px' }}><BarChart color={theme.palette.success.main} percentage={50} chartWidth="150" chartHeight="150" chartLableFonrSize="16px" /></Box>
      </Grid>
    </Grid>
    <NumberData />		

	</DashboardCard>
  )
}

export default AuditTime;
