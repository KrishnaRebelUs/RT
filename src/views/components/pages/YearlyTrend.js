import React from 'react'
import DashboardCard from '../../../components/shared/DashboardCard';
import {Box, styled,Button,  Stack, Typography } from '@mui/material';
import {IconChevronRight} from '@tabler/icons-react';
import { useTheme } from '@emotion/react';
const YearlyTrend = () => {
	const TypographyStyled = styled(Typography)(({ theme }) => ({
		color: theme.palette.secondary.main,
	  }));
	  const ButtonStyled = styled(Button)(({ theme }) => ({
		backgroundColor: theme.palette.primary.main,
		border: '1px solid currentColor',
		color: theme.palette.primary.contrastText,
		fontSize: '12px',
		padding: '4px 10px',
		'&:hover': {
			backgroundColor: theme.palette.primary.contrastText,
			color: theme.palette.primary.dark,
		  },
	  }));
	  const theme= useTheme();
  return (
    <DashboardCard title={
		<Typography variant='h4'>
			Yearly Trends
		</Typography>
	} action={
		<ButtonStyled>View Details  <IconChevronRight  size="16" /></ButtonStyled>
	}>
     <>
	    <Stack direction='row' spacing={4} useFlexGap justifyContent="space-between" alignItems='center'>
			<Box>
               <TypographyStyled variant='h4' marginBottom={2} sx={{ color: theme.palette.primary.main }}>2024</TypographyStyled>
			   <Typography variant='h3'>$8989</Typography>
			</Box>
		</Stack>
		<Stack direction='row' spacing={4} useFlexGap marginTop={2}>
			<Box>
			<TypographyStyled variant='h6' marginBottom={1} sx={{ color: theme.palette.accent.main }}>2022</TypographyStyled>
			<Typography variant='h6'sx={{ color: theme.palette.text.dark }} ><b>$ 1,280,966.35</b></Typography>
			</Box>
			<Box>
			<TypographyStyled variant='h6' marginBottom={1}  sx={{ color: theme.palette.success.main }}>2023</TypographyStyled>
			<Typography variant='h6'>$ 1,680,966.35</Typography>
			</Box>
        </Stack>
	
	 </>		

	</DashboardCard>
  )
}

export default YearlyTrend;
