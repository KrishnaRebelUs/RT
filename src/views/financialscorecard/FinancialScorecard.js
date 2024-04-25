import React from "react";
import { Box, styled, Typography, Avatar, Grid, Button   } from "@mui/material";
import { useTheme } from "@emotion/react";
import { IconH1 } from "@tabler/icons-react";
import { Link } from 'react-router-dom';
import PageContainer from "../../components/container/PageContainer";
import Breadcrumb from "../components/pages/Breadcrumb";
import Header from "../components/pages/Header";
import DashboardCard from '../../components/shared/DashboardCard';
import {IconChevronRight,IconThumbUp, IconExclamationCircle, IconThumbDown } from '@tabler/icons-react';
import BarChart from '../components/pages/Barchart';
import FinopsTable from '../components/pages/FinopsTable';
import RangeChart from "../components/pages/RangeChart";

const FinancialScorecard = () => {
	const theme = useTheme();

    const TypographyTitle = styled(Typography)(({ theme }) => ({
		color: theme.palette.text.dark,
		marginBottom: '15px',
	}));

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

	const ClaimCard = styled(Box)(({ theme }) => ({
		position: 'relative',
		minHeight: '200px',
		height: '100%'
	}));

    return (
        <PageContainer title="Financial Scorecard">
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Breadcrumb titles={['Financial Scorecard']} />
				</Grid>
				<Grid item xs={12}>
					<Header title='Financial Scorecard' />
				</Grid>
            </Grid>
        </PageContainer>
    )
}

export default FinancialScorecard;