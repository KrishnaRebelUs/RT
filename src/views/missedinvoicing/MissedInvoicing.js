import React from "react";
import {styled, Grid, Button, TextField,InputAdornment  } from "@mui/material";
import { useTheme } from "@emotion/react";
import { IconH1 } from "@tabler/icons-react";
import { Link } from 'react-router-dom';
import PageContainer from "../../components/container/PageContainer";
import Breadcrumb from "../components/pages/Breadcrumb";
import Header from "../components/pages/Header";
import DashboardCard from '../../components/shared/DashboardCard';
import {IconFileArrowRight ,IconSearch} from '@tabler/icons-react';
import InvoiceTable from "../components/pages/InvoiceTable";

const MissedInvoicing = () => {
	const theme = useTheme();


	const ButtonStyled = styled(Button)(({ theme }) => ({
		backgroundColor: theme.palette.primary.extraLight,
		border: '1px solid',
		borderColor: theme.palette.primary.light,
		color: theme.palette.primary.main,
		fontSize: '13px',
		padding: '5px 12px',
		fontWeight: '600',
		'&:hover': {
			backgroundColor: theme.palette.primary.main,
			color: 'white',
		  },
	}));
	const ButtonStyledGreen = styled(Button)(({ theme }) => ({
		color:theme.palette.success.extraDark, 
		backgroundColor:theme.palette.success.light, 
		border: '1px solid',
		borderColor: theme.palette.success.main,
		fontSize: '13px',
		padding: '5px 12px',
		fontWeight: '600',
		'&:hover': {
			backgroundColor: theme.palette.success.extraDark,
			color: 'white',
			borderColor: theme.palette.success.extraDark
		  },
	}));
	const ButtonStyledAction = styled(Button)(({ theme }) => ({
		color:theme.palette.accent.main, 
		backgroundColor:theme.palette.accent.light, 
		border: '1px solid',
		borderColor: theme.palette.accent.main,
		fontSize: '13px',
		padding: '5px 12px',
		fontWeight: '600',
		'&:hover': {
			backgroundColor: theme.palette.accent.main,
			color: 'white',
		  },
	}));
	const ButtonStyledSecondary = styled(Button)(({ theme }) => ({
		color:theme.palette.secondary.main, 
		backgroundColor:theme.palette.secondary.light, 
		border: '1px solid',
		borderColor: theme.palette.secondary.main,
		fontSize: '13px',
		padding: '5px 12px',
		fontWeight: '600',
		'&:hover': {
			backgroundColor: theme.palette.secondary.main,
			color: 'white',
		  },
	}));


    return (
        <PageContainer title="Missed Invoicing">
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Breadcrumb titles={['Missed Invoicing']} />
				</Grid>
				<Grid item xs={12}>
					<Header title='Missed Invoicing' />
				</Grid>
				<Grid item xs={12}>
					<DashboardCard>
						<Grid container spacing={2} alignItems='center'>
						  <Grid item><ButtonStyledSecondary>New Request</ButtonStyledSecondary></Grid>
						  <Grid item><ButtonStyledAction>Upload Log</ButtonStyledAction></Grid>
						  <Grid item><ButtonStyledGreen>Job Status</ButtonStyledGreen></Grid>
						  <Grid item><ButtonStyled>Export  <IconFileArrowRight size="18" style={{ marginLeft: '5px' }} /></ButtonStyled></Grid>
						  <Grid item>
						  <TextField className="missed-search" id="" placeholder='Search.....' InputProps={{startAdornment: (<InputAdornment position="start"><IconSearch  size="18" fontWeight={600} /></InputAdornment>),}}/>
						  </Grid>
						</Grid>
						<InvoiceTable />
					</DashboardCard>
				</Grid>
            </Grid>
        </PageContainer>
    )
}

export default MissedInvoicing;