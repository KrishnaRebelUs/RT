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


const TypographyStyled = styled(Typography)({});

const TableHeadStyled = styled(TableHead)(({ theme }) => ({
    backgroundColor: theme.palette.primary.extraLight
}));
const TableTypography = styled(TableHead)(({ theme }) => ({
    color: theme.palette.primary.main,
    fontWeight: '600',
    fontSize: '16px'
}));
const TableCellStyled = styled(TableCell)(({ theme, index }) => ({
    color: index % 2 === 0 ? theme.palette.secondary.main : theme.palette.accent.main,
}));

const products = [
    {
        Subtype: "Duplicate Freight",
        Findings$: "362,356.00",
        PriorAdjustments$: "362,356.00",
        NetOff: "3.9",
    },
    {
        Subtype: "Duplicate",
        Findings$: "362,356.00",
        PriorAdjustments$: "362,356.00",
        NetOff: "3.9",
    },
    {
        Subtype: "Duplicate odd",
        Findings$: "362,356.00",
        PriorAdjustments$: "362,356.00",
        NetOff: "3.9",
    }
];

const GranularAnalysis = () => {
    const theme = useTheme(); 
    return (
        <DashboardCard title={
            <TypographyStyled variant='h4' sx={{ color: theme.palette.text.dark }}>
                Granular Analysis
            </TypographyStyled>}>
            <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>
                <Table aria-label="simple table" sx={{ whiteSpace: "nowrap" }}>
                    <TableHeadStyled theme={theme}>
                        <TableRow>
                            <TableCell>
                                <TableTypography variant="subtitle2" fontWeight={600}>
                                    Sub-type
                                </TableTypography>
                            </TableCell>
                            <TableCell>
                                <TableTypography variant="subtitle2" fontWeight={600}>
                                    Findings $
                                </TableTypography>
                            </TableCell>
                            <TableCell>
                                <TableTypography variant="subtitle2" fontWeight={600}>
                                    Prior Adjustments $
                                </TableTypography>
                            </TableCell>
                            <TableCell>
                                <TableTypography variant="subtitle2" fontWeight={600}>
                                    Net Off
                                </TableTypography>
                            </TableCell>
                        </TableRow>
                    </TableHeadStyled>
                    <TableBody>
                        {products.map((product, index) => (
                            <TableRow key={index}>
                                   <TableCellStyled index={index}>
                                    <Typography variant="h6">
                                        {product.Subtype}
                                    </Typography>
                                </TableCellStyled>
                                <TableCell>
                                    <Typography variant="h6">
                                        {product.Findings$}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="h6">
                                        {product.PriorAdjustments$}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="h6">
                                        {product.NetOff}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
        </DashboardCard>
    );
};

export default GranularAnalysis;
