import { Grid, Box, Typography, styled } from '@mui/material';
import React from 'react';
import PageContainer from 'src/components/container/PageContainer';
import AuditTime from './components/AuditTime';
import Disputed from './components/Disputed';
import EfficencyAssesment from './components/EfficencyAssesment';
import GranularAnalysis from './components/GranularAnalysis';
import Header from '../components/pages/Header';
import Breadcrumb from '../components/pages/Breadcrumb';
import Impactoverview from './components/Impactoverview';
import JobProgress from './components/JobProgress';
import RecentTransactions from './components/RecentTransactions';
import RecoupedAmount from './components/RecoupedAmount';
import WinRate from './components/WinRate';
import YearlyTrend from '../components/pages/YearlyTrend';
import DashboardCard from '../../components/shared/DashboardCard';
import piggy from "src/assets/images/piggy-bank.gif";
import { useTheme } from "@emotion/react";
import Update from './components/Update';

const Excesscoopbilling = () => {
	const TypographyStyled = styled(Typography)(({ theme }) => ({
		color: theme.palette.primary.main,
	}));
	const theme = useTheme();
  	
	return (
      <PageContainer title="Excess Coop Billing">
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Breadcrumb titles={['Excess Coop Billing']} />
				</Grid>

				<Grid item xs={12}>
					<Header title='Excess Coop Billing'/>
				</Grid>
				
				<Grid item xs={12} lg={8}>
					<Grid container spacing={2} marginBottom={3}>
						<Grid item xs={12} lg={6}>
							<Box style={{ position: 'relative', height: '100%' }}>
								<DashboardCard title={
									<TypographyStyled variant='h5' sx={{ color: theme.palette.text.main }}>Finding Amount</TypographyStyled>
								} >
									<Grid container spacing={3}>
										<Grid item>
											<TypographyStyled variant='h2' sx={{ color: theme.palette.accent.main }}>${new Intl.NumberFormat().format(98442)}</TypographyStyled>
										</Grid>
										<Grid item>
											<img src={piggy} alt='piggy'style={{position:'absolute', right:'30px', bottom:'30px', maxWidth: '150px'}}/>
										</Grid>

									</Grid>
								</DashboardCard>
							</Box>
						</Grid>
						<Grid item xs={12} lg={6}>
							<YearlyTrend />
						</Grid>
					</Grid>
					<Grid container spacing={2}>
						<Grid item xs={12} lg={6}>	
							<Disputed />
						</Grid>
						<Grid item xs={12} lg={6}>
							<RecoupedAmount />
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12} lg={4} style={{ position: 'relative' }}>	
					<Impactoverview />
				</Grid>
				<Grid item xs={12} lg={6}>
					<GranularAnalysis />
				</Grid>
				<Grid item xs={12} lg={6}>
					<WinRate />
				</Grid>
				<Grid item xs={12} lg={5}>	
					<EfficencyAssesment />
				</Grid>
				<Grid item xs={12} lg={3}>
					<AuditTime />
				</Grid>
				<Grid item xs={12} lg={3}>
					<RecentTransactions />
				</Grid>
<<<<<<< HEAD
				<Grid item xs={12} lg={7}>
=======
				{/* <Grid item xs={12} lg={4}>
>>>>>>> 2db3490f0195943c33a3ff7aeb0f466b5da77d0f
					<Update />
				</Grid> */}
				<Grid item xs={12}>
					<JobProgress />
				</Grid>
			</Grid>
	  </PageContainer>
  )
}

export default Excesscoopbilling;
