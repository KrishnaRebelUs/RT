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

const ChargesBackTable = () => {
    const theme = useTheme(); 
    const products = [
        {
            Subtype: "Incorrect Freight",
			TotalDeduction: "362356.00",
            TotalDisputed: "34250.10",
            DisputeApproved: "30230.46",
			DisputeDenied: '52%',
			PendingDisputed:'520',
            color: theme.palette.success.dark
        },
        {
            Subtype: "Incorrect Code",
            TotalDeduction: "50000.00",
            TotalDisputed: "36000.00",
            DisputeApproved: "23852.90",
			DisputeDenied: '38%',
			PendingDisputed:'850',
            color: theme.palette.accent.main
        },
        {
            Subtype: "Incorrect Agreement",
			TotalDeduction: "30323.25",
            TotalDisputed: "29230.20",
            DisputeApproved: "26450.80",
			DisputeDenied: '42%',
			PendingDisputed:'3210',
            color: theme.palette.primary.main
        },
        {
            Subtype: "Duplicate Agreement",
			TotalDeduction: "28687.78",
            TotalDisputed: "25148.30",
            DisputeApproved: "25468.00",
			DisputeDenied: '38%',
			PendingDisputed:'980',
            color: theme.palette.warning.main
        }
    ];
    return (
        <DashboardCard>
            <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>
                <Table aria-label="simple table" sx={{ whiteSpace: "wrap" }}>
                    <TableHeadStyled theme={theme}>
                        <TableRow>
                            <TableTypography variant="subtitle2" fontWeight={600}>Chargeback Issue Type</TableTypography>
                            <TableTypography variant="subtitle2" fontWeight={600}>Total Deduction ($)</TableTypography>
                            <TableTypography variant="subtitle2" fontWeight={600}>Total Disputed ($)</TableTypography>
                            <TableTypography variant="subtitle2" fontWeight={600}>Dispute Approved ($)</TableTypography>
							<TableTypography variant="subtitle2" fontWeight={600}>Dispute Denied ($)</TableTypography>
                            <TableTypography variant="subtitle2" fontWeight={600}>Pending Disputed Line Items($)</TableTypography>
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
                                       ${new Intl.NumberFormat('en-US', { minimumFractionDigits: 2 }).format(product.TotalDeduction)}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="tableData">
                                    ${new Intl.NumberFormat('en-US', { minimumFractionDigits: 2 }).format(product.TotalDisputed)}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="tableData">
                                    ${new Intl.NumberFormat('en-US', { minimumFractionDigits: 2 }).format(product. DisputeApproved)}
                                       
                                    </Typography>
                                </TableCell>
								<TableCell>
                                    <Typography variant="tableData">
									   {product. DisputeDenied}
                                    </Typography>
                                </TableCell>
								<TableCell>
                                    <Typography variant="tableData">
							            {product. PendingDisputed}       
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

export default ChargesBackTable;
