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
import { Stack } from '@mui/system';

const products = [
    {
        Subtype: "Duplicate Freight",
        Document: "Aggrement Scanned",
		Number:"3256"
    },
    {
        Subtype: "Non-compliant Freight",
		Document: "Invoice Scanned",
		Number:"3256"
    },
    {
        Subtype: "Miscellaneous",
        Document: "Po's Scanned",
		Number:"3256"
    },
	{
        Subtype: "Duplicate Billing",
        Document: "Sum Identify",
		Number:"3256"
    }
];

const TableCellStyled = styled(TableCell)(({ theme }) => ({
    padding: '16px 16px 16px 0',
	borderBottom: '1px solid #eee',
}));

const TableHeadStyled = styled(TableHead)(({ theme }) => ({
    color: theme.palette.primary.main,
	fontWeight: 700,
	fontSize: '20px',
	padding: '16px 16px 16px 0',
	
}));

const EfficencyAssesment = () => {
    const theme = useTheme();

    return (
        <DashboardCard  title={
            <Typography variant='h5' sx={{ color: theme.palette.text.dark }}>
              Efficiency Assessment
            </Typography>}>
            <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>
                <Table
                    aria-label="simple table"
                    sx={{
                        whiteSpace: "nowrap",
                        mt: 2
                    }}
                >
                    <TableHeadStyled>
                        <TableRow>
                            <TableCellStyled>
                                <Typography variant="h6" fontWeight={700} sx={{color: theme.palette.accent.main}}>
								   Efficiency Assessment
                                </Typography>
                            </TableCellStyled>
                            <TableCellStyled>
                                <Typography variant="body1" fontWeight={600}>
								   1-Apr-2017 to 31-Oct-2021
                                </Typography>
                            </TableCellStyled>
                        </TableRow>
                    </TableHeadStyled>
                    <TableBody>
                        {products.map((product, index) => (
                            <TableRow key={index} sx={{ backgroundColor: index % 2 === 0 ? theme.palette.background.default : 'inherit' }}>
                                <TableCellStyled>
                                    <Typography
                                        sx={{
                                            fontSize: "15px",
                                            fontWeight: "700",
                                        }}
                                    >
                                        {product.Subtype}
                                    </Typography>
                                </TableCellStyled>
                                <TableCellStyled>
                                    <Box>
										<Stack direction='row' spacing={0} alignItems="center" justifyContent="space-between">
										    <Typography variant="subtitle2" fontWeight={600} sx={{ color: index % 2 === 0 ? theme.palette.primary.main : theme.palette.secondary.main }}>
                                                {product.Document}
                                            </Typography>
                                            <Typography
                                                color="textSecondary"
                                                sx={{
                                                    fontSize: "13px",
                                                }}
                                            >
                                                {product.Number}
                                            </Typography>
										</Stack>
                                        
                                    </Box>
                                </TableCellStyled>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
        </DashboardCard>
    );
};

export default EfficencyAssesment;
