import { Grid, Box, Typography, styled,Stack} from '@mui/material';
import React ,{useState} from 'react';
import PageContainer from 'src/components/container/PageContainer';
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
					<Grid container spacing={2} marginBottom={2}>
						<Grid item xs={12} lg={6}>
							<Box style={{ position: 'relative', height: '100%' }}>
								<DashboardCard title={
									<TypographyStyled variant='h5' sx={{ color: theme.palette.accent.main }}>Finding Amount</TypographyStyled>
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
				<Grid item xs={12} lg={6}>	
					<EfficencyAssesment />
				</Grid>
				<Grid item xs={12} lg={6}>
		     	       <DashboardCard>
							<Stack direction='row' spacing={1}>
							 	<RecentTransactions />
							 	<Update />
							</Stack>
					   </DashboardCard>
				</Grid>
				<Grid item xs={12}>
					<JobProgress />
				</Grid>
			</Grid>
	  </PageContainer>
  )
}

export default Excesscoopbilling;
