import React ,{useState} from 'react';
import DashboardCard from '../../../components/shared/DashboardCard';
import {
  Timeline,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  timelineOppositeContentClasses
} from '@mui/lab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Link, Typography ,styled ,Grid,Tabs,Tab} from '@mui/material';
import { useTheme } from '@emotion/react';
import { Box } from '@mui/system';


const RecentTransactions = () => {
  const [value, setValue] = useState('1');
	const handleChange = (event, newValue) => {
        setValue(newValue);
    };
  
  const theme = useTheme();

  const TypographyParaStyled = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.main,
    position: 'relative',
    marginBottom: '5px',
    '&::before': {
      content: '""',
      position: 'absolute',
      display: 'inline-block',
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      backgroundColor: theme.palette.accent.main,
      marginRight: '8px',
      bottom: '7px',
      left: '-25px', 
    },
    }));
    const GridStyled = styled(Grid)(({ theme }) => ({
    marginLeft:'26px',
      marginTop: '10px'
  
  }));
  const TypographyStyled = styled(Typography)(({ theme }) => ({
		color: theme.palette.text.dark,
	}));
  const TimelineStyled = styled(Box)(({ theme }) => ({
		minHeight: '300px',
    overflowY: 'auto'
	}));
  const GridTopStyled = styled(Grid)(({ theme }) => ({
		minHeight: '300px',
    height: '300px',
    overflow:'hidden'
	}));
  return (
    <DashboardCard>
      {/*  */}
       <TabContext value={value}>
					<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
						<TabList onChange={handleChange} aria-label="" className='update-tab'>
						<Tab label="Hits & Misses" value="1" />
						<Tab label="Updates" value="2" />
					
						</TabList>
					</Box>
					<TabPanel value="1" style={{padding:'0'}}>
            <TimelineStyled>
              <Timeline
                className="theme-timeline"
                nonce={undefined}
                onResize={undefined}
                onResizeCapture={undefined}
                sx={{
                  p: 0,
                  mb: '-40px',
                  '& .MuiTimelineConnector-root': {
                    width: '1px',
                    backgroundColor: '#efefef'
                  },
                  [`& .${timelineOppositeContentClasses.root}`]: {
                    flex: 0.4,
                    paddingLeft: 0,
                    fontSize: '12px',
                    fontWeight: '600',
                    color: theme.palette.primary.main
                  },
                }}
              >
                <TimelineItem>
                  <TimelineOppositeContent>02/01/24</TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot color="primary" variant="outlined" />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>Payment received from John Doe of $385.90</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent>10:00 am</TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot color="secondary" variant="outlined" />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Typography fontWeight="600">New sale recorded</Typography>{' '}
                    <Link href="/" underline="none">
                      #ML-3467
                    </Link>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent>12:00 am</TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot color="success" variant="outlined" />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>Payment was made of $64.95 to Michael</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent>12:00 am</TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot color="success" variant="outlined" />
                  </TimelineSeparator>
                  <TimelineContent>Payment Received</TimelineContent>
                </TimelineItem>
              </Timeline>
            </TimelineStyled>
          </TabPanel>
					<TabPanel value="2"  style={{padding:'0'}}>  
            <GridTopStyled container spacing={2}  alignItems='center'>
              <marquee scrollAmount="5" direction='up' speed="100" style={{marginLeft: '17px', marginTop:'30px'}}>
                  <GridStyled item xs="12">
                  <TypographyParaStyled variant='h6' style={{color: theme.palette.primary.main}}>Successfully recovered in Batch 1 $ 20,000</TypographyParaStyled>
                  <Typography variant='body2'>3 May</Typography>
                  </GridStyled>
                  <GridStyled item xs="12">
                    <TypographyParaStyled variant='h6'>Successfully recovered in Batch 1 $ 20,000</TypographyParaStyled>
                    <Typography variant='body2'>3 May</Typography>
                  </GridStyled>
                  <GridStyled item xs="12">
                    <TypographyParaStyled variant='h6'>Successfully recovered in Batch 1 $ 20,000</TypographyParaStyled>
                    <Typography variant='body2'>3 May</Typography>
                  </GridStyled>
                  <GridStyled item xs="12" >
                    <TypographyParaStyled variant='h6' style={{color: theme.palette.primary.main}}>Successfully recovered in Batch 1 $ 20,000</TypographyParaStyled>
                    <Typography variant='body2'>3 May</Typography>
                  </GridStyled>
                  <GridStyled item xs="12">
                    <TypographyParaStyled variant='h6'>Successfully recovered in Batch 1 $ 20,000</TypographyParaStyled>
                    <Typography variant='body2'>3 May</Typography>
                  </GridStyled>
                  <GridStyled item xs="12">
                    <TypographyParaStyled variant='h6'>Successfully recovered in Batch 1 $ 20,000</TypographyParaStyled>
                    <Typography variant='body2'>3 May</Typography>
                  </GridStyled>
                </marquee>
            </GridTopStyled>
          </TabPanel>
					</TabContext>

    </DashboardCard>
  );
};

export default RecentTransactions;
