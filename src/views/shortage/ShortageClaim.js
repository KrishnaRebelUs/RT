import { Grid, Stack } from '@mui/material';
import React from 'react'
import PageContainer from 'src/components/container/PageContainer';
import Breadcrumb from '../../components/pages/Breadcrumb';
import Header from '../../components/pages/Header';
import BulkShortage from './components/BulkShortage/BulkShortage';
const ShortageClaim = () => {
  return (
      <PageContainer  title="Shortage Claim">
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Breadcrumb titles={['Shortage Claim']} />
				</Grid>
				<Grid item xs={12}>
					<Header title='Shortage'/>
				</Grid>
				<Grid item xs={12}>
					<BulkShortage />
				</Grid>
			</Grid>
	  </PageContainer>
  )
}

export default ShortageClaim;
