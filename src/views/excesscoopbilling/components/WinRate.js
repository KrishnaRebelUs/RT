import React from 'react';

import { useTheme } from '@mui/material/styles';
import { Box, Typography,Grid,Stack,styled, LinearProgress } from '@mui/material';
import DashboardCard from '../../../components/shared/DashboardCard';
import astraunaut from '../../../assets/images/profile/astronaut.png';
import track from '../../../assets/images/profile/track.jpeg';
import running from '../../../assets/images/profile/running.gif';
import { IconFlag3 } from '@tabler/icons-react';
// import '../../../theme/Track.css';



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

    
    const hasData = 66;
    const CustomProgressBar = styled(Box)(({ theme }) => ({
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
    const items = [
        { name: 'Incorrect Freight', color: theme.palette.success, progress: 66, status: 'data' },
        { name: 'Incorrect Code', color: theme.palette.accent, progress: 57, status: 'noData' },
        { name: 'Incorrect Agreement', color: theme.palette.primary, progress: 87, status: 'approval' },
        { name: 'Duplicate Agreement', color: theme.palette.warning, progress: 60, status: 'noData' }
    ];
    const sortedItems = items.sort((a,b)=>{
      const order ={data:1, approval: 2, noData: 3};
      return order[a.status] - order[b.status];
    })
    return (
        <DashboardCard 
            title={
                <Typography variant='h4' mb={2}>Win Rate</Typography>
            }
        >
              {hasData?(
                <Box>
                    <Grid container style={{borderBottom:'1px solid', borderColor: theme.palette.divider}} pb={0}>
                    {sortedItems.map((item, index) => (
                        <Grid item xs={12} mb={3} key={index}>
                            <Grid container alignItems="center">
                                <Grid item sm={4}>
                                    <Typography variant='h6' sx={{ fontWeight: 400, color: item.color.main }}>{item.name}</Typography>
                                </Grid>
                                <Grid item sm={8} px={1}>
                                    <Box style={{ width: 'calc(100% - 45px)' }} mx={'auto'}>
                                        <CustomProgressBar width={`${item.progress}%`}>
                                            <ProgressLight style={{ backgroundColor: item.color.light }}></ProgressLight>
                                            <ProgressDark style={{ backgroundColor: item.color.main }}></ProgressDark>
                                            <ProgressLabel style={{ backgroundColor: item.color.main }}>
                                                {item.progress}% <Box component="span" style={{ borderColor: item.color.main }}></Box>
                                            </ProgressLabel>
                                        </CustomProgressBar>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    ))}
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
              ):(
                <Box mt={5}>
                    <Box mb={2} style={{position:'relative'}}>
                        <img src={astraunaut} alt='' style={{position:'absolute', bottom:'8px', left:'0'}}/>
                        <Grid container alignItems='center' justifyContent='space-between'>
                            <Grid item>
                                <IconFlag3 />
                            </Grid>
                            <Grid item>
                            <IconFlag3 />
                            </Grid>
                        </Grid>
                        <img src={track} alt=''width={500}/>
                    </Box>
                    <Box width={500} style={{margin:'auto',textAlign:'center'}} >
                        <Typography variant='h3'style={{color:theme.palette.error.main, marginBottom:'10px'}}>No Data</Typography>
                    </Box>
                </Box>
              )}
              {false?(
                <Box mt={5}>
                    <Box mb={2} style={{position:'relative'}}>
                        <img src={running} alt='' style={{left:'35%',position:'absolute', bottom:'8px', height:'100px'}}/>
                        <Grid container alignItems='center' justifyContent='space-between'>
                            <Grid item>
                                <IconFlag3 />
                            </Grid>
                            <Grid item>
                            <IconFlag3 />
                            </Grid>
                        </Grid>
                        <img src={track} alt=''width={500}/>
                    </Box>
                    <Box style={{margin:'auto',textAlign:'center'}} >
                        <Typography variant='h3'style={{color:theme.palette.success.main, marginBottom:'10px'}}>Approval Pending</Typography>
                    </Box>
                </Box>
              ):null}
        </DashboardCard>
    );
};

export default WinRate;
