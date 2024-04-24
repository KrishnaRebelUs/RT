import React, {useState} from 'react'
import DashboardCard from '../../../components/shared/DashboardCard';
import {Box, styled,Button,  Stack, Typography, Dialog,DialogTitle, DialogContent, Grid} from '@mui/material';
import {IconChevronRight, IconX} from '@tabler/icons-react';
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
		padding: '2px 10px',
		'&:hover': {
			backgroundColor: theme.palette.primary.contrastText,
			color: theme.palette.primary.dark,
		  },
	  }));
	  const BoxStyled = styled(Button)(({ theme }) => ({
		backgroundColor: theme.palette.error.main,
		border: '1px solid currentColor',
		color: theme.palette.primary.contrastText,
		fontSize: '12px',
		padding: '4px 10px',
		borderRadius:'7px',
		height: '40px',
     	width: '100px',
		margin:'10px 20px',
		fontSize: '15px',
		'&:hover': {
			backgroundColor: theme.palette.primary.contrastText,
			color: theme.palette.primary.dark,
		  },
	  }));
	  const CustomStack = styled(Stack)(({ theme, index }) => ({
		backgroundColor: index % 2 === 0 ? theme.palette.primary.extraLight : theme.palette.secondary.extraLight,
		padding: theme.spacing(2),
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
		<Typography variant='h4'>
			Yearly Trends
		</Typography>
	} action={
		<ButtonStyled onClick={handleClick} >View Details  <IconChevronRight  size="16" /></ButtonStyled>
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
		<Dialog open={open} onClose={handleClose} maxWidth='sm' fullWidth>
			<Stack direction='row' justifyContent="space-between">
				<DialogTitle variant='h3'>YoY Split</DialogTitle>
				<BoxStyled> Close   <IconX onClick={handleClose} size='16' /></BoxStyled>
			</Stack>
			<DialogContent>
				<Grid container spacing={2} alignItems="center" justifyContent='center'>
					<Grid item xs={12} alignItems="center" justifyContent='center'>
						{[...Array(6)].map((_, index) => (
							<CustomStack key={index} index={index} direction="row" spacing={4} justifyContent="space-between">
								<TypographyStyled variant='h6'>2024</TypographyStyled>
								<Typography variant='h6'>202229,82</Typography>
							</CustomStack>
						))}
					</Grid>
				</Grid>
			</DialogContent>	
		</Dialog>
	
	 </>		

	</DashboardCard>
  )
}

export default YearlyTrend;
