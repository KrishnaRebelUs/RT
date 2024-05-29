import React from 'react';
import {styled, Typography, Box, Grid } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';

const TypographyStyled = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  }));

const Dashboard = () => {
  return (
   <PageContainer title='Dashboard Page'>
      <Grid container>
          <Grid item>
             <DashboardCard title={<TypographyStyled variant='h4'>User Details</TypographyStyled>}>
                 <Grid container spacing={2}>
                     <Grid item xs={12} lg={5}></Grid>
                     <Grid item xs={12} lg={7}></Grid>
                 </Grid>
             </DashboardCard>
          </Grid>
      </Grid>
   </PageContainer>
  );
};

export default Dashboard;
