import React from 'react';

import { useTheme } from '@mui/material/styles';
import { Box, Typography,Grid,Stack,styled } from '@mui/material';
import DashboardCard from '../../../components/shared/DashboardCard';
import { height } from '@mui/system';


const WinRate = () => {
    const theme = useTheme();
   
    const BoxStyled = styled(Box)(({ theme }) => ({
        backgroundColor: '#C9F0DA',
        width: '103px',
        height:'4px',
        borderRadius:'4px'

    }));
    const BoxActionStyled = styled(Box)(({ theme }) => ({
        backgroundColor: '#FFE2CB',
        width: '65px',
        height:'4px',
        borderRadius:'4px'

    }));
    const BoxSecondaryStyled = styled(Box)(({ theme }) => ({
        backgroundColor: '#DAE8FF',
        width: '170px',
        height:'4px',
        borderRadius:'4px'

    }));
    const BoxWarningStyled = styled(Box)(({ theme }) => ({
        backgroundColor: '#FFEECC',
        width: '85px',
        height:'4px',
        borderRadius:'4px'

    }));
    const BoxGrenStyled = styled(Box)(({ theme }) => ({
        backgroundColor: theme.palette.success.extraDark,
        width: '90px',
        height:'4px',
        borderRadius:'4px'

    }));
    const BoxActionDarkStyled = styled(Box)(({ theme }) => ({
        backgroundColor: theme.palette.accent.main,
        width: '90px',
        height:'4px',
        borderRadius:'4px'

    }));
    const BoxSecondaryDarkStyled = styled(Box)(({ theme }) => ({
        backgroundColor: theme.palette.secondary.main,
        width: '90px',
        height:'4px',
        borderRadius:'4px'

    }));
    const BoxWarningDarkStyled = styled(Box)(({ theme }) => ({
        backgroundColor: theme.palette.warning.main,
        width: '90px',
        height:'4px',
        borderRadius:'4px'

    }));
    const BoxButtonStyled = styled(Box)(({ theme }) => ({
        height:'30px',
        width:'50px',
        lineHeight:'30px', 
        textAlign:'center', 
        borderRadius:'7px', 
        position:'absolute',
        right:'120px',
        top: '-30px',
        backgroundColor:theme.palette.success.main, 
        color:theme.palette.primary.contrastText,
        '&:after':{
            content:'""',
            position:'absolute',
            bottom:'-3px',
            height:'10px',
            width:'10px',
            transform:'rotate(45deg)',
            borderTop:'1px solid',
            borderBottom:'1px solid ', 
            borderColor:theme.palette.success.main,
            right:'40%',
            backgroundColor:theme.palette.success.main,
        }

    }));
    const BoxButtonActionStyled = styled(Box)(({ theme }) => ({
        height:'30px',
        width:'50px',
        lineHeight:'30px', 
        textAlign:'center', 
        borderRadius:'7px', 
        position:'absolute',
        right:'160px',
        top: '-30px',
        backgroundColor:theme.palette.accent.main, 
        color:theme.palette.primary.contrastText,
        '&:after':{
            content:'""',
            position:'absolute',
            bottom:'-3px',
            height:'10px',
            width:'10px',
            transform:'rotate(45deg)',
            borderTop:'1px solid',
            borderBottom:'1px solid ', 
            borderColor:theme.palette.accent.main,
            right:'40%',
            backgroundColor:theme.palette.accent.main,
        }

    }));
    const BoxButtonSecondaryStyled = styled(Box)(({ theme }) => ({
        height:'30px',
        width:'50px',
        lineHeight:'30px', 
        textAlign:'center', 
        borderRadius:'7px', 
        position:'absolute',
        right:'55px',
        top: '-30px',
        backgroundColor:theme.palette.secondary.main, 
        color:theme.palette.primary.contrastText,
        '&:after':{
            content:'""',
            position:'absolute',
            bottom:'-3px',
            height:'10px',
            width:'10px',
            transform:'rotate(45deg)',
            borderTop:'1px solid',
            borderBottom:'1px solid ', 
            borderColor:theme.palette.secondary.main,
            right:'40%',
            backgroundColor:theme.palette.secondary.main,
        }

    }));
    const BoxButtonWarningStyled = styled(Box)(({ theme }) => ({
        height:'30px',
        width:'50px',
        lineHeight:'30px', 
        textAlign:'center', 
        borderRadius:'7px', 
        position:'absolute',
        right:'140px',
        top: '-33px',
        backgroundColor:theme.palette.warning.main, 
        color:theme.palette.primary.contrastText,
        boxShadow:'0px 0px 15px 0px rgba(0, 0, 0, 0.07)',
        '&:after':{
            content:'""',
            position:'absolute',
            bottom:'-3px',
            height:'10px',
            width:'10px',
            transform:'rotate(45deg)',
            borderTop:'1px solid',
            borderBottom:'1px solid ', 
            borderColor:theme.palette.warning.main,
            right:'40%',
            backgroundColor:theme.palette.warning.main,
          
        }

    }));
    
    return (
        <DashboardCard title={
            <Typography variant='h4' sx={{ color: theme.palette.text.dark }}>Win Rate</Typography>}>
                <Grid container style={{borderBottom:'1px solid #eee'}}>
                   <Grid xs={12} style={{position:'relative'}} marginBottom={4}>
                    <Stack direction='row' spacing={1} alignItems='center'>
                        <Typography variant='h6' sx={{color: theme.palette.success.extraDark,width:'163px'}}>Incorrect Freight</Typography>
                        <BoxStyled></BoxStyled>
                        <Box>
                            <BoxButtonStyled>66%</BoxButtonStyled>
                           <BoxGrenStyled></BoxGrenStyled>
                        </Box>
                    </Stack>

                   </Grid>
                   <Grid xs={12} style={{position:'relative'}} marginBottom={4}>
                    <Stack direction='row' spacing={1} alignItems='center'>
                        <Typography variant='h6' sx={{color: theme.palette.accent.main,width:'163px'}}>Incorrect Code</Typography>
                        <BoxActionStyled></BoxActionStyled>
                        <Box>
                            <BoxButtonActionStyled>57%</BoxButtonActionStyled>
                            <BoxActionDarkStyled></BoxActionDarkStyled>
                        </Box>
                    </Stack>

                   </Grid>
                   <Grid xs={12} style={{position:'relative'}} marginBottom={4}>
                    <Stack direction='row' spacing={1} alignItems='center'>
                        <Typography variant='h6' sx={{color: theme.palette.secondary.main, width:'163px'}}>Incorrect Agreement</Typography>
                        <BoxSecondaryStyled></BoxSecondaryStyled>
                        <Box>
                            <BoxButtonSecondaryStyled>87%</BoxButtonSecondaryStyled>
                           <BoxSecondaryDarkStyled></BoxSecondaryDarkStyled>
                        </Box>
                    </Stack>

                   </Grid>
                   <Grid xs={12} style={{position:'relative'}} marginBottom={3}>
                    <Stack direction='row' spacing={1} alignItems='center'>
                        <Typography variant='h6' sx={{color: theme.palette.warning.main}}>Duplicate Agreement</Typography>
                        <BoxWarningStyled></BoxWarningStyled>
                        <Box>
                            <BoxButtonWarningStyled>60%</BoxButtonWarningStyled>
                           <BoxWarningDarkStyled></BoxWarningDarkStyled>
                        </Box>
                    </Stack>

                   </Grid>
                </Grid>
                <Grid container >
                   <Grid xs={4}></Grid> 
                   <Grid xs={8}>
                      <Stack direction='row' spacing={3} marginTop={2}>
                        <Typography variant='h6'>0%</Typography>
                        <Typography variant='h6'>20%</Typography>
                        <Typography variant='h6'>40%</Typography>
                        <Typography variant='h6'>60%</Typography>
                        <Typography variant='h6'>80%</Typography>
                        <Typography variant='h6'>100%</Typography>
                      </Stack>
                   </Grid>
                </Grid>
        </DashboardCard>
    );
};

export default WinRate;
