import React from "react";
import { Box, styled, Typography, Avatar, Grid, Divider,  } from "@mui/material";
import { useTheme } from "@emotion/react";
import { IconH1 } from "@tabler/icons-react";
import PageContainer from "../../components/container/PageContainer";
import Breadcrumb from "../components/pages/Breadcrumb";
import Header from "../components/pages/Header";

const PriceClaim = () => {

    const TypographyTitle = styled(Typography)(({ theme }) => ({
		color: theme.palette.text.dark,
		marginBottom: '15px',
	}));

    return (
        <PageContainer title="Shortage Claim">
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Breadcrumb titles={['Price Claim']} />
				</Grid>
				<Grid item xs={12}>
					<Header title='Shortage' />
				</Grid>
				<Grid item xs={12}>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TypographyTitle variant='h3'>Price Claim Dispute</TypographyTitle>
						</Grid>
                    </Grid>
                </Grid>
            </Grid>
        </PageContainer>
    )
}

export default PriceClaim;