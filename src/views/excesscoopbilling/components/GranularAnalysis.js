import React from 'react';
import {
    Typography, Box,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow, styled, useTheme
} from '@mui/material';
import DashboardCard from '../../../components/shared/DashboardCard';

const TableHeadStyled = styled(TableHead)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main
}));
const TableTypography = styled(TableCell)(({ theme }) => ({
    color: 'white',
    fontWeight: '600',
    fontSize: '12px'
}));
const TableRowStyled = styled(TableRow)(({ theme, index }) => ({
    borderBottom: '1px solid #eee',
    backgroundColor: index % 2 === 0 ? theme.palette.secondary.contrastText : theme.palette.primary.extraLight
}));

const GranularAnalysis = () => {
    const theme = useTheme(); 
    const products = [
        {
            Subtype: "Duplicate Freight",
            Findings$: "362356.00",
            PriorAdjustments$: "362356.00",
            NetOff: "3.9",
            color: theme.palette.success.dark
        },
        {
            Subtype: "Non-compliant Freight",
            Findings$: "362356.00",
            PriorAdjustments$: "362356.00",
            NetOff: "3.9",
            color: theme.palette.accent.main
        },
        {
            Subtype: "Miscellaneous",
            Findings$: "362356.00",
            PriorAdjustments$: "362356.00",
            NetOff: "3.9",
            color: theme.palette.primary.main
        },
        {
            Subtype: "Duplicate Billing",
            Findings$: "362356.00",
            PriorAdjustments$: "362356.00",
            NetOff: "3.9",
            color: theme.palette.warning.main
        }
    ];
    return (
        <DashboardCard title={
            <Typography variant='h5' sx={{ color: theme.palette.text.dark }}>Granular Analysis</Typography>}>
            <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>
                <Table aria-label="simple table" sx={{ whiteSpace: "nowrap" }}>
                    <TableHeadStyled theme={theme}>
                        <TableRow>
                            <TableTypography variant="subtitle2" fontWeight={600}>Sub-type</TableTypography>
                            <TableTypography variant="subtitle2" fontWeight={600}>Findings $</TableTypography>
                            <TableTypography variant="subtitle2" fontWeight={600}>Prior Adjustments $</TableTypography>
                            <TableTypography variant="subtitle2" fontWeight={600}>Net Off</TableTypography>
                        </TableRow>
                    </TableHeadStyled>
                    <TableBody>
                        {products.map((product, index) => (
                            <TableRowStyled key={index} index={index} theme={theme}>
                                <TableCell index={index} style={{ color: product.color}}>
                                    <Typography style={{ fontSize: '12px', fontWeight: '500' }} variant="tableData">
                                        {product.Subtype}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="tableData">
                                        ${new Intl.NumberFormat().format(product.Findings$)}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="tableData">
                                    ${new Intl.NumberFormat().format(product.PriorAdjustments$)}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="tableData">
                                        {product.NetOff}
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

export default GranularAnalysis;
