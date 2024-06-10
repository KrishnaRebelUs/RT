import React from 'react'
import { Grid, Typography,styled,Box,Button,Stack } from '@mui/material';
import PageContainer from '../../components/container/PageContainer';
import Breadcrumb from '../components/pages/Breadcrumb';
import Header from '../components/pages/Header';
import DashboardCard from '../../components/shared/DashboardCard';
import {IconSearch, IconThumbUp, IconExclamationCircle, IconThumbDown } from '@tabler/icons-react';
import { useTheme } from '@emotion/react';
import BarGraph from './components/BarGraph';
import SelectMonth from '../../layouts/full/header/SelectMonth';
import SelectYear from '../../layouts/full/header/SelectYear';
import SelectQtr from '../../layouts/full/header/SelectQtr';
import ChargesBackTable from './components/ChargesBackTable';
import InfraTable from './components/InfraTable';
import AsinTable from './components/AsinTable';
import SelectStatus from '../../layouts/full/header/SelectStatus';
import AsniForm from '../../layouts/full/header/AsniForm';
import SelectIssue from '../../layouts/full/header/SelectIssue';
import SelectSubIssue from '../../layouts/full/header/SelectSubIssue';


const OpsChargeBack = () => {
	const theme = useTheme();
	const ClaimCard = styled(Box)(({ theme }) => ({
		position: 'relative',
		minHeight: '200px',
		height: '100%'
	}));

	const ButtonStyled = styled(Button)(({ theme }) => ({
		backgroundColor: theme.palette.primary.contrast,
		border: '1px solid',
		borderColor: theme.palette.primary.contrast,
		color: theme.palette.primary.contrastText,
		fontSize: '15px',
		padding: '0',
		fontWeight: '600',
		transition: 'all ease 0.3s',
		'&:hover': {
			backgroundColor: theme.palette.primary.main,
			color: theme.palette.primary.contrastText,
			borderColor: theme.palette.primary.main
		},
		'& .btn-indicator': {
			width: '1px',
			backgroundColor: theme.palette.primary.main,
			alignSelf: 'stretch',
			marginLeft: '4px'
		}
	}));
	const BoxStyled = styled(Box)(({ theme }) => ({
		padding: '5px 12px',
		fontWeight: '600',
	}));
	

  return (
	<PageContainer title=' Opertaional Chargebacks'>
			<Grid container spacing={3} mb={4}>
				<Grid item xs={12}>
					<Breadcrumb titles={['Operational Chargebacks']} />
				</Grid>
				<Grid item xs={12}>
					<Header title='Operational Chargebacks' />
				</Grid>
			
            </Grid>
			<Grid container spacing={2} mb={4}>
				<Grid item sm={6} md={3}>
					<ClaimCard>
						<DashboardCard title={<Typography variant='h6'>Total Disputed</Typography>}>
							<Typography variant='h4' sx={{ color: theme.palette.primary.main }}>${new Intl.NumberFormat().format(8847.91)}</Typography>
							<IconExclamationCircle size='70' style={{ position: 'absolute', right: '25px', bottom: '30px', color: theme.palette.primary.main }} />
						</DashboardCard>
					</ClaimCard>
				</Grid>
				
				<Grid item sm={6} md={3}>
					<ClaimCard>
						<DashboardCard title={<Typography variant='h6'>Total Denied</Typography>}>
							<Typography variant='h4' sx={{ color: theme.palette.error.main }}>${new Intl.NumberFormat().format(4712.67)}</Typography>
							<IconThumbDown size='70' style={{ position: 'absolute', right: '25px', bottom: '30px', color: theme.palette.error.main }} />
						</DashboardCard>
					</ClaimCard>
				</Grid>
				<Grid item sm={6} md={3}>
					<ClaimCard>
						<DashboardCard
							title={
								<Typography variant='h6'>Total Approved</Typography>
							}
						>
							<Typography variant='h4' sx={{ color: theme.palette.success.dark }}>${new Intl.NumberFormat().format(2520.49)}</Typography>
							<IconThumbUp size='70' style={{ position: 'absolute', right: '25px', bottom: '30px', color: theme.palette.success.main }} />
						</DashboardCard>
					</ClaimCard>
				</Grid>
				<Grid item sm={6} md={3}>
					<ClaimCard>
						<DashboardCard>
							<BarGraph />
						</DashboardCard>
					</ClaimCard>
				</Grid>
			</Grid>
			<Grid container spacing={2} justifyContent='space-between' mb={4}>
				<Grid item xs={12} lg={6}>
					<Typography variant='h3'>Chargeback Split</Typography>
				</Grid>
				<Grid item xs={12} lg={6}>
					<Grid container spacing={2}>
						<Grid item xs={12} lg={6}>
							<SelectMonth />
						</Grid>
						<Grid item xs={12} lg={6}>
							<SelectYear />
						</Grid>

					</Grid>
				</Grid>
				<Grid item xs={12} mt={1}>
					<ChargesBackTable />
				</Grid>
			</Grid>
			<Grid container spacing={2} justifyContent='space-between' mb={4}>
				<Grid item xs={12} lg={6}>
					<Typography variant='h3'>Infraction Type</Typography>
				</Grid>
				<Grid item xs={12} lg={6}>
					<Grid container spacing={2}>
						<Grid item xs={12} lg={6}>
							<SelectMonth />
						</Grid>
						<Grid item xs={12} lg={6}>
							<SelectQtr />
						</Grid>

					</Grid>
				</Grid>
				<Grid item xs={12} mt={1}>
					<InfraTable />
				</Grid>
			</Grid>
			<Grid container spacing={2} justifyContent='space-between'>
				<Grid item xs={12} mb={3}>
					<Typography variant='h3'>Operational Chargebacks - ASIN Level Split</Typography>
				</Grid>
				<Grid item xs={12}>
					<DashboardCard>
						<Grid container spacing={2} mb={3}>
							<Grid item xs={12} lg={3}>
								<SelectYear />
							</Grid>
							<Grid item xs={12} lg={3}>
								<SelectMonth />
							</Grid>
							<Grid item xs={12} lg={3}>
								<SelectStatus />
							</Grid>
							<Grid item xs={12} lg={3}>
								<AsniForm />
							</Grid>
						</Grid>
						<Grid container spacing={2}>
							<Grid item xs={12} lg={5}>
								<SelectIssue />
							</Grid>
							<Grid item xs={12} lg={5}>
								<SelectSubIssue />
							</Grid>
							<Grid item xs={12} lg={2}>
							   <ButtonStyled><BoxStyled>search</BoxStyled> <span className='btn-indicator'></span> <BoxStyled><IconSearch size="18" style={{ margin: 'auto', verticalAlign: 'middle' }} /></BoxStyled></ButtonStyled>
							</Grid>
							
						</Grid>
					</DashboardCard>
				</Grid>
				
				<Grid item xs={12} mt={1}>
					<DashboardCard>
					   <AsinTable />
					</DashboardCard>
				</Grid>
			</Grid>
	</PageContainer>
  )
}

export default OpsChargeBack
