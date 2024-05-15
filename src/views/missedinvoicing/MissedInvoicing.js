import React from "react";
import {styled, Grid, Button, Typography,Box,Stack, Divider} from "@mui/material";
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

	const BaseButtonStyled = styled(Button)(({ theme }) => ({
		color: theme.palette.primary.contrastText,
		fontSize: '13px',
		padding: '5px 12px',
		fontWeight: '600',
		border: '1px solid',
		'&:hover': {
		  opacity: '0.8',
		},
	  }));
	  
	const ButtonStyledGreen = styled(BaseButtonStyled)(({ theme }) => ({
	backgroundColor: theme.palette.success.extraDark,
	borderColor: theme.palette.success.extraDark,
	'&:hover': {
		backgroundColor: theme.palette.success.light,
		color: theme.palette.success.extraDark,
		borderColor: theme.palette.success.extraDark,
	},
	}));
	  
	const ButtonStyledAction = styled(BaseButtonStyled)(({ theme }) => ({
	backgroundColor: theme.palette.accent.main,
	borderColor: theme.palette.accent.main,
	'&:hover': {
		backgroundColor: theme.palette.accent.light,
		color: theme.palette.accent.main,
	},
	}));
	  
	const ButtonStyledSecondary = styled(BaseButtonStyled)(({ theme }) => ({
	backgroundColor: theme.palette.secondary.main,
	borderColor: theme.palette.secondary.main,
	'&:hover': {
		backgroundColor: theme.palette.secondary.light,
		color: theme.palette.secondary.main,
	},
	}));
	  


    return (
        <PageContainer title="Missed Invoicing">
			<Grid container spacing={3} mb={4}>
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
			<Grid container spacing={3} mb={4}>
				<Grid item xs={3}>
					<Box style={{ position: 'relative', height: '100%' }}>
						<DashboardCard>
							<Grid container spacing={3}>
								<Grid item>
									<Typography variant='h5' sx={{ color: theme.palette.primary.main }} marginBottom={3}>Shipped But Not Invoiced</Typography>
									<Typography variant='h6' mb={1} sx={{ color: theme.palette.accent.main }} >Finding Amount($)</Typography>
									<TypographyStyled variant='h3' sx={{ color: theme.palette.accent.main }}>${new Intl.NumberFormat().format(98442)}</TypographyStyled>
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
                    <Grid container spacing={2}>
						<Grid item xs={12} mb={1}>
					     	 <Typography variant="h3" mb={1} sx={{ color: theme.palette.primary.main }} >Scope for Additional Invoice($)</Typography>
							 <TypographyStyled variant='h3' sx={{color: theme.palette.text.main}}>${new Intl.NumberFormat().format(98442)}</TypographyStyled>
						</Grid>
						<Grid item xs={5}  mb={1}>
						     <Typography variant="h6" mb={1} sx={{ color: theme.palette.accent.main }} >PO Lined Scanned</Typography>
							 <TypographyStyled variant='h3' sx={{color: theme.palette.text.main}}>${new Intl.NumberFormat().format(98442)}</TypographyStyled>
						</Grid>
						<Grid item xs={7}  mb={1}>
					     	 <Typography variant="h6" mb={1} sx={{ color: theme.palette.success.dark }} >Total Invoice Lines Scope Identified</Typography>
							 <TypographyStyled variant='h3' sx={{color: theme.palette.text.main}}>${new Intl.NumberFormat().format(98442)}</TypographyStyled>
					 	</Grid>
						 <Grid item xs={12}>
					    	  <Divider />
						    </Grid>
						 <Grid item xs={12} mb={2}>
					     	 <Stack direction='row' spacing={3} justifyContent='space-between'>
							   <Typography variant="h6" mb={1} sx={{color: theme.palette.success.extraDark}} >PO Period Audited</Typography>
							   <TypographyStyled variant='h6' sx={{color: theme.palette.text.main}}>07/04/24 <span style={{marginRight:'5px', marginLeft:'5px'}}>to</span> 08/05/24</TypographyStyled>
							 </Stack>
						</Grid>
						 
					</Grid>
					<Box  mb={2}>
					    <Divider />
					</Box>
					<Box>
						<Typography variant='h4' marginBottom={3}> Efforts to Audit</Typography>
						<NumberData data= {data} />
					</Box>
				</DashboardCard>
				</Grid>
				<Grid item xs={6}>
				    <DashboardCard>
						<Grid container spacing={2}>
							<Grid item xs={12} mb={1}>
								<Typography variant="h3" mb={1} sx={{ color: theme.palette.primary.light }} >Claim Submitted($)</Typography>
								<Typography variant='h3' sx={{color: theme.palette.text.main}}>${new Intl.NumberFormat().format(4942234.43)}</Typography>
							</Grid>
							<Grid item xs={6} mb={1}>
								<Typography variant="h6" mb={1} sx={{ color: theme.palette.accent.main }} >PO Lined Submitted</Typography>
								<TypographyStyled variant='h3' sx={{color: theme.palette.text.main}}>${new Intl.NumberFormat().format(98442)}</TypographyStyled>
							</Grid>
							<Grid item xs={6} mb={1}>
								<Typography variant="h6" mb={1} sx={{ color: theme.palette.success.dark }} >Invoice Lines Submitted</Typography>
								<TypographyStyled variant='h3' sx={{color: theme.palette.text.main}}>${new Intl.NumberFormat().format(98442)}</TypographyStyled>
							</Grid>
						 	<Grid item xs={12}>
					    	  <Divider />
						    </Grid>
							<Grid item xs={12} mb={2}>
								<Stack direction='row' spacing={3} justifyContent='space-between'>
								<Typography variant="h4" mb={1} sx={{color: theme.palette.success.extraDark}} >PO Period Submitted</Typography>
								<TypographyStyled variant='h6' sx={{color: theme.palette.text.main}}>07/04/24 <span style={{marginRight:'5px', marginLeft:'5px'}}>to</span> 08/05/24</TypographyStyled>
								</Stack>
							</Grid>
							
						</Grid>
						<Box  mb={2}>
					    	<Divider />
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