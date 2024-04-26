import React from 'react';
import { Grid, Button, styled, Divider, Typography, Tooltip  } from '@mui/material';
import { Box, positions } from '@mui/system';
import Swal from "sweetalert2";
import { useTheme } from '@emotion/react';
import SettledImg from "../../../assets/images/Settled.gif";
import BarChart from './Barchart';

export default function CustomStepper() {
    const theme = useTheme();
    const StepMain = styled(Box)(({ theme }) => ({
        position: 'relative',
        width: '100%',
        height: '350px',
        display: 'flex'
    }));
    const StepsWrap = styled(Box)(({ theme }) => ({
        position: 'relative',
        width: 'calc(100% - 50px)',
        height: '350px',
        margin: 'auto'
    }));
    const Steps = styled(Button)(({ theme }) => ({
        position: 'absolute',
        minWidth: 'inherit',
        width: '35px',
        height: '35px',
        borderRadius: '50%',
        padding: 0,
        '&:hover': {
            '.tooltipStep' : {
                opacity: '1',
                visibility: 'visible',
                transform: 'translate(3px, 0)'
            }
        },
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
        backgroundColor: theme.palette.primary.extraLight,
        borderColor: theme.palette.primary.light,
        color: theme.palette.primary.main,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '500',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        borderRadius: '50%',
        zIndex: '99',
        position: 'relative'
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
    const TooltipStep = styled(Box)(({ theme }) => ({
        width: '150px',
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        padding: '20px',
        borderRadius: '7px',
        textAlign: 'center',
        position: 'absolute',
        transform: 'translate(3px, 10px)',
        transition: 'all 0.4s ease',
        opacity: '0',
        visibility: 'hidden'
    }));
    const Tooltipline = styled(Box)(({ theme }) => ({
        position: 'relative',
        display: 'flex',
        width: '35px',
        height: '4px',
        transform: 'rotate(90deg)',
        backgroundColor: theme.palette.primary.main
    }));
    const handleStepClick = (stepNumber) => {
        if (stepNumber === 9) {
            Swal.fire({
                title: "Congratulations!",
                text: "You have reached the final step!",
                icon: "success",
                confirmButtonText: "OK",
            });
        } else {

        }
        
    }
    return (
        <Box>
            <Grid container spacing={3} mb={3}>
                <Grid item mr={'auto'}>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item style={{ transform: "translateY(5px)" }}><Typography variant="h2" sx={{ color: theme.palette.success.dark }}>04</Typography></Grid>
                        <Grid item><Typography variant="h5">Stage</Typography></Grid>    
                    </Grid>
                </Grid>
                <Grid item>
                    <Box style={{ marginTop: '-70px', marginBottom: '-30px', marginRight: '-25px' }} ><BarChart color={theme.palette.success.main} percentage={30} chartWidth="170" chartHeight="170" chartLableFonrSize="16px"  /></Box>
                </Grid>
            </Grid>
            <StepMain mt={4}>
                <StepsWrap>
                    <Steps className="active">
                        <Circle className="circle">1</Circle>
                        <TooltipStep className="tooltipStep" style={{ top: '-85px' }}>
                            <Typography variant="body2">Findings Shared – Awaiting Contract</Typography>
                            <Tooltipline style={{ top: '35px', left: '34px' }}></Tooltipline>
                        </TooltipStep>
                    </Steps>
                    <Steps style={{ left: '0', right: '0', margin: 'auto' }}>
                        <Circle>2</Circle>
                        <TooltipStep className="tooltipStep" style={{ top: '-85px' }}>
                            <Typography variant="body2">Disputes Raised – Submitted</Typography>
                            <Tooltipline style={{ top: '35px', left: '34px' }}></Tooltipline>
                        </TooltipStep>    
                    </Steps>
                    <Steps style={{ right: '0' }}>
                        <Circle>3</Circle>
                        <TooltipStep className="tooltipStep" style={{ top: '-85px' }}>
                            <Typography variant="body2">Disputes Raised – Submitted</Typography>
                            <Tooltipline style={{ top: '35px', left: '34px' }}></Tooltipline>
                        </TooltipStep>
                    </Steps>
                    <Steps style={{ right: '0', top: '40%' }}>
                        <Circle>4</Circle>
                        <TooltipStep className="tooltipStep" style={{ top: '-85px' }}>
                            <Typography variant="body2">Disputes Raised – Submitted</Typography>
                            <Tooltipline style={{ top: '35px', left: '34px' }}></Tooltipline>
                        </TooltipStep>    
                    </Steps>
                    <Steps style={{ left: '0', right: '0', top: '40%', margin: 'auto' }}>
                        <Circle>5</Circle>
                        <TooltipStep className="tooltipStep" style={{ top: '-85px' }}>
                            <Typography variant="body2">Disputes Raised – Submitted</Typography>
                            <Tooltipline style={{ top: '35px', left: '34px' }}></Tooltipline>
                        </TooltipStep>    
                    </Steps>
                    <Steps style={{ left: '0', top: '40%' }}>
                        <Circle>6</Circle>
                        <TooltipStep className="tooltipStep" style={{ top: '-85px' }}>
                            <Typography variant="body2">Disputes Raised – Submitted</Typography>
                            <Tooltipline style={{ top: '35px', left: '34px' }}></Tooltipline>
                        </TooltipStep>    
                    </Steps>
                    <Steps style={{ bottom: '0' }}>
                        <Circle>7</Circle>
                        <TooltipStep className="tooltipStep" style={{ top: '-85px' }}>
                            <Typography variant="body2">Disputes Raised – Submitted</Typography>
                            <Tooltipline style={{ top: '35px', left: '34px' }}></Tooltipline>
                        </TooltipStep>    
                    </Steps>
                    <Steps style={{ left: '0', right: '0', bottom: '0', margin: 'auto' }}>
                        <Circle>8</Circle>
                        <TooltipStep className="tooltipStep" style={{ top: '-85px' }}>
                            <Typography variant="body2">Disputes Raised – Submitted</Typography>
                            <Tooltipline style={{ top: '35px', left: '34px' }}></Tooltipline>
                        </TooltipStep>
                    </Steps>
                    <Steps style={{ right: '0', bottom: '0' }}>
                        <Circle style={{ width: '70px', height: '70px', backgroundColor: 'white', borderRadisu: '0' }}><img width="100" src={SettledImg} alt='Settled' onClick={() => handleStepClick(9)}/></Circle>
                        <TooltipStep className="tooltipStep" style={{ top: '-85px' }}>
                            <Typography variant="body2">Disputes Raised – Submitted</Typography>
                            <Tooltipline style={{ top: '35px', left: '34px' }}></Tooltipline>
                        </TooltipStep>
                    </Steps>
                    <Box>
                        <LineWrapper className="active" style={{ left: '0', top: '15px', transform: 'translateX(20px)'}}><Line></Line></LineWrapper>
                        <LineWrapper style={{ right: '0', top: '15px',  transform: 'translateX(-20px)'}}><Line></Line></LineWrapper>
                        <LineWrapper style={{ right: '0', top: '25%', transform: 'translate(22px) rotate(90deg)'}}><Line></Line></LineWrapper>
                        <LineWrapper style={{ left: '0', top: '48%', transform: 'translateX(45px)'}}><Line></Line></LineWrapper>
                        <LineWrapper style={{ right: '0', top: '48%', transform: 'translateX(-45px)'}}><Line></Line></LineWrapper>
                        <LineWrapper style={{ left: '13px', top: '67%', transform: 'translate(-43px) rotate(90deg)'}}><Line></Line></LineWrapper>
                        <LineWrapper style={{ left: '0', bottom: '30px', transform: 'translateX(45px)'}}><Line></Line></LineWrapper>
                        <LineWrapper style={{ right: '0', bottom: '30px', transform: 'translateX(-45px)'}}><Line></Line></LineWrapper>
                    </Box>
                </StepsWrap>
            </StepMain>
        </Box>
    )
}
