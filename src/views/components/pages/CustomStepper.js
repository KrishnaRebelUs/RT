import React from 'react';
import { Grid, Button, styled, Divider, Typography, Tooltip  } from '@mui/material';
import { Box, positions } from '@mui/system';
import { useTheme } from '@emotion/react';
import SettledImg from "../../../assets/images/Settled.gif";
import BarChart from './Barchart';

export default function CustomStepper() {
    const theme = useTheme();
    const StepsWrap = styled(Box)(({ theme }) => ({
        position: 'relative',
        width: '100%',
        height: '350px',
        display: 'flex'
    }));
    const Steps = styled(Button)(({ theme }) => ({
        position: 'absolute',
        '&.active': {
			'.circle': {
                backgroundColor: theme.palette.primary.main,
                color: 'white'
            },
            '.stepText': {
                backgroundColor: theme.palette.primary.extraLight,
                color: theme.palette.primary.main
            }
		}
    }));
    const Circle = styled(Box)(({ theme }) => ({
        width: '50px',
        height: '50px',
        display: 'block',
        backgroundColor: theme.palette.primary.extraLight,
        borderColor: theme.palette.primary.light,
        color: theme.palette.primary.main,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '500',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        zIndex: '99',
        position: 'relative'
    }));
    const Text = styled(Typography)(({ theme }) => ({
        color: theme.palette.primary.main,
        backgroundColor: 'white',
        border: '1px solid',
        borderColor: theme.palette.primary.main,
        fontSize: '11px',
        lineHeight: '100%',
        fontWeight: '600',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        position: 'relative',
        zIndex: 99,
        borderRadius: '30px',
        marginTop: '-1px',
        padding: '2px'
    }));
    const LineWrapper = styled(Box)(({ theme }) => ({    
        width: '40%',    
        position: 'absolute'
    }));
    const Line = styled(Divider)(({ theme }) => ({
        width: '100%',
        borderColor: theme.palette.primary.extraLight,
        borderWidth: '2px'
    }));
    return (
        <Box>
            <Grid container spacing={3} mb={3}>
                <Grid item mr={'auto'}>
                    <Grid container spacing={2} alignItems="flex-end">
                        <Grid item style={{ transform: "translateY(5px)" }}><Typography variant="BigTitle" sx={{ color: theme.palette.success.dark }}>04</Typography></Grid>
                        <Grid item><Typography variant="h5">Stage</Typography></Grid>    
                    </Grid>
                </Grid>
                <Grid item>
                    <Box style={{ marginTop: '-70px', marginBottom: '-30px', marginRight: '-25px' }} ><BarChart color={theme.palette.success.main} percentage={30} chartWidth="170" chartHeight="170" chartLableFonrSize="16px"  /></Box>
                </Grid>
            </Grid>
            <StepsWrap mt={4}>
                <Tooltip title={'Hello Bro 1'}>
                    <Steps className="active">
                        <Box>
                            <Circle className="circle">1</Circle>
                            <Text className="stepText">Step</Text>
                        </Box>
                    </Steps>
                </Tooltip>
                <Tooltip title={'Hello Bro 2'}>
                    <Steps style={{ left: '0', right: '0', margin: 'auto' }}>
                        <Box>
                            <Circle>2</Circle>
                            <Text>Step</Text>
                        </Box>
                    </Steps>
                </Tooltip>
                <Tooltip title={'Hello Bro 3'}>
                    <Steps style={{ right: '0' }}>
                        <Box>
                            <Circle>3</Circle>
                            <Text>Step</Text>
                        </Box>
                    </Steps>
                </Tooltip>
                <Tooltip title={'Hello Bro 4'}>
                    <Steps style={{ right: '0', top: '40%' }}>
                        <Box>
                            <Circle>4</Circle>
                            <Text>Step</Text>
                        </Box>
                    </Steps>
                </Tooltip>
                <Tooltip title={'Hello Bro 5'}>
                    <Steps style={{ left: '0', right: '0', top: '40%', margin: 'auto' }}>
                        <Box>
                            <Circle>5</Circle>
                            <Text>Step</Text>
                        </Box>
                    </Steps>
                </Tooltip>
                <Tooltip title={'Hello Bro 6'}>
                    <Steps style={{ left: '0', top: '40%' }}>
                        <Box>
                            <Circle>6</Circle>
                            <Text>Step</Text>
                        </Box>
                    </Steps>
                </Tooltip>
                <Tooltip title={'Hello Bro 7'}>
                    <Steps style={{ bottom: '0' }}>
                        <Box>
                            <Circle>7</Circle>
                            <Text>Step</Text>
                        </Box>
                    </Steps>
                </Tooltip>
                <Tooltip title={'Hello Bro 8'}>
                    <Steps style={{ left: '0', right: '0', bottom: '0', margin: 'auto' }}>
                        <Box>
                            <Circle>8</Circle>
                            <Text>Step</Text>
                        </Box>
                    </Steps>
                </Tooltip>
                <Tooltip title={'Hello Bro 9'}>
                    <Steps style={{ right: '0', bottom: '0' }}>
                        <Box>
                            <Circle style={{ width: '70px', height: '70px', backgroundColor: 'white', borderRadisu: '0' }}><img width="100" src={SettledImg} alt='Settled' /></Circle>
                            <Text>Settled</Text>
                        </Box>
                    </Steps>
                </Tooltip>
                <Box>
                    <LineWrapper className="active" style={{ left: '0', top: '30px', transform: 'translateX(45px)'}}><Line></Line></LineWrapper>
                    <LineWrapper style={{ right: '0', top: '30px',  transform: 'translateX(-45px)'}}><Line></Line></LineWrapper>
                    <LineWrapper style={{ right: '0', top: '27%', transform: 'translate(40px) rotate(90deg)'}}><Line></Line></LineWrapper>
                    <LineWrapper style={{ left: '0', top: '48%', transform: 'translateX(45px)'}}><Line></Line></LineWrapper>
                    <LineWrapper style={{ right: '0', top: '48%', transform: 'translateX(-45px)'}}><Line></Line></LineWrapper>
                    <LineWrapper style={{ left: '0', top: '67%', transform: 'translate(-43px) rotate(90deg)'}}><Line></Line></LineWrapper>
                    <LineWrapper style={{ left: '0', bottom: '45px', transform: 'translateX(45px)'}}><Line></Line></LineWrapper>
                    <LineWrapper style={{ right: '0', bottom: '45px', transform: 'translateX(-45px)'}}><Line></Line></LineWrapper>
                </Box>
            </StepsWrap>
        </Box>
    )
}
