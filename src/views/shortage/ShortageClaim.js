import { Grid, Typography, Box, styled, Button, Divider, Avatar,  } from '@mui/material';
import React from 'react'
import DashboardCard from '../../components/shared/DashboardCard';
import Breadcrumb from '../components/pages/Breadcrumb';
import Header from '../components/pages/Header';
import YearlyTrend from './components/YearlyTrend';
import PageContainer from '../../components/container/PageContainer';
import ShortageTable from '../components/pages/ShortageTable';
import FinopsTable from '../components/pages/FinopsTable';
import { useTheme } from '@emotion/react';
import { Link } from 'react-router-dom';
import {IconChevronRight,IconThumbUp, IconClock, IconBriefcase, IconCurrencyDollar, IconExclamationCircle, IconThumbDown } from '@tabler/icons-react';
import BarChart from '../components/pages/Barchart';
import moment from 'moment';

export const ExportCSVBTN = () => {

	return (
		<Button variant="contained" color="primary">Export CSV</Button>
	);
};
import CustomStepper from '../components/pages/CustomStepper';

const ShortageClaim = () => {
	const theme = useTheme();
	const ButtonStyled = styled(Button)(({ theme }) => ({
		backgroundColor: theme.palette.primary.extraLight,
		border: '1px solid',
		borderColor: theme.palette.primary.light,
		color: theme.palette.primary.main,
		fontSize: '12px',
		padding: '2px 8px',
		fontWeight: '600',
		'&:hover': {
			backgroundColor: theme.palette.primary.main,
			color: 'white',
		  },
	}));
	const TypographyStyled = styled(Typography)(({ theme }) => ({
		color: theme.palette.primary.main,
	}));
	const TypographyPayment = styled(Typography)(({ theme }) => ({
		color: theme.palette.secondary.main,
		marginBottom: '10px',
	}));
	const ClaimCard = styled(Box)(({ theme }) => ({
		position: 'relative',
		minHeight: '200px',
		height: '100%'
	}));
	const AvatarStyled = styled(Avatar)(({ theme }) => ({
		backgroundColor: theme.palette.primary.extraLight,
		borderRadius: '4px',
		width: '25px',
		height: '25px',
		transform: 'translatey(5px)',
	   '& svg':{
		  color:theme.palette.primary.main,
		  width: '18px',
		  height: '18px'
		}
	
	}));

	return (
		<PageContainer title="Shortage Claim">
			
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Breadcrumb titles={['Shortage Claim']} />
				</Grid>
				<Grid item xs={12}>
					<Header title='Shortage Claim' />
				</Grid>

				<Grid item xs={12} my={1}>
					<Typography variant='h3'>Bulk Shortage Dispute - Historical</Typography>
				</Grid>

				<Grid item xs={12}>
					<Grid container spacing={2}>
						<Grid item xs={12} lg={3}>
							<DashboardCard 
								title={
								<Typography variant='h6' >
									Shortage Claim Finding
								</Typography>}
							>
								<Grid container spacing={4}>
									<Grid item xs={12}>
										<TypographyStyled variant='h3' ><b>${new Intl.NumberFormat().format(98298998.90)} </b></TypographyStyled>
									</Grid>
									<Grid item xs={12}>
										<TypographyPayment variant='h6'>Payment Due Date:</TypographyPayment>
										<Box mb={2}><Divider /></Box>
										<Grid container spacing={3}>
											<Grid item><Typography variant='body1' style={{ color: theme.palette.accent.main, fontWeight: 600 }}> {moment('11 Jan 2018').format('MM/DD/YY')}</Typography></Grid>
											<Grid item><Typography variant='body1' style={{ color: theme.palette.text.light, fontWeight: 600 }}>To</Typography></Grid>
											<Grid item><Typography variant='body1' style={{ color: theme.palette.success.dark, fontWeight: 600 }}>13 Dec 2021</Typography></Grid>
										</Grid>
									</Grid>
								</Grid>
							</DashboardCard>
						</Grid>
						<Grid item xs={12} lg={3}>
							<YearlyTrend />
						</Grid>
						<Grid item xs={12} lg={3}>
							<DashboardCard title={<Typography variant='h6' >Total Line Audit</Typography>}>
								<Grid container spacing={4}>
									<Grid item xs={12}>
										<TypographyStyled variant='h3' ><b>562864</b></TypographyStyled>
									</Grid>
									<Grid item xs={12}>
										<TypographyPayment variant='h6'>Shortage claims audit:</TypographyPayment>
										<Box mb={2}><Divider /></Box>
										<Typography variant='h3' style={{ color: theme.palette.accent.main }}>${new Intl.NumberFormat().format(52648)}</Typography>
									</Grid>
								</Grid>
							</DashboardCard>
						</Grid>
						<Grid item xs={12} lg={3}>
							<DashboardCard>
								<Grid container spacing={3}>
									<Grid item sm={8}>
										<Grid container sx={{ flexWrap: 'nowrap' }} spacing={2}>
											<Grid item><AvatarStyled><IconClock/></AvatarStyled></Grid>
											<Grid item><Typography variant='h6'>Hour Saved</Typography></Grid>
										</Grid>
									</Grid>
									<Grid item sm={4}>
										<Typography variant='h6' style={{ color: theme.palette.primary.main, textAlign:'right' }}>18 h</Typography>
									</Grid>
								</Grid>
								<Grid my={2}><Divider /></Grid>
								<Grid container spacing={3}>
									<Grid item sm={8}>
										<Grid container spacing={2} sx={{ flexWrap: 'nowrap' }}>
											<Grid item><AvatarStyled style={{ backgroundColor: theme.palette.accent.light }}><IconBriefcase style={{ color: theme.palette.accent.main }}/></AvatarStyled></Grid>
											<Grid item><Typography variant='h6'>Resources Saved</Typography></Grid>
										</Grid>
									</Grid>
									<Grid item sm={4}>
										<Typography variant='h6' style={{ color: theme.palette.accent.main, textAlign:'right' }}>496</Typography>
									</Grid>
								</Grid>
								<Grid my={2}><Divider /></Grid>
								<Grid container spacing={3}>
									<Grid item sm={8}>
										<Grid container spacing={2} sx={{ flexWrap: 'nowrap' }}>
											<Grid item><AvatarStyled style={{ backgroundColor: theme.palette.success.light }}><IconCurrencyDollar style={{ color: theme.palette.success.main }}/></AvatarStyled></Grid>
											<Grid item><Typography variant='h6'>Amount Saved</Typography></Grid>
										</Grid>
									</Grid>
									<Grid item sm={4}>
										<Typography variant='h6' style={{ color: theme.palette.success.dark, textAlign:'right' }}>${new Intl.NumberFormat().format(98442)}</Typography>
									</Grid>
								</Grid>

							</DashboardCard>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<Grid container spacing={2}>
						<Grid item xs={12} lg={8}>
							<ShortageTable />
						</Grid>
						<Grid item xs={12} lg={4}>
							<DashboardCard title={<Typography variant='h5'>Current Progress</Typography>}>
								<CustomStepper />
							</DashboardCard>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12}>
		     		<Grid container spacing={2}>
						<Grid item xs={12} my={2}>
							<Typography variant='h3'>Price Claim Dispute</Typography>
						</Grid>
						<Grid item sm={6} md={3}>
							<ClaimCard>
								<DashboardCard title={<Typography variant='h6'>Total Disputed</Typography>}>
									<Typography variant='h4' sx={{ color: theme.palette.primary.main }}>$1,330,771.61</Typography>
									<IconExclamationCircle size='70' style={{position:'absolute', right:'25px', bottom:'30px', color: theme.palette.primary.main}}/>
								</DashboardCard>
							</ClaimCard>
						</Grid>
						<Grid item sm={6} md={3}>
							<ClaimCard>
								<DashboardCard title={<Typography variant='h6'>Total Pending With Amazon</Typography>}>
									<Typography variant='h4' sx={{ color: theme.palette.warning.main }}>${new Intl.NumberFormat().format(538941)}</Typography>
									<Box style={{position:'absolute', right:'10px', bottom:'10px'}}><BarChart color={theme.palette.accent.main} percentage={30} chartWidth="130" chartHeight="120" chartLableFonrSize="16px"  /></Box>
								</DashboardCard>
							</ClaimCard>
						</Grid>
						<Grid item sm={6} md={3}>
							<ClaimCard>
								<DashboardCard title={<Typography variant='h6'>Total Denied</Typography>}>
									<Typography variant='h4' sx={{ color: theme.palette.error.main }}>${new Intl.NumberFormat().format(6894247)}</Typography>
									<IconThumbDown size='70' style={{position:'absolute', right:'25px', bottom:'30px', color: theme.palette.error.main}}/>
								</DashboardCard>
							</ClaimCard>
						</Grid>
						<Grid item sm={6} md={3}>
							<ClaimCard>
								<DashboardCard 
									title={
										<Typography variant='h6'>Total Approved</Typography>
									}
									action={
										<ButtonStyled component={Link} to="/shortage-log">View <IconChevronRight size="16" /></ButtonStyled>
									}
								>
									<Typography variant='h4' sx={{ color: theme.palette.success.dark }}>${new Intl.NumberFormat().format(4942234)}</Typography>
									<IconThumbUp size='70' style={{position:'absolute', right:'25px', bottom: '30px', color: theme.palette.success.main}}/>
								</DashboardCard>
							</ClaimCard>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<DashboardCard  title={<Typography variant='h4'>FinOps-Shortage Claim</Typography>}>
				    	<FinopsTable />
					</DashboardCard>
				</Grid>
			</Grid>
		</PageContainer>
	)
}

export default ShortageClaim;
