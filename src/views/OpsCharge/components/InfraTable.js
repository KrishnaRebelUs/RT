import React from 'react';
import {
    Typography, Box,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow, styled, useTheme, Grid
} from '@mui/material';
import DashboardCard from '../../../components/shared/DashboardCard';
import SelectQtr from '../../../layouts/full/header/SelectQtr';
import SelectMonth from '../../../layouts/full/header/SelectMonth';

const TableHeadStyled = styled(TableHead)(({ theme }) => ({
    backgroundColor: theme.palette.primary.extraLight
}));
const TableTypography = styled(TableCell)(({ theme }) => ({
    color: 'white',
    fontWeight: '600',
    fontSize: '12px',
    whiteSpace: 'nowrap'
}));
const TableRowStyled = styled(TableRow)(({ theme, index }) => ({
    borderBottom: '1px solid #eee',
    backgroundColor: index % 2 === 0 ? theme.palette.secondary.contrastText : theme.palette.primary.light
}));

const InfraTable = () => {
    const theme = useTheme(); 
    const products = [
        {
            Subtype: "Incorrect Freight",
			QTR1: "362356.00",
            QTR2: "34250.10",
            QTR3: "30230.46",
			QTR4: '52%',
            color: theme.palette.success.dark
        },
        {
            Subtype: "Incorrect Code",
			QTR1: "50000.00",
			QTR2: "36000.00",
			QTR3: "23852.90",
			QTR4: '38%',
            color: theme.palette.accent.main
        },
        {
            Subtype: "Incorrect Agreement",
			QTR1: "30323.25",
			QTR2: "29230.20",
			QTR3: "26450.80",
			QTR4: '42%',
            color: theme.palette.primary.main
        },
        {
            Subtype: "Duplicate Agreement",
			QTR1: "28687.78",
			QTR2: "25148.30",
			QTR3: "25468.00",
			QTR4: '38%',
            color: theme.palette.warning.main
        }
    ];
    return (
        <DashboardCard>
            <Grid container spacing={2}  mb={3} alignItems='center'>
                <Grid item xs={12} lg={6}>
					<Typography variant='h3'>Infraction Type</Typography>
				</Grid>
                <Grid item xs={12} lg={3}>
                    <SelectMonth />
                </Grid>
                <Grid item xs={12} lg={3}>
                    <SelectQtr />
                </Grid>

            </Grid>
            <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>
                <Table aria-label="simple table" sx={{ whiteSpace: "wrap" }}>
                    <TableHeadStyled theme={theme}>
                        <TableRow>
                            <TableTypography variant="subtitle2" fontWeight={600}>Chargeback Issue Type</TableTypography>
                            <TableTypography variant="subtitle2" fontWeight={600}>QTR 1</TableTypography>
                            <TableTypography variant="subtitle2" fontWeight={600}>QTR 2</TableTypography>
                            <TableTypography variant="subtitle2" fontWeight={600}>QTR 3</TableTypography>
							<TableTypography variant="subtitle2" fontWeight={600}>QTR 4</TableTypography>
                        </TableRow>
                    </TableHeadStyled>
                    <TableBody>
                        {products.map((product, index) => (
                            <TableRowStyled key={index} index={index} theme={theme}>
                                <TableCell index={index} style={{ color: product.color, width: '165px'}}>
                                    <Typography style={{ fontSize: '12px', fontWeight: '500' }} variant="tableData">
                                        {product.Subtype}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="tableData">
                                       ${new Intl.NumberFormat('en-US', { minimumFractionDigits: 2 }).format(product.QTR1)}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="tableData">
                                    ${new Intl.NumberFormat('en-US', { minimumFractionDigits: 2 }).format(product.QTR2)}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="tableData">
                                    ${new Intl.NumberFormat('en-US', { minimumFractionDigits: 2 }).format(product. QTR3
)}
                                       
                                    </Typography>
                                </TableCell>
								<TableCell>
                                    <Typography variant="tableData">
									   {product. QTR4}
                                    </Typography>
                                </TableCell>
                            </TableRowStyled>
                        ))}
                    </TableBody>
                </Table>
            </Box>
        </DashboardCard>
    );
};

export default InfraTable;
