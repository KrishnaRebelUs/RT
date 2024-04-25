import React from 'react';
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
import { Link, Typography ,styled} from '@mui/material';
import { useTheme } from '@emotion/react';
import { Box } from '@mui/system';

const RecentTransactions = () => {
  
  const theme = useTheme();
  const TypographyStyled = styled(Typography)(({ theme }) => ({
		color: theme.palette.text.dark,
	}));
  const TimelineStyled = styled(Box)(({ theme }) => ({
		minHeight: '300px',
    overflowY: 'auto'
	}));

  return (
    <DashboardCard  title={<TypographyStyled variant='h5'>Hits & Misses</TypographyStyled>} >
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
              flex: '0 0 100px',
              paddingLeft: 0,
              fontSize: '12px',
              fontWeight: '600',
              color: theme.palette.text.light
            },
          }}
        >
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" color="primary">20 Jan 2024</Typography>
              <Typography variant="body2">10:00 am</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary" variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Payment received from John Doe of $385.90</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" color="secondary">26 Jan 2024</Typography>
              <Typography variant="body2">10:00 am</Typography>
            </TimelineOppositeContent>
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
            <TimelineOppositeContent>
              <Typography variant="body2" color="success">15 March 2024</Typography>
              <Typography variant="body2">02:15 pm</Typography>
            </TimelineOppositeContent>
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
    </DashboardCard>
  );
};

export default RecentTransactions;
