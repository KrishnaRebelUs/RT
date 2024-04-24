import React from 'react'
import DashboardCard from '../../../components/shared/DashboardCard';
import {Box, styled, Typography,Grid } from '@mui/material';
import BarChart from '../../components/pages/BarChart';
import { useTheme } from '@emotion/react';
import NumberData from '../../components/pages/NumberData';


const Impactoverview = () => {
	const TypographyStyled = styled(Typography)(({ theme }) => ({
		color: theme.palette.primary.main,
	  }));
      const theme = useTheme();
  return (
    <DashboardCard title={
      <TypographyStyled variant='h2' sx={{ color: theme.palette.secondary.main }}>
        Impact Overview
      </TypographyStyled>
    } >
     <>
	   <Grid container spacing={2} alignItems='center'>
          <Grid item lg={6}>
            <Box>
              <TypographyStyled variant='h6' marginBottom={1} sx={{ color: theme.palette.accent.main }} >Recouped Amount</TypographyStyled>
              <Typography variant='h1' className='text-dark' sx={{ color: theme.palette.accent.main }} >$ 1,280</Typography>
            </Box>
          </Grid>
          <Grid item lg= {6}>
              <BarChart  color={theme.palette.accent.main} percentage={77.5} width='70px'  />
          </Grid>
     </Grid>
		<Box>
      <NumberData />
    </Box>
	 </>		

	</DashboardCard>
  )
}

export default Impactoverview;
