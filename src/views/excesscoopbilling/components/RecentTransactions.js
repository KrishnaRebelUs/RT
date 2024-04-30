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
    <Box>
        <Typography variant='h5' sx={{color: theme.palette.text.dark}}>Hits & Misses</Typography>
          <TimelineStyled style={{overflow:'hidden', height:'470px'}}>
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
              <TimelineOppositeContent>11/14/24</TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="success" variant="outlined" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography fontWeight="600">Successfully recovered in Batch 1 $ 20,000</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent>11/13/24</TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="accent" variant="outlined" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography fontWeight="600">Awaiting to hear from Amazon on Batch 2</Typography>{' '}
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent>11/11/24</TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="primary" variant="outlined" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography fontWeight="600">Amazon hosts over 100 categories of overbillings, chargebacks, and deductions</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent>11/10/24</TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="success" variant="outlined" />
              </TimelineSeparator>
              <TimelineContent>
                 <Typography fontWeight="600">Over 22 reports are required to untangle these disputes</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent>11/10/24</TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="success" variant="outlined" />
              </TimelineSeparator>
              <TimelineContent>
                 <Typography fontWeight="600">About 5% of Amazon sales are lost due to uncollected revenue, chargebacks, and accounting errors</Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </TimelineStyled>
    </Box> 
  );
};

export default RecentTransactions;
