import React, {useState} from 'react'
import DashboardCard from '../../../components/shared/DashboardCard';
import {Box, styled,Button,  Stack, Typography, Dialog,DialogTitle, DialogContent, Grid, Divider} from '@mui/material';
import {IconChevronRight, IconX} from '@tabler/icons-react';
import { useTheme } from '@emotion/react';
const YearlyTrend = ( title ) => {
	const ButtonStyled = styled(Button)(({ theme }) => ({
		backgroundColor: theme.palette.primary.extraLight,
		border: '1px solid',
		borderColor: theme.palette.primary.light,
		color: theme.palette.primary.main,
		fontSize: '11px',
		padding: '3px 6px',
		fontWeight: '600',
		'&:hover': {
			backgroundColor: theme.palette.primary.main,
			color: 'white'
		},
	}));

	const ButtonClose = styled(Button)(({ theme }) => ({
		minWidth: '30px',
		height: '30px',
		backgroundColor: 'red',
		color: 'white',
		right: '15px',
		top: '15px',
		'&:hover': {
			backgroundColor: theme.palette.secondary.main,
			color: 'white'
		}
	}));
	  
	const CustomStack = styled(Stack)(({ theme, index }) => ({
		backgroundColor: index % 2 === 0 ? theme.palette.primary.extraLight : theme.palette.secondary.extraLight,
		padding: theme.spacing(2),
	}));
	const TypographyStyled = styled(Typography)(({ theme }) => ({
		color: theme.palette.secondary.main,
	}));
	  const theme= useTheme();
	  const [open, setOpen] = useState(false);

	  const handleClick = () => {
		  setOpen(true);
	  };
  
	  const handleClose = () => {
		  setOpen(false); 
	  };
  return (
    <DashboardCard title={
		<Typography variant='h6'>Yearly Trends</Typography>
	} action={
		<ButtonStyled onClick={handleClick} >View Details  <IconChevronRight  size="16" /></ButtonStyled>
	}>
		<TypographyStyled variant='h6'>2024</TypographyStyled>
		<Typography variant='h3' sx={{ color: theme.palette.primary.main }}>${new Intl.NumberFormat().format(8989)}</Typography>
		
		<Box my={1}><Divider /></Box>

		<Grid container spacing={3} justifyContent="space-between">
			<Grid item>
				<TypographyStyled variant='h6' mb={1}>2022</TypographyStyled>
				<Typography variant='h6'sx={{ color: theme.palette.accent.main }} ><b>${new Intl.NumberFormat().format(8989)}</b></Typography>
			</Grid>
			<Grid item>
				<TypographyStyled variant='h6' mb={1}>2023</TypographyStyled>
				<Typography variant='h6' sx={{ color: theme.palette.success.dark }}>$ {new Intl.NumberFormat().format(1680966.35)}</Typography>
			</Grid>
		</Grid>
		<Dialog open={open} onClose={handleClose} maxWidth='sm' fullWidth>
			<Stack direction='row' justifyContent="space-between">
				<DialogTitle variant='h3'>YoY Split</DialogTitle>
				<ButtonClose><IconX onClick={handleClose} size='16' /></ButtonClose>
			</Stack>
			<DialogContent>
				<Grid container spacing={2} alignItems="center" justifyContent='center'>
					<Grid item xs={12} alignItems="center" justifyContent='center'>
						{[...Array(6)].map((_, index) => (
							<CustomStack key={index} index={index} direction="row" spacing={4} justifyContent="space-between">
								<TypographyStyled variant='h6'>2024</TypographyStyled>
								<Typography variant='h6'>${new Intl.NumberFormat().format(12966.35)}</Typography>
							</CustomStack>
						))}
					</Grid>
				</Grid>
			</DialogContent>	
		</Dialog>		

	</DashboardCard>
  )
}

export default YearlyTrend;
