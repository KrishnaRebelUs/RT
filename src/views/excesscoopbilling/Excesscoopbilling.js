import { Grid, Stack } from '@mui/material';
import React from 'react'
import PageContainer from 'src/components/container/PageContainer';
import AuditTime from './components/AuditTime';
import Disputed from './components/Disputed';
import EfficencyAssesment from './components/EfficencyAssesment';
import Findingamount from './components/Findingamount';
import GranularAnalysis from './components/GranularAnalysis';
import Header from '../components/pages/Header';
import Breadcrumb from '../components/pages/Breadcrumb';
import Impactoverview from './components/Impactoverview';
import JobProgress from './components/JobProgress';
import RecentTransactions from './components/RecentTransactions';
import RecoupedAmount from './components/RecoupedAmount';
import WinRate from './components/WinRate';
import YearlyTrend from '../components/pages/YearlyTrend';

const Excesscoopbilling = () => {
  return (
      <PageContainer  title="Excess Coop Billing">
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
					  <Findingamount />
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
			<Grid item xs={12} lg={4}>	
				<Impactoverview />
			</Grid>
			<Grid item xs={12} lg={7}>
				<GranularAnalysis />
			</Grid>
			<Grid item xs={12} lg={5}>
				<WinRate />
			</Grid>
			<Grid item xs={12} lg={5}>	
				<EfficencyAssesment />
			</Grid>
			<Grid item xs={12} lg={3}>
				<AuditTime />
			</Grid>
			<Grid item xs={12} lg={4}>
				<RecentTransactions />
			</Grid>
			<Grid item xs={12}>
				<JobProgress />
			</Grid>
			</Grid>
	  </PageContainer>
  )
}

export default Excesscoopbilling;
