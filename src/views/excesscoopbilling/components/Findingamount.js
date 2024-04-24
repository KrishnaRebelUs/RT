import React from 'react'
import DashboardCard from '../../../components/shared/DashboardCard';
import {Box, styled,  Stack, Typography } from '@mui/material';
import piggy from "src/assets/images/products/1.jpg"; 
import { useTheme } from '@emotion/react';

const Findingamount = () => {
	const TypographyStyled = styled(Typography)(({ theme }) => ({
		color: theme.palette.primary.main,
	  }));
	  const theme = useTheme();
  return (
    <DashboardCard title={
		<TypographyStyled variant='h4' sx={{ color: theme.palette.accent.main }}>
			Finding Amount
		</TypographyStyled>
	} >
     <>
	    <Stack direction='row' spacing={2}>
			<Box>
			<TypographyStyled variant='h1'sx={{ color: theme.palette.accent.main }}>$ 98442</TypographyStyled>
			</Box>
		</Stack>
		<Stack direction='row' spacing={4} useFlexGap  justifyContent="flex-end" alignItems="flex-end" marginTop={3}>
			<Box>
				<img src={piggy} alt='piggy'style={{position:'absolute', right:'0', top:'0', maxWidth: '150px'}}/>
			</Box>
    	</Stack>
	 </>		

	</DashboardCard>
  )
}

export default Findingamount;
