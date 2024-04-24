import React from 'react'
import DashboardCard from '../../../components/shared/DashboardCard';
import {Box, styled,  Stack, Typography, Avatar,Grid, Divider } from '@mui/material';
import {IconClock,IconBriefcase, IconCurrencyDollar} from '@tabler/icons-react';
import BarChart from '../../../components/pages/BarChart';
import { useTheme } from '@emotion/react';


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
          <Typography variant='h5' mb={2}>Recouped Amount</Typography>
          <Typography variant='BigTitle' sx={{ color: theme.palette.accent.main }} >$ 1,280</Typography>
        </Grid>
        <Grid item sm={6}><BarChartStyled><BarChart color={theme.palette.accent.main} percentage={75.5} /></BarChartStyled></Grid>
      </Grid>
      
      <Stack direction='column'marginTop={3}>
        <Stack direction='row'spacing={4} alignItems="center" justifyContent="space-between"  marginBottom={2}>
          <Stack direction='row' spacing={2} alignItems="center" marginBottom={2}>
            <AvatarStyled>
                <IconClock />
            </AvatarStyled>
            <Box>
              <Typography variant='h5'>Hour Saved</Typography>
            </Box>
          </Stack>
          <Typography  variant='h4' style={{ color: theme.palette.success.main }}>18 h</Typography>
        </Stack>
        <Box mb={2} ><Divider /></Box>
        <Stack direction='row'spacing={4} alignItems="center" justifyContent="space-between"  marginBottom={2}>
          <Stack direction='row'spacing={2} alignItems="center">
            <AvatarStyled style={{ backgroundColor: theme.palette.accent.main }}>
              <IconBriefcase/>
            </AvatarStyled>
            <Box>
              <Typography variant='h5'>Resources Saved</Typography>
            </Box>
          </Stack>
          <Typography  variant='h4' style={{ color: theme.palette.accent.main }}>496</Typography>
        </Stack>
        <Box mb={2} ><Divider /></Box>
        <Stack direction='row'spacing={4} alignItems="center" justifyContent="space-between"  marginBottom={2}>
          <Stack direction='row'spacing={2} alignItems="center">
            <AvatarStyled style={{ backgroundColor: theme.palette.primary.light }}>
              <IconCurrencyDollar />
            </AvatarStyled>
            <Box>
              <Typography variant='h5'>Amount Saved</Typography>
            </Box>
          </Stack>
          <Typography  variant='h4' style={{ color: theme.palette.primary.light }}>$57423</Typography>
        </Stack>       
      </Stack> 

	  </DashboardCard>
  )
}

export default Impactoverview;
