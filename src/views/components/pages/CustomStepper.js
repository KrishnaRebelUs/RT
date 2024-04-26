import React from 'react';
import { Grid, Button, styled, Divider, Typography, Tooltip  } from '@mui/material';
import { Box, positions } from '@mui/system';
import Swal from "sweetalert2";
import { useTheme } from '@emotion/react';
import SettledImg from "../../../assets/images/settled.jpg";
import BarChart from './Barchart';

export default function CustomStepper() {
    const theme = useTheme();
    const StepMain = styled(Box)(({ theme }) => ({
        position: 'relative',
        width: '100%'
    }));
    const StepsWrap = styled(Box)(({ theme }) => ({
        position: 'relative',
        width: '245px',
        height: '350px',
        margin: 'auto'
    }));
    const Steps = styled(Button)(({ theme }) => ({
        position: 'absolute',
        minWidth: 'inherit',
        width: '40px',
        height: '40px',
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
            },
            '.tooltipStep': {
                backgroundColor: theme.palette.primary.main,
                color: 'white'
            },
            '.tooltipLine': {
                backgroundColor: theme.palette.primary.main
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
        width: '55%',    
        position: 'absolute'
    }));
    const Line = styled(Divider)(({ theme }) => ({
        width: '100%',
        borderColor: theme.palette.primary.extraLight,
        borderWidth: '2px',
        '&.active': {
            borderColor: theme.palette.primary.main
        }
    }));
    const TooltipStep = styled(Box)(({ theme }) => ({
        width: '150px',
        backgroundColor: theme.palette.primary.extraLight,
        color: theme.palette.text.main,
        padding: '10px',
        borderRadius: '7px',
        textAlign: 'center',
        position: 'absolute',
        transform: 'translate(3px, 10px)',
        transition: 'all 0.4s ease',
        opacity: '0',
        visibility: 'hidden',
        zIndex: 99
    }));
    const Tooltipline = styled(Box)(({ theme }) => ({
        position: 'absolute',
        display: 'flex',
        width: '15px',
        height: '4px',
        transform: 'rotate(90deg)',
        left: 'calc(50% - 10px)',
        bottom: '-8px',
        backgroundColor: theme.palette.primary.extraLight
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
            <Box my={4}><Divider /></Box>
            <StepMain>
                <StepsWrap>
                    <Steps className="active">
                        <Circle className="circle">1</Circle>
                        <TooltipStep className="tooltipStep" style={{ bottom: '48px' }}>
                            <Typography variant="body2">Findings Shared – Awaiting Contract</Typography>
                            <Tooltipline className="tooltipLine"></Tooltipline>
                        </TooltipStep>
                    </Steps>
                    <Steps className="active" style={{ left: '0', right: '0', margin: 'auto' }}>
                        <Circle className="circle">2</Circle>
                        <TooltipStep className="tooltipStep" style={{ bottom: '48px' }}>
                            <Typography variant="body2">Disputes Raised – Submitted</Typography>
                            <Tooltipline className="tooltipLine"></Tooltipline>
                        </TooltipStep>    
                    </Steps>
                    <Steps className="active" style={{ right: '0' }}>
                        <Circle className="circle">3</Circle>
                        <TooltipStep className="tooltipStep" style={{ bottom: '48px' }}>
                            <Typography variant="body2">Outstanding Balance Shared by Amazon – Open Bal. Confirmed</Typography>
                            <Tooltipline className="tooltipLine"></Tooltipline>
                        </TooltipStep>
                    </Steps>
                    <Steps className="active" style={{ right: '0', top: 'calc(50% - 20px)' }}>
                        <Circle className="circle">4</Circle>
                        <TooltipStep className="tooltipStep" style={{ bottom: '48px' }}>
                            <Typography variant="body2">Offer Received – File not received</Typography>
                            <Tooltipline className="tooltipLine"></Tooltipline>
                        </TooltipStep>    
                    </Steps>
                    <Steps style={{ left: '0', right: '0', top: 'calc(50% - 20px)', margin: 'auto' }}>
                        <Circle className="circle">5</Circle>
                        <TooltipStep className="tooltipStep" style={{ bottom: '48px' }}>
                            <Typography variant="body2">Settlement Offer Received from Amazon – Offer Shared with Customer</Typography>
                            <Tooltipline className="tooltipLine"></Tooltipline>
                        </TooltipStep>    
                    </Steps>
                    <Steps style={{ left: '0', top: 'calc(50% - 20px)' }}>
                        <Circle className="circle">6</Circle>
                        <TooltipStep className="tooltipStep" style={{ bottom: '48px' }}>
                            <Typography variant="body2">Counteroffer Presented to Amazon – Counteroffer Submitted</Typography>
                            <Tooltipline className="tooltipLine"></Tooltipline>
                        </TooltipStep>    
                    </Steps>
                    <Steps style={{ bottom: '0' }}>
                        <Circle className="circle">7</Circle>
                        <TooltipStep className="tooltipStep" style={{ bottom: '48px' }}>
                            <Typography variant="body2">Revised Settlement Offer from Amazon – Revised Offer Shared with Customer</Typography>
                            <Tooltipline className="tooltipLine"></Tooltipline>
                        </TooltipStep>    
                    </Steps>
                    <Steps style={{ left: '0', right: '0', bottom: '0', margin: 'auto' }}>
                        <Circle className="circle">8</Circle>
                        <TooltipStep className="tooltipStep" style={{ bottom: '48px' }}>
                            <Typography variant="body2">Final Settlement Accepted – Settlement Accepted</Typography>
                            <Tooltipline className="tooltipLine"></Tooltipline>
                        </TooltipStep>
                    </Steps>
                    <Steps style={{ right: '0', bottom: '0' }}>
                        <Circle style={{ zIndex: '999' }}><img width="50" src={SettledImg} alt='Settled' onClick={() => handleStepClick(9)}/></Circle>
                        <TooltipStep className="tooltipStep" style={{ bottom: '48px' }}>
                            <Typography variant="body2">Amount credited to VC account – WINNNNNN</Typography>
                            <Tooltipline className="tooltipLine"></Tooltipline>
                        </TooltipStep>
                    </Steps>
                    <Box>
                        <LineWrapper style={{ left: '0', top: '20px'}}><Line className="active"></Line></LineWrapper>
                        <LineWrapper style={{ right: '0', top: '20px'}}><Line className="active"></Line></LineWrapper>
                        <LineWrapper style={{ right: '0', top: '27%', transform: 'translate(48px) rotate(90deg)'}}><Line className="active"></Line></LineWrapper>
                        <LineWrapper style={{ left: '0', top: 'calc(50% - 2px)'}}><Line></Line></LineWrapper>
                        <LineWrapper style={{ right: '0', top: 'calc(50% - 2px)'}}><Line></Line></LineWrapper>
                        <LineWrapper style={{ left: '13px', top: '70%', transform: 'translate(-60px) rotate(90deg)'}}><Line></Line></LineWrapper>
                        <LineWrapper style={{ left: '0', bottom: '20px'}}><Line></Line></LineWrapper>
                        <LineWrapper style={{ right: '0', bottom: '20px'}}><Line></Line></LineWrapper>
                    </Box>
                </StepsWrap>
            </StepMain>
        </Box>
    )
}
