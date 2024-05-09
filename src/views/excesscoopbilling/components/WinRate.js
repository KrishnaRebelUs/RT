import React from 'react';

import { useTheme } from '@mui/material/styles';
import { Box, Typography,Grid,Stack,styled, LinearProgress } from '@mui/material';
import DashboardCard from '../../../components/shared/DashboardCard';
import astraunaut from '../../../assets/images/profile/astronaut.png';
import running from '../../../assets/images/profile/running.gif';


const WinRate = () => {
    const theme = useTheme();
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
      const timer = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress === 100) {
            return 0;
          }
          const diff = Math.random() * 10;
          return Math.min(oldProgress + diff, 100);
        });
      }, 500);
  
      return () => {
        clearInterval(timer);
      };
    }, []);

    const CustomProgressBar = styled(Box)(({ theme }) => ({
        height: '5px',
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
        position: 'relative'

    }));
    const linearProgressBar = styled(LinearProgress)(({ theme }) => ({
        height: '5px',
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
        position: 'relative'

    }));
    const ProgressLight = styled(Box)(({ theme }) => ({
        width: '65%',
        height: '100%',
        borderRadius: '7px'
    }));
    const ProgressDark = styled(Box)(({ theme }) => ({
        width: '35%',
        height: '100%',
        borderRadius: '7px'
    }));
    const ProgressLabel = styled(Box)(({ theme }) => ({
        width: '42px',
        height: '22px', 
        textAlign: 'center', 
        borderRadius: '7px', 
        position: 'absolute',
        right: '-20px',
        bottom: '15px', 
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '12px',
        'span': {
            content:'""',
            position:'absolute',
            bottom:'-3px',
            border: '3px solid',
            transform:'rotate(45deg)',
            right:'calc(50% - 3px)'
        }
    }));
    
    return (
        <DashboardCard 
            title={
                <Typography variant='h4' mb={2}>Win Rate</Typography>
            }
        >
            <Box>
                <Grid container style={{borderBottom:'1px solid', borderColor: theme.palette.divider}} pb={3}>
                    <Grid item xs={12} mb={3}>
                        <Grid container alignItems="center">
                            <Grid item sm={4}>
                                <Typography variant='h6' sx={{fontWeight: 400, color: theme.palette.success.extraDark}}>Incorrect Freight</Typography>
                            </Grid>
                            <Grid item sm={8} px={1}>
                                <Box style={{ width: 'calc(100% - 45px)' }} mx={'auto'}>
                                    <CustomProgressBar width="66%">
                                        <ProgressLight style={{ backgroundColor: theme.palette.success.light }}></ProgressLight>
                                        <ProgressDark style={{ backgroundColor: theme.palette.success.main }}></ProgressDark>
                                        <ProgressLabel style={{ backgroundColor: theme.palette.success.main }}>66% <Box component="span" style={{ borderColor: theme.palette.success.main }}></Box></ProgressLabel>
                                    </CustomProgressBar>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} mb={3}>
                        <Grid container alignItems="center">
                            <Grid item sm={4}>
                                <Typography variant='h6' sx={{fontWeight: 400, color: theme.palette.accent.main}}>Incorrect Code</Typography>
                            </Grid>
                            <Grid item sm={8}>
                                <Box style={{ width: 'calc(100% - 45px)' }} mx={'auto'}>
                                    <CustomProgressBar width="57%">
                                        <ProgressLight style={{ backgroundColor: theme.palette.accent.light }}></ProgressLight>
                                        <ProgressDark style={{ backgroundColor: theme.palette.accent.main }}></ProgressDark>
                                        <ProgressLabel style={{ backgroundColor: theme.palette.accent.main }}>57% <Box component="span" style={{ borderColor: theme.palette.accent.main }}></Box></ProgressLabel>
                                    </CustomProgressBar>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} mb={3}>
                        <Grid container alignItems="center">
                            <Grid item sm={4}>
                                <Typography variant='h6' sx={{fontWeight: 400, color: theme.palette.primary.main}}>Incorrect Agreement</Typography>
                            </Grid>
                            <Grid item sm={8}>
                                <Box style={{ width: 'calc(100% - 45px)' }} mx={'auto'}>
                                    <CustomProgressBar width="87%">
                                        <ProgressLight style={{ backgroundColor: theme.palette.primary.extraLight }}></ProgressLight>
                                        <ProgressDark style={{ backgroundColor: theme.palette.primary.main }}></ProgressDark>
                                        <ProgressLabel style={{ backgroundColor: theme.palette.primary.main }}>87% <Box component="span" style={{ borderColor: theme.palette.primary.main }}></Box></ProgressLabel>
                                    </CustomProgressBar>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container alignItems="center">
                            <Grid item sm={4}>
                                <Typography variant='h6' sx={{fontWeight: 400, color: theme.palette.warning.main}}>Duplicate Agreement</Typography>
                            </Grid>
                            <Grid item sm={8}>
                                <Box style={{ width: 'calc(100% - 45px)' }} mx={'auto'}>
                                    <CustomProgressBar width="60%">
                                        <ProgressLight style={{ backgroundColor: theme.palette.warning.light }}></ProgressLight>
                                        <ProgressDark style={{ backgroundColor: theme.palette.warning.main }}></ProgressDark>
                                        <ProgressLabel style={{ backgroundColor: theme.palette.warning.main }}>60% <Box component="span" style={{ borderColor: theme.palette.warning.main }}></Box></ProgressLabel>
                                    </CustomProgressBar>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container pt={2}>
                    <Grid item xs={4}></Grid> 
                    <Grid item xs={8}>
                        <Grid container textAlign="center">
                            <Grid item xs={2}><Typography variant='body2' style={{ fontWeight: 600 }} >0%</Typography></Grid>
                            <Grid item xs={2}><Typography variant='body2' style={{ fontWeight: 600 }}>20%</Typography></Grid>
                            <Grid item xs={2}><Typography variant='body2' style={{ fontWeight: 600 }}>40%</Typography></Grid>
                            <Grid item xs={2}><Typography variant='body2' style={{ fontWeight: 600 }}>60%</Typography></Grid>
                            <Grid item xs={2}><Typography variant='body2' style={{ fontWeight: 600 }}>80%</Typography></Grid>
                            <Grid item xs={2}><Typography variant='body2' style={{ fontWeight: 600 }}>100%</Typography></Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            {/* {No Data} */}
            {/* <Box>
                <Box style={{textAlign:'center'}} mb={2}>
                    <img src={astraunaut} alt=''/>
                    <Typography variant='h3'style={{color:theme.palette.error.main}}>No Data</Typography>
                </Box>
                <Box sx={{ width: '60%' }} style={{margin:'auto'}} >
                    <LinearProgress variant="determinate" value={5} />
                </Box>
            </Box> */}
                 {/* {Approval Pending} */}
            {/* <Box>
                <Box style={{textAlign:'center'}} mb={2}>
                    <img src={running} alt=''/>
                    <Typography variant='h3'style={{color:theme.palette.success.main}}>Approval Pending</Typography>
                </Box>
                <Box sx={{ width: '60%' }} style={{margin:'auto'}} >
                    <LinearProgress variant="determinate" value={50} height='5px' />
                </Box>
             
            </Box> */}
        </DashboardCard>
    );
};

export default WinRate;
