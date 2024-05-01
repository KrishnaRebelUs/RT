import React from 'react'
import DashboardCard from '../../../components/shared/DashboardCard';
import {Box, styled,Button,  Stack, Typography } from '@mui/material';
import {IconChevronRight} from '@tabler/icons-react';
import { Link } from 'react-router-dom'; 
import { useTheme } from '@emotion/react';
const Disputed = () => {
	const TypographyStyled = styled(Typography)(({ theme }) => ({
		color: theme.palette.secondary.main,
		fontSize: '16px',
	  }));
	  const ButtonStyled = styled(Button)(({ theme }) => ({
		backgroundColor: theme.palette.primary.contrast,
		border: '1px solid',
		borderColor: theme.palette.primary.contrast,
		color: theme.palette.primary.contrastText,
		fontSize: '12px',
		padding: '3px 8px',
		fontWeight: '600',
		'&:hover': {
			backgroundColor: theme.palette.primary.main,
			color:theme.palette.primary.contrastText,
			borderColor:theme.palette.primary.main
		},
	}));
	  const theme = useTheme();
  return (
    <DashboardCard title={
		<Typography variant='h5' sx={{color: theme.palette.primary.light}}>Disputed Amount</Typography>
	} action={
		<ButtonStyled component={Link} to="/manage-dispute">View Details <IconChevronRight  size="15" /></ButtonStyled>
	}>
		<Typography variant='h2' sx={{ color: theme.palette.primary.light}}>${new Intl.NumberFormat().format(4942234.43)}</Typography>
		<TypographyStyled variant='body1'marginTop={3} sx={{ color: theme.palette.text.dark }} fontWeight={500}>View all raised disputes till date</TypographyStyled>	

	</DashboardCard>
  )
}

export default Disputed;
