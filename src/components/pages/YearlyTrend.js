import React from 'react'
import DashboardCard from '../shared/DashboardCard';
import {Box, styled, Button, Stack, Typography, Grid, Divider } from '@mui/material';
import {IconChevronRight} from '@tabler/icons-react';
import { useTheme } from '@emotion/react';
const YearlyTrend = () => {
	const ButtonStyled = styled(Button)(({ theme }) => ({
		backgroundColor: theme.palette.primary.extraLight,
		border: '1px solid',
		borderColor: theme.palette.primary.light,
		color: theme.palette.primary.main,
		fontSize: '13px',
		padding: '5px 12px',
		fontWeight: '600',
		'&:hover': {
			backgroundColor: theme.palette.primary.main,
			color: 'white',
		},
	}));
	const theme= useTheme();
  	return (
		<DashboardCard title={
			<Typography variant='h5'>
				Yearly Trends
			</Typography>
		} action={
			<ButtonStyled>View Details  <IconChevronRight  size="16" /></ButtonStyled>
		}>
			<Grid container spacing={3}>
				<Grid item>
					<Typography variant='h6' mb={1}sx={{ color: theme.palette.text.main }}>2024</Typography>
					<Typography variant='h2' sx={{ color: theme.palette.success.dark }}>$8989</Typography>
				</Grid>
			</Grid>
			<Box mt={2}><Divider/></Box>
		<>
			<Stack direction='row' spacing={4} useFlexGap marginTop={2}>
				<Box>
					<Typography variant='h6' marginBottom={1}>2022</Typography>
					<Typography variant='h5'sx={{ color: theme.palette.accent.main }} ><b>$ 1,280,966.35</b></Typography>
				</Box>
				<Box>
					<Typography variant='h6' marginBottom={1}>2023</Typography>
					<Typography variant='h5' sx={{ color: theme.palette.primary.main }}>$ 1,680,966.35</Typography>
				</Box>
			</Stack>
		</>		
	</DashboardCard>
  )
}

export default YearlyTrend;
