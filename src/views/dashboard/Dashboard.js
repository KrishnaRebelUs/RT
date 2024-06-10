import React, {useState, useEffect} from 'react';
import {styled, Stack, Typography, Box, Grid, Avatar, Divider } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import user  from '../../assets/images/profile/user-1.jpg';
import { useTheme } from '@emotion/react';
import DonutChart from '../components/pages/DonutChart';
import { IconTimeDuration5,IconPercentage,IconCurrencyDollar,IconSectionSign, IconTrendingDown3,IconCircleDashed,IconCheck,IconExclamationCircle, IconSearch,IconGridDots,IconOctagon } from '@tabler/icons-react';
import ComparisionChart from '../components/pages/ComparisionChart';
import NumberData  from '../components/pages/NumberData';
import WinrateChart from '../components/pages/WinrateChart';
import WinLineChart from '../components/pages/WinLineChart';
import WinGraphChart from '../components/pages/WinGraphChart';


const AvatarStyled = styled(Avatar)(({ theme }) => ({
  backgroundColor: '#ecf2ff',
  borderRadius: '7px',
 '& svg':{
  color: theme.palette.primary.main
 }
  }));
  
const AvatarImgStyled = styled(Avatar)(({ theme }) => ({
height: '100px',
width: '100px'
 
 }));

 const BarChartStyled = styled(Box)(({ theme }) => ({
  marginTop: '-25px',
  marginBottom: '-25px'
}));

 
const Dashboard = () => {
  const theme = useTheme();
  const dataSeries = [22000, 36456];
  const newSeries = [300200,125220,175000];
  const priceSeries = [300200,125220,175000];
  const data = [
    { body: "Total $ saved", number: "$23,120", icon: "IconClock", avatarBackgroundColor: theme.palette.success.extrDark, numberColor: theme.palette.success.extrDark },
    { body: "Total Hours saved", number: "12 h", icon: "IconBriefcase", avatarBackgroundColor: theme.palette.accent.main, numberColor: theme.palette.success.extrDark },
    { body: "Total FTE saved", number: "$57,423", icon: "IconCurrencyDollar", avatarBackgroundColor: theme.palette.primary.extraLight, numberColor: theme.palette.success.extrDark }
];

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
             <Grid item lg={5} xs={12}>
                <DashboardCard>
                   <Grid container justifyContent='space-between' >
                     <Grid item lg={12}>
                        <Box>
                            <Stack direction='row' spacing={3} mb={5}>
                              <AvatarImgStyled>
                                 <img src={user} alt='user-profile' style={{width: '100%'}} />
                              </AvatarImgStyled>
                              <Box>
                                 <Typography variant='h5' style={{marginBottom: '3px'}}>Welcome,</Typography>
                                 <Typography variant='h5' style={{marginBottom: '3px'}}>Himanshu Sharma</Typography>
                                 <Typography variant='h6' style={{marginBottom: '3px'}}>Coustmer</Typography>
                                 <Typography variant='body1'>Polk Audio | Sound United (US & CA) FinOps</Typography>
                              </Box>
                            </Stack>
                        </Box>
                     </Grid>
                   </Grid>
                </DashboardCard>
             </Grid>
             <Grid item xs={12} lg={4}>
                <DashboardCard title={<Typography variant='h4' sx={{ color: theme.palette.primary.main, lineHeight:'28px' }}>
                Vendor Details</Typography>}>
                    <Box>
                        <Typography variant='h5' style={{marginBottom: '3px'}}>Polk Audio</Typography>
                        <Typography variant='body1'>Polk Audio (US), D&M (CA), Sound United (CA) </Typography>
                    </Box>
                </DashboardCard>
            </Grid>
             <Grid item lg={3} xs={12}>
                <DashboardCard title={<Typography variant='h4' sx={{ color: theme.palette.accent.main, lineHeight:'28px' }}>
                Impact Overview of Total Efforts</Typography>}>
                  <NumberData data={data} />
                </DashboardCard>
             </Grid>
        </Grid>
        <Grid container spacing={2} mb={3}>
          <Grid item xs={12} lg={4}>
              <Grid container spacing={2}>
                
                <Grid item xs={12} lg={12}>
                    <DashboardCard>
                          <BarChartStyled><WinrateChart color={theme.palette.secondary.main} percentage={60} chartHeight="150" chartWidth={320} chartLableFonrSize="20px" /></BarChartStyled>
                            <Typography variant='h3' style={{ textAlign: 'center', marginTop: '15px', fontWeight: '700'}} sx={{ color: theme.palette.primary.main }} >620.87K</Typography>
                            <Typography variant='h6' style={{ textAlign: 'center', marginTop: '15px', fontWeight: '700'}} sx={{ color: theme.palette.primary.main }} >Win Rate</Typography>
                    </DashboardCard>

                </Grid>
                <Grid item xs={12} lg={12}>
                   <Grid container spacing={2}>
                       <Grid item xs={12}>
                          <DashboardCard>
                               <Stack direction='row' spacing={4} alignItems='center'>
                                  <Box>
                                      <Typography variant='h6' sx={{ color: theme.palette.secondary.main }}>Findings($)</Typography>
                                      <Typography variant='h4' sx={{marginTop: '10px'}}>${new Intl.NumberFormat().format(22000.32)}</Typography>
                                  </Box>
                                  <Box> <WinLineChart/></Box>
                               </Stack>
                          </DashboardCard>
                       </Grid>
                       <Grid item xs={12}>
                          <DashboardCard>
                               <Stack direction='row' spacing={4} alignItems='center'>
                                  <Box>
                                      <Typography variant='h6' sx={{ color: theme.palette.primary.main }}>Disputed($)</Typography>
                                      <Typography variant='h4'>${new Intl.NumberFormat().format(36456.20)}</Typography>
                                  </Box>
                                  <Box> <WinLineChart/></Box>
                               </Stack>
                          </DashboardCard>
                       </Grid>
                       <Grid item xs={12}>
                            <DashboardCard>
                               <Stack direction='row' spacing={2} alignItems='center'>
                                  <Box>
                                      <Typography variant='h6' sx={{ color: theme.palette.accent.main }}>Recovered($)</Typography>
                                      <Typography variant='h4' sx={{marginTop: '10px'}}>${new Intl.NumberFormat().format(22000.32)}</Typography>
                                  </Box>
                                  <Box> <WinGraphChart/></Box>
                               </Stack>
                          </DashboardCard>
                       </Grid>
                   </Grid>
                </Grid>
              </Grid>
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
                    <AvatarStyled variant='square'><IconSearch /></AvatarStyled>
                    <Box>
                      <Typography variant='h6' sx={{ color: theme.palette.secondary.main }}>Findings ($)</Typography>
                      <Typography variant='h6'>${new Intl.NumberFormat().format(36456.20)}</Typography>
                    </Box>
                 </Stack>
              </Grid>
              <Grid item>
                 <Stack direction='row' spacing={2} mt={2}>
                    <AvatarStyled variant='square'><IconSectionSign /></AvatarStyled>
                    <Box>
                      <Typography variant='h6' sx={{ color: theme.palette.accent.main }}>Outstanding Balance ($)</Typography>
                      <Typography variant='h6'>${new Intl.NumberFormat().format(36456.20)}</Typography>
                    </Box>
                 </Stack>
              </Grid>
              <Grid item>
                 <Stack direction='row' spacing={2} mt={2}>
                    <AvatarStyled variant='square'><IconCheck /></AvatarStyled>
                    <Box>
                      <Typography variant='h6'  sx={{ color: theme.palette.success.main }}>Counteroffer  ($)</Typography>
                      <Typography variant='h6'>${new Intl.NumberFormat().format(36456.20)}</Typography>
                    </Box>
                 </Stack>
              </Grid>
              <Grid item mt={2}>
                  <Stack direction='row' spacing={2}>
                    <AvatarStyled variant='square'><IconExclamationCircle /></AvatarStyled>
                    <Box>
                      <Typography variant='h6'  sx={{ color: theme.palette.success.dark}}>Final Settlement Offer($)</Typography>
                      <Typography variant='h6'>${new Intl.NumberFormat().format(23100.00)}</Typography>
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
                  <Grid item xs={12} lg={5} sx={{
                    display:'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}>
                          <AvatarStyled variant='square'><IconPercentage /></AvatarStyled>
                          <Typography variant='h6' sx={{ color: theme.palette.accent.main,textAlign:'center', marginTop:'15px',marginBottom: '10px' }}>EBITA %</Typography>
                          <Typography variant='h4'>40%</Typography>
                  </Grid>
                    <Divider  orientation="vertical" flexItem />
                  <Grid item xs={12} lg={5}  sx={{
                    display:'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}>
                        <AvatarStyled variant='square'><IconCurrencyDollar /></AvatarStyled>
                        <Typography variant='h6' sx={{ color: theme.palette.secondary.main,textAlign:'center', marginTop:'15px',marginBottom: '10px' }}>EBITA $ </Typography>
                        <Typography variant='h6'>${new Intl.NumberFormat().format(55362.20)}</Typography>
                  </Grid>
                </Grid>
                <Divider />
                <Grid container justifyContent='space-between' alignItems='center' mb={3} mt={3}>
                      <Grid item>
                        <Stack direction='row'  alignItems='center' spacing={1}>
                          <AvatarStyled variant='square'><IconSearch /></AvatarStyled>
                          <Typography variant='h6' sx={{ color: theme.palette.accent.main }}>AMS</Typography>
                        </Stack>
                      </Grid>
                      <Grid item>
                        <Typography variant='h6'>${new Intl.NumberFormat().format(818206.81 )}</Typography>
                      </Grid>
                </Grid>
                <Grid container justifyContent='space-between'  alignItems='center' mb={3}>
                <Grid item>
                  <Stack direction='row'  alignItems='center' spacing={1}>
                    <AvatarStyled variant='square'><IconGridDots /></AvatarStyled>
                    <Typography variant='h6' sx={{ color: theme.palette.secondary.main }}>Coop </Typography>
                  </Stack>
                </Grid>
                <Grid item>
                  <Typography variant='h6'>${new Intl.NumberFormat().format(2363710.60 )}</Typography>
                </Grid>
                </Grid>
                <Grid container justifyContent='space-between'  alignItems='center' mb={3}>
                <Grid item>
                  <Stack direction='row'  alignItems='center' spacing={1}>
                    <AvatarStyled variant='square'><IconOctagon /></AvatarStyled>
                    <Typography variant='h6' sx={{ color: theme.palette.success.main }}>Ops Chargeback </Typography>
                  </Stack>
                    
                </Grid>
                <Grid item>
                  <Typography variant='h6'>${new Intl.NumberFormat().format(818206.81 )}</Typography>
                </Grid>
                </Grid>
                <Divider />
                <Grid container justifyContent='space-between'  alignItems='center' mt={1}>
                  
                  <Grid item xs={12} sx={{
                    display:'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    marginTop:'10px'
                  }}>
                          <AvatarStyled variant='square'><IconTimeDuration5 /></AvatarStyled>
                          <Typography variant='h6' sx={{ color: theme.palette.accent.main,textAlign:'center', marginTop:'15px',marginBottom: '10px' }}>Po Acceptance Ratio</Typography>
                          <Typography variant='h6'>34%</Typography>
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
                 <DonutChart series={priceSeries} />
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
                        <Typography variant='h5' sx={{ color: theme.palette.error.dark }}>Pending</Typography>
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
              <Grid item xs={12}>
                 <Stack direction='row' spacing={2} mb={3}>
                    <AvatarStyled variant='square'><IconCheck /></AvatarStyled>
                    <Box>
                      <Typography variant='h6' sx={{color: theme.palette.secondary.main}}>Approved</Typography>
                      <Typography variant='h6'>${new Intl.NumberFormat().format(125220.40)}</Typography>
                    </Box>
                 </Stack>
              </Grid>
              <Grid item xs={12}>
                  <Stack direction='row' spacing={2}>
                    <AvatarStyled variant='square'><IconExclamationCircle /></AvatarStyled>
                    <Box>
                      <Typography variant='h6'  sx={{color: theme.palette.error.dark}}>Pending</Typography>
                      <Typography variant='h6'>${new Intl.NumberFormat().format(175000.00)}</Typography>
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
                  <Grid item xs={12} lg={5} sx={{
                    display:'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}>
                          <AvatarStyled variant='square'><IconTrendingDown3 /></AvatarStyled>
                          <Typography variant='h5' sx={{ color: theme.palette.accent.main,textAlign:'center', marginTop:'15px',marginBottom: '10px' }}>Disputed</Typography>
                          <Typography variant='h4'>${new Intl.NumberFormat().format(32225.20)}</Typography>
                  </Grid>
                    <Divider  orientation="vertical" flexItem />
                  <Grid item xs={12} lg={5}  sx={{
                    display:'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}>
                        <AvatarStyled variant='square'><IconCurrencyDollar /></AvatarStyled>
                        <Typography variant='h5' sx={{ color: theme.palette.secondary.main,textAlign:'center', marginTop:'15px',marginBottom: '10px' }}>Recovered</Typography>
                        <Typography variant='h4'>${new Intl.NumberFormat().format(55362.20)}</Typography>
                  </Grid>
                </Grid>
               
                <Divider />
                <Grid container justifyContent='space-between' alignItems='center' mb={3} mt={3}>
                      <Grid item>
                        <Stack direction='row'  alignItems='center' spacing={1}>
                          <AvatarStyled variant='square'><IconSearch /></AvatarStyled>
                          <Typography variant='h6' sx={{ color: theme.palette.accent.main }}>Post Audit Deduction</Typography>
                        </Stack>
                      </Grid>
                      <Grid item>
                        <Typography variant='h6'>${new Intl.NumberFormat().format(818206.81 )}</Typography>
                      </Grid>
                </Grid>
                <Grid container justifyContent='space-between'  alignItems='center' mb={3}>
                  <Grid item>
                    <Stack direction='row'  alignItems='center' spacing={1}>
                      <AvatarStyled variant='square'><IconGridDots /></AvatarStyled>
                      <Typography variant='h6' sx={{ color: theme.palette.secondary.main }}>Net Price Claim </Typography>
                    </Stack>
                  </Grid>
                  <Grid item>
                    <Typography variant='h6'>${new Intl.NumberFormat().format(2363710.60 )}</Typography>
                  </Grid>
                </Grid>
                <Grid container justifyContent='space-between' alignItems='center' mb={3}>
                  <Grid item>
                    <Stack direction='row'  alignItems='center' spacing={1}>
                      <AvatarStyled variant='square'><IconOctagon /></AvatarStyled>
                      <Typography variant='h6' sx={{ color: theme.palette.success.main }}>Return Freight Charge </Typography>
                    </Stack>
                      
                  </Grid>
                  <Grid item>
                    <Typography variant='h6'>${new Intl.NumberFormat().format(818206.81 )}</Typography>
                  </Grid>
                </Grid>
               
                <Divider />
                <Grid container justifyContent='space-between'  alignItems='center' mt={1}>
                  
                  <Grid item xs={12} sx={{
                    display:'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    marginTop:'10px'
                  }}>
                          <AvatarStyled variant='square'><IconPercentage /></AvatarStyled>
                          <Typography variant='h6' sx={{ color: theme.palette.accent.main,textAlign:'center', marginTop:'15px',marginBottom: '10px' }}>Win Rate</Typography>
                          <Typography variant='h6'>34%</Typography>
                  </Grid>
                </Grid>
            </DashboardCard>
          </Grid>
        </Grid>
   </PageContainer>
  );
};

export default Dashboard;
