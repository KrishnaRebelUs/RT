import React from "react";
import {styled, Grid, Button, Typography,Box} from "@mui/material";
import { useTheme } from "@emotion/react";
import PageContainer from "../../components/container/PageContainer";
import Breadcrumb from "../components/pages/Breadcrumb";
import Header from "../components/pages/Header";
import DashboardCard from '../../components/shared/DashboardCard';
import YearlyTrend from "./components/YearlyTrend";
import Disputed from "./components/Disputed";
import RecoupedAmount from "./components/RecoupedAmount";
import Export from "../components/pages/Export";
import NumberData from "../components/pages/NumberData";
import { Style } from "@mui/icons-material";


const MissedInvoicing = () => {
	const theme = useTheme();

	const data = [
		{ 
		  body: "Hour Saved", 
		  number: "18 h", 
		  icon: "IconClock", 
		  avatarBackgroundColor: theme.palette.success.extrDark, 
		  numberColor: theme.palette.success.extrDark,
		  avatarWidth: '35px',
		  avatarHeight: '35px',
		  listTitleSize: '18px'
		},
		{ 
		  body: "Resources Saved", 
		  number: "496", 
		  icon: "IconBriefcase", 
		  avatarBackgroundColor: theme.palette.accent.main, 
		  numberColor: theme.palette.success.extrDark,
		  avatarWidth: '35px',
		  avatarHeight: '35px',
		  listTitleSize: '18px'
		},
	  ];
	  const NewData = [
		{ 
		  body: "Hour Saved", 
		  number: "18 h", 
		  icon: "IconClock", 
		  avatarBackgroundColor: theme.palette.success.extrDark, 
		  numberColor: theme.palette.success.extrDark,
		  avatarWidth: '35px',
		  avatarHeight: '35px',
		  listTitleSize: '18px'
		},
		{ 
		  body: "Resources Saved", 
		  number: "496", 
		  icon: "IconBriefcase", 
		  avatarBackgroundColor: theme.palette.accent.main, 
		  numberColor: theme.palette.success.extrDark,
		  avatarWidth: '35px',
		  avatarHeight: '35px',
		  listTitleSize: '18px'
		},
		{ 
			body: "Amount Saved To Audit", 
			number: "496", 
			icon: "IconCurrencyDolla", 
			avatarBackgroundColor: theme.palette.primary.light, 
			numberColor: theme.palette.success.extrDark,
			avatarWidth: '35px',
			avatarHeight: '35px',
			listTitleSize: '18px'
		  },
	  ];
	const TypographyStyled = styled(Typography)(({ theme }) => ({
		color: theme.palette.primary.main,
	}));
	const ButtonStyledGreen = styled(Button)(({ theme }) => ({
		color: theme.palette.primary.contrastText, 
		backgroundColor: theme.palette.success.extraDark, 
		border: '1px solid',
		borderColor: theme.palette.success.extraDark,
		
		'&:hover': {
			backgroundColor: theme.palette.success.light,
			color: theme.palette.success.extraDark,
			borderColor: theme.palette.success.extraDark
		  },
	}));
	const ButtonStyledAction = styled(Button)(({ theme }) => ({
		color: theme.palette.primary.contrastText, 
		backgroundColor:theme.palette.accent.main, 
		border: '1px solid',
		borderColor: theme.palette.accent.main,
		fontSize: '13px',
		padding: '5px 12px',
		fontWeight: '600',
		'&:hover': {
			backgroundColor: theme.palette.accent.light,
			color: theme.palette.accent.main,
		  },
	}));
	const ButtonStyledSecondary = styled(Button)(({ theme }) => ({
		color:theme.palette.primary.contrastText, 
		backgroundColor: theme.palette.secondary.main, 
		border: '1px solid',
		borderColor: theme.palette.secondary.main,
		fontSize: '13px',
		padding: '5px 12px',
		fontWeight: '600',
		'&:hover': {
			backgroundColor: theme.palette.secondary.light,
			color: theme.palette.secondary.main,
		  },
	}));


    return (
        <PageContainer title="Missed Invoicing">
			<Grid container spacing={3} mb={3}>
				<Grid item xs={12}>
					<Breadcrumb titles={['Missed Invoicing']} />
				</Grid>
				<Grid item xs={12}>
					<Header title='Missed Invoicing' />
				</Grid>
				<Grid item xs={12}>
					<Grid container spacing={2} alignItems='center'>
						<Grid item><ButtonStyledSecondary>New Request</ButtonStyledSecondary></Grid>
						<Grid item><ButtonStyledAction>Upload Log</ButtonStyledAction></Grid>
						<Grid item><ButtonStyledGreen>Job Status</ButtonStyledGreen></Grid>
					</Grid>
				</Grid>
            </Grid>
			<Grid container spacing={3} mb={3}>
				<Grid item xs={3}>
					<Box style={{ position: 'relative', height: '100%' }}>
						<DashboardCard>
							<Grid container spacing={3}>
								<Grid item>
									<Typography variant='h4' sx={{ color: theme.palette.primary.main }} marginBottom={3}>Shipped But Not Invoiced</Typography>
									<Typography variant='h6' mb={1} sx={{ color: theme.palette.accent.main }} >Finding Amount($)</Typography>
									<TypographyStyled variant='h2' sx={{ color: theme.palette.accent.main }}>${new Intl.NumberFormat().format(98442)}</TypographyStyled>
								</Grid>

							</Grid>
						</DashboardCard>
					</Box>
				</Grid>
				<Grid item xs={3}>
					<YearlyTrend />
				</Grid>
				<Grid item xs={3}>
					<Disputed />
				</Grid>
				<Grid item xs={3}>
					<RecoupedAmount />
				</Grid>
            </Grid>
			<Grid container spacing={3} mb={3}>
				<Grid item xs={8}>
		     		<Typography variant='h3'>Efficency Assesment</Typography>
				</Grid>
				<Grid item xs={4} textAlign='end'>
					<Export />
				</Grid>
				<Grid>
                   
				</Grid>
			</Grid>
			<Grid container spacing={3}>
				<Grid item xs={6}>
		     	<DashboardCard>
                    <Box mb={3}>
						 <Typography variant="h6" mb={1}>Scope for additional Invoice($):</Typography>
						 <Typography variant="h6" mb={1}>PO Lined Scanned:</Typography>
						 <Typography variant="h6" mb={1}>Total Invoice Lines Scope Identified:</Typography>
						 <Typography variant="h6" mb={1}>PO Period Audited: 07/04/24 to 08/05/24</Typography>
					</Box>
					<Box>
						<Typography variant='h4' marginBottom={3}> Efforts to Audit</Typography>
						<NumberData data= {data} />
					</Box>
				</DashboardCard>
				</Grid>
				<Grid item xs={6}>
				    <DashboardCard>
						<Box mb={3}>
							<Typography variant="h6" mb={1}>Claim Submitted($):</Typography>
							<Typography variant="h6" mb={1}>PO Lined Submitted:</Typography>
							<Typography variant="h6" mb={1}>Invoice Lines Submitted:</Typography>
							<Typography variant="h6" mb={1}>PO Period Submitted: 07/04/24 to 08/05/24</Typography>
						</Box>
						<Box>
							<Typography variant='h4' marginBottom={3}> Efforts to Submit Invoicing</Typography>
							<NumberData data= {NewData} />
					    </Box>
				    </DashboardCard>
				</Grid>

			</Grid>
        </PageContainer>
    )
}

export default MissedInvoicing;