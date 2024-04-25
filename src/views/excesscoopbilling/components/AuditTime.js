import React from 'react'
import DashboardCard from '../../../components/shared/DashboardCard';
import {Box, styled, Stack, Typography, Avatar, Grid, Divider } from '@mui/material';
import {IconClock,IconBriefcase, IconCurrencyDollar } from '@tabler/icons-react';
import BarChart from '../../components/pages/Barchart';
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
    borderRadius: '4px',
    width: '24px',
    height: '24px',
   '& svg':{
      color:theme.palette.primary.contrastText,
      width: '16px',
      height: '16px'
    }

  }));
  return (
    <DashboardCard 
      title={
        <Typography variant='h5'>Audit Time Period</Typography>
      }
      
    >
    <Grid container alignItems={'center'}>
      <Grid item xs={12} mb={1}>{moment().format('MM/DD/YY')}</Grid>
      <Grid item lg={4}>
        <TypographyStyled variant='body1' marginBottom={1} sx={{ color: theme.palette.accent.main}}>Contribution to Total Findings</TypographyStyled>
      </Grid>
      <Grid item lg={8}>
        <Box style={{ marginTop: '-25px', marginBottom: '-25px', marginLeft: '20px' }}><BarChart color={theme.palette.success.main} percentage={50} chartWidth="150" chartHeight="150" chartLableFonrSize="16px" /></Box>
      </Grid>
    </Grid>
    <Stack direction='column'marginTop={3}>
        <Stack direction='row'spacing={4} alignItems="center" justifyContent="space-between"  marginBottom={2}>
          <Stack direction='row' spacing={1} alignItems="center" marginBottom={2}>
            <AvatarStyled style={{ backgroundColor: theme.palette.success.main }}><IconClock /></AvatarStyled>
            <Box>
              <Typography variant='body2'>Hour Saved</Typography>
            </Box>
          </Stack>
          <Typography variant='body2' style={{ color: theme.palette.success.main }}>18 h</Typography>
        </Stack>
        <Box mb={2} ><Divider /></Box>
        <Stack direction='row'spacing={4} alignItems="center" justifyContent="space-between"  marginBottom={2}>
          <Stack direction='row'spacing={1} alignItems="center">
            <AvatarStyled style={{ backgroundColor: theme.palette.accent.main }}>
              <IconBriefcase/>
            </AvatarStyled>
            <Box>
              <Typography variant='body2'>Resources Saved</Typography>
            </Box>
          </Stack>
          <Typography  variant='body2' style={{ color: theme.palette.accent.main }}>496</Typography>
        </Stack>
        <Box mb={2} ><Divider /></Box>
        <Stack direction='row'spacing={4} alignItems="center" justifyContent="space-between"  marginBottom={2}>
          <Stack direction='row'spacing={1} alignItems="center">
            <AvatarStyled style={{ backgroundColor: theme.palette.primary.light }}>
              <IconCurrencyDollar />
            </AvatarStyled>
            <Box>
              <Typography variant='body2'>Amount Saved</Typography>
            </Box>
          </Stack>
          <Typography  variant='body2' style={{ color: theme.palette.primary.light }}>${new Intl.NumberFormat().format(57423)}</Typography>
        </Stack>       
      </Stack>	

	</DashboardCard>
  )
}

export default AuditTime;
