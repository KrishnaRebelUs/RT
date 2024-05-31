import React, {useState, useEffect} from 'react';
import {styled, Stack, Typography, Box, Grid, Avatar } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import user  from '../../assets/images/profile/user-1.jpg';
import welcome  from '../../assets/images/profile/welcome.svg';
import BarChart from '../components/pages/Barchart';
import { useTheme } from '@emotion/react';
import PieChart from '../components/pages/PieChart';
import DonutChart from '../components/pages/DonutChart';
import { IconGridDots,IconSearch,IconOctagon,IconPercentage,IconCurrencyDollar,IconSectionSign, IconTrendingDown3,IconCircleDashed,IconCheck,IconExclamationCircle } from '@tabler/icons-react';
import ComparisionChart from '../components/pages/ComparisionChart';
import ColumnChart from '../components/pages/ColumnChart';


const AvatarStyled = styled(Avatar)(({ theme }) => ({
  backgroundColor: '#ecf2ff',
  borderRadius: '7px',
 '& svg':{
  color: theme.palette.primary.main
 }
  }));


const Dashboard = () => {
  const dataSeries = [22000, 36456, 23100];
  const newSeries = [300200,125220,175000];
  const theme = useTheme();
  const[time, setTime] = useState(new Date());
  useEffect(()=>{
    const timerId = setInterval(()=>tick(), 1000);
    return () => clearInterval(timerId);

  },[]);
  const tick = () =>{
    setTime(new Dtae());
  }

  return (
   <PageContainer title='Dashboard Page'>
        <Grid container spacing={2} mb={3}>
             <Grid item lg={8} xs={12}>
                <DashboardCard>
                   <Grid container justifyContent='space-between' >
                     <Grid item lg={6}>
                        <Box>
                            <Stack direction='row' spacing={3} mb={5}>
                              <Avatar>
                                 <img src={user} alt='user-profile' style={{width: '100%'}} />
                              </Avatar>
                              <Box>
                                 <Typography variant='h5' style={{marginBottom: '3px'}}>Welcome Himanshu Sharma</Typography>
                                 <Typography variant='h6' style={{marginBottom: '3px'}}>Coustmer</Typography>
                                 <Typography variant='body1'>Polk Audio | Sound United (US & CA) FinOps</Typography>
                              </Box>
                            </Stack>
                            <Stack direction='row' spacing={4} >
                              <Box>
                                 <Typography variant='h3' style={{marginBottom: '3px'}}>{time.toLocaleTimeString('en-US', { timeZone: 'America/Chicago' })}</Typography>
                                 <Typography variant='body2' style={{marginBottom: '3px'}}>CST</Typography>
                              </Box>
                              <Box>
                                 <Typography variant='h3' style={{marginBottom: '3px'}}>{time.toLocaleTimeString()}</Typography>
                                 <Typography variant='body1' style={{marginBottom: '3px'}}>IST</Typography>
                              </Box>
                            </Stack>
                        </Box>
                     </Grid>
                     <Grid item lg={6}>
                         <Box style={{marginBottom:'-60px', textAlign: 'end', marginLeft: '50px'}}>
                           <img src={welcome} alt= 'welcome' />
                         </Box>
                     </Grid>
                   </Grid>
                </DashboardCard>
             </Grid>
             <Grid item xs={12} lg={2}>
                <DashboardCard title={
                    <Typography variant='h4' sx={{ color: theme.palette.accent.main, textAlign: 'center' }}>
                        Current Stage
                    </Typography>}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Typography variant="h3" sx={{ color: theme.palette.secondary.main, textAlign: 'center' }} marginBottom={1}>Stage: 4</Typography>

                        </Grid>
                        <Grid item xs={12}>
                            <Box style={{ marginTop: '-30px', marginLeft: '-13px' }} ><BarChart color={theme.palette.secondary.main} percentage={37} chartWidth="150" chartHeight="120" chartLableFonrSize="16px" /></Box>
                        </Grid>
                    </Grid>
                </DashboardCard>
            </Grid>
             <Grid item lg={2} xs={12}>
                <DashboardCard>
                  <Box style={{textAlign: 'center'}}>
                    <Typography variant='h4' style={{marginBottom: '10px',color: theme.palette.success.main}} >Report</Typography>
                    <Typography variant='h3' style={{marginBottom: '10px'}} >$10,230</Typography>
                    <PieChart />
                    
                  </Box>
                </DashboardCard>
             </Grid>
        </Grid>
        <Grid container spacing={2} mb={3}>
          <Grid item xs={12} lg={4}>
            <DashboardCard  title={
                <Typography variant='h4'>Excess Coop Billing</Typography>
               
            }>

               <Grid container justifyContent='space-between' alignItems='center' mb={3}>
                  <Grid item>
                      <Stack direction='row'  alignItems='center' spacing={1}>
                          <AvatarStyled variant='square'><IconSearch /></AvatarStyled>
                          <Typography variant='h5' sx={{ color: theme.palette.accent.main }}>Finding Amount</Typography>
                      </Stack>
                  </Grid>
                  <Grid item>
                     <Typography variant='h4'>${new Intl.NumberFormat().format(22000.32)}</Typography>
                  </Grid>
                </Grid>
                <Grid container justifyContent='space-between'  alignItems='center' mb={3}>
                  <Grid item>
                      <Stack direction='row'  alignItems='center' spacing={1}>
                        <AvatarStyled variant='square'><IconGridDots /></AvatarStyled>
                        <Typography variant='h5' sx={{ color: theme.palette.secondary.main }}>Disputed</Typography>
                      </Stack>
                  </Grid>
                  <Grid item>
                     <Typography variant='h4'>${new Intl.NumberFormat().format(36456.20)}</Typography>
                  </Grid>
                </Grid>
                <Grid container justifyContent='space-between'>
                  <Grid item>
                      <Stack direction='row'  alignItems='center' spacing={1}>
                        <AvatarStyled variant='square'><IconOctagon /></AvatarStyled>
                        <Typography variant='h5' sx={{ color: theme.palette.success.main }}>Current Stage</Typography>
                      </Stack>
                          
                  </Grid>
                  <Grid item>
                     <Typography variant='h4'>3</Typography>
                  </Grid>
                </Grid>
            </DashboardCard>
          </Grid>
          <Grid item xs={12} lg={4}>
             <DashboardCard
             title={
              <Typography variant='h4'>Shortage Claim</Typography>
             
          }>
            <DonutChart series={dataSeries} />
            <Grid container mt={2} justifyContent='space-between'>
              <Grid item>
                 <Stack direction='row' spacing={2}>
                    <AvatarStyled variant='square'><IconCheck /></AvatarStyled>
                    <Box>
                      <Typography variant='h6'>Approved</Typography>
                      <Typography variant='subtitle1'>${new Intl.NumberFormat().format(36456.20)}</Typography>
                    </Box>
                 </Stack>
              </Grid>
              <Grid item>
                  <Stack direction='row' spacing={2}>
                    <AvatarStyled variant='square'><IconExclamationCircle /></AvatarStyled>
                    <Box>
                      <Typography variant='h6'>Pending</Typography>
                      <Typography variant='subtitle1'>${new Intl.NumberFormat().format(23100.00)}</Typography>
                    </Box>
                  </Stack>
              </Grid>
            </Grid>
          </DashboardCard>
          </Grid>
          <Grid item xs={12} lg={4}>
             <DashboardCard
             title={
              <Typography variant='h4'>Financial Scorecard</Typography>
             
          }>
             <Grid container justifyContent='space-between' alignItems='center' mb={3}>
                  <Grid item>
                      <Stack direction='row'  alignItems='center' spacing={1}>
                          <AvatarStyled variant='square'><IconPercentage /></AvatarStyled>
                          <Typography variant='h5' sx={{ color: theme.palette.accent.main }}>EBITDA % (YTD)</Typography>
                      </Stack>
                  </Grid>
                  <Grid item>
                     <Typography variant='h4'>40%</Typography>
                  </Grid>
                </Grid>
                <Grid container justifyContent='space-between'  alignItems='center' mb={3}>
                  <Grid item>
                      <Stack direction='row'  alignItems='center' spacing={1}>
                        <AvatarStyled variant='square'><IconCurrencyDollar /></AvatarStyled>
                        <Typography variant='h5' sx={{ color: theme.palette.secondary.main }}>EBITDA ($) (YTD)</Typography>
                      </Stack>
                  </Grid>
                  <Grid item>
                     <Typography variant='h4'>${new Intl.NumberFormat().format(55362.20)}</Typography>
                  </Grid>
                </Grid>
                <Grid container justifyContent='space-between'>
                  <Grid item>
                      <Stack direction='row'  alignItems='center' spacing={1}>
                        <AvatarStyled variant='square'><IconSectionSign /></AvatarStyled>
                        <Typography variant='h5' sx={{ color: theme.palette.success.main }}>Deduction</Typography>
                      </Stack>
                          
                  </Grid>
                  <Grid item>
                     <Typography variant='h4'>${new Intl.NumberFormat().format(32225.20)}</Typography>
                  </Grid>
                </Grid>
          </DashboardCard>
          </Grid>
        </Grid>
        <Grid container spacing={2} mb={3}>
          <Grid item xs={12} lg={4}>
            <DashboardCard  title={
                <Typography variant='h4'>Price Claim</Typography>
               
            }>  
               <Grid container>
                <Grid item>
                  <ComparisionChart />
                </Grid>
               </Grid>
               <Grid container justifyContent='space-between' alignItems='center' mb={3}>
                  <Grid item>
                      <Stack direction='row'  alignItems='center' spacing={1}>
                          <AvatarStyled variant='square'><IconCircleDashed /></AvatarStyled>
                          <Typography variant='h5' sx={{ color: theme.palette.accent.main }}>Disputed</Typography>
                      </Stack>
                  </Grid>
                  <Grid item>
                     <Typography variant='h4'>${new Intl.NumberFormat().format(300200.20)}</Typography>
                  </Grid>
                </Grid>
                <Grid container justifyContent='space-between'  alignItems='center' mb={3}>
                  <Grid item>
                      <Stack direction='row'  alignItems='center' spacing={1}>
                        <AvatarStyled variant='square'><IconCheck /></AvatarStyled>
                        <Typography variant='h5' sx={{ color: theme.palette.secondary.main }}>Approved</Typography>
                      </Stack>
                  </Grid>
                  <Grid item>
                     <Typography variant='h4'>${new Intl.NumberFormat().format(125220.40)}</Typography>
                  </Grid>
                </Grid>
                <Grid container justifyContent='space-between'>
                  <Grid item>
                      <Stack direction='row'  alignItems='center' spacing={1}>
                        <AvatarStyled variant='square'><IconExclamationCircle /></AvatarStyled>
                        <Typography variant='h5' sx={{ color: theme.palette.success.main }}>Pending</Typography>
                      </Stack>
                          
                  </Grid>
                  <Grid item>
                       <Typography variant='h4'>${new Intl.NumberFormat().format(175000.00)}</Typography>
                  </Grid>
                </Grid>
            </DashboardCard>
          </Grid>
          <Grid item xs={12} lg={4}>
             <DashboardCard
             title={
              <Typography variant='h4'>Invoice Reconciliation</Typography>
             
          }>
            <DonutChart series={newSeries} />
            <Grid container mt={2} justifyContent='space-between'>
              <Grid item>
                 <Stack direction='row' spacing={2}>
                    <AvatarStyled variant='square'><IconCheck /></AvatarStyled>
                    <Box>
                      <Typography variant='h6'>Approved</Typography>
                      <Typography variant='subtitle1'>${new Intl.NumberFormat().format(125220.40)}</Typography>
                    </Box>
                 </Stack>
              </Grid>
              <Grid item>
                  <Stack direction='row' spacing={2}>
                    <AvatarStyled variant='square'><IconExclamationCircle /></AvatarStyled>
                    <Box>
                      <Typography variant='h6'>Pending</Typography>
                      <Typography variant='subtitle1'>${new Intl.NumberFormat().format(175000.00)}</Typography>
                    </Box>
                  </Stack>
              </Grid>
            </Grid>
          </DashboardCard>
          </Grid>
          <Grid item xs={12} lg={4}>
             <DashboardCard
             title={
              <Typography variant='h4'>Operational Chargebacks</Typography>
             
          }>
                <Grid container justifyContent='space-between' alignItems='center' mb={3}>
                  <Grid item>
                      <Stack direction='row'  alignItems='center' spacing={1}>
                          <AvatarStyled variant='square'><IconCircleDashed /></AvatarStyled>
                          <Typography variant='h5' sx={{ color: theme.palette.accent.main }}> Total Disputed</Typography>
                      </Stack>
                  </Grid>
                  <Grid item>
                     <Typography variant='h4'>${new Intl.NumberFormat().format(300200.20)}</Typography>
                  </Grid>
                </Grid>
                <Grid container justifyContent='space-between' spacing='' alignItems='center' mb={3}>
                  <Grid item>
                      <Stack direction='row'  alignItems='center' spacing={1}>
                        <AvatarStyled variant='square'><IconCheck /></AvatarStyled>
                        <Typography variant='h5' sx={{ color: theme.palette.secondary.main }}>Total Approved</Typography>
                      </Stack>
                  </Grid>
                  <Grid item>
                     <Typography variant='h4'>${new Intl.NumberFormat().format(125220.40)}</Typography>
                  </Grid>
                </Grid>
                <Grid container justifyContent='space-between'>
                  <Grid item>
                      <Stack direction='row'  alignItems='center' spacing={1}>
                        <AvatarStyled variant='square'><IconExclamationCircle /></AvatarStyled>
                        <Typography variant='h5' sx={{ color: theme.palette.success.main }}> Total Pending</Typography>
                      </Stack>
                          
                  </Grid>
                  <Grid item>
                       <Typography variant='h4'>${new Intl.NumberFormat().format(175000.00)}</Typography>
                  </Grid>
                </Grid>
          </DashboardCard>
          </Grid>
        </Grid>
   </PageContainer>
  );
};

export default Dashboard;
