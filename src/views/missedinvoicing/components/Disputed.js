
import React from 'react'
import DashboardCard from '../../../components/shared/DashboardCard';
import {Box, styled,Button,  Stack, Typography } from '@mui/material';
import {IconChevronRight} from '@tabler/icons-react';
import { Link } from 'react-router-dom'; 
import { useTheme } from '@emotion/react';
const Disputed = () => {
	const TypographyStyled = styled(Typography)(({ theme }) => ({
		color: theme.palette.secondary.main,
		fontSize: '14px',
		lineHeight: '24px'
	  }));
	const ButtonStyled = styled(Button)(({ theme }) => ({
		backgroundColor: theme.palette.primary.contrast,
		border: '1px solid',
		borderColor: theme.palette.primary.contrast,
		color: theme.palette.primary.contrastText,
		fontSize: '10px',
		padding: '3px 6px',
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
		<Typography variant='h4' sx={{color: theme.palette.primary.light}}>Claim Submitted($)</Typography>
	}>
		<Typography variant='h3' sx={{ color: theme.palette.primary.light}}>${new Intl.NumberFormat().format(4942234.43)}</Typography>
		<TypographyStyled variant='body2' marginTop={3} sx={{ color: theme.palette.text.dark }}>View all raised disputes till date</TypographyStyled>	

	</DashboardCard>
  )
}

export default Disputed;
