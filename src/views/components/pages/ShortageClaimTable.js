import React from 'react';
import { styled, Typography, Box, useTheme, IconButton, Grid, Button, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material'; 
import DashboardCard from '../../../components/shared/DashboardCard';
import { IconFileArrowRight, IconFileArrowLeft } from '@tabler/icons-react';

const ButtonStyled = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.contrast,
    border: '1px solid',
    borderColor: theme.palette.primary.contrast,
    color: theme.palette.primary.contrastText,
    fontSize: '11px',
    padding: '0',
    fontWeight: '600',
    transition: 'all ease 0.3s',
    '&:hover': {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        borderColor: theme.palette.primary.main
    },
    '& .btn-indicator': {
        width: '1px',
        backgroundColor: theme.palette.primary.main,
        alignSelf: 'stretch',
        marginLeft: '4px'
    }
}));

const BoxStyled = styled(Box)(({ theme }) => ({
    padding: '3px 8px',
    fontWeight: '600',
}));

const TableCellStyled = styled(TableCell)(({ theme }) => ({
    fontSize: '12px',
    fontWeight: '600',
}));

const ShortageClaimTable = () => {
    const theme = useTheme();

    const formatNumber = (number) => new Intl.NumberFormat().format(number);

    const shortagetble = [
        {
            id: 1,
            Settlement: "Shortage Claim Finding",
            Active: ["$ 36,230.20"],
			Archived: ['$ 36,230.20'],	
            color: theme.palette.accent.main

        },
        {
            id: 2,
            Settlement: " Start Audit Period",
            Active: ["24/11/23"],
			Archived: ['04/09/22'],

        },
        {
            id: 3,
            Settlement: "End Audit Period",
            Active: ["24/11/23"],
			Archived: ["24/11/23"],
            color: theme.palette.error.main


        },
        {
            id: 4,
            Settlement: "Case ID & Creation Date",
            Active: ['1423658', '24/11/23'],
			Archived: ['1423658', '24/11/23'],

        },
        {
            id: 5,
            Settlement: "Open Balance & Confirmation Date",
            Active: ['$ 36,230.20', '16/06/23'],
			Archived: ['$ 06,230.20', '09/09/23'],
            color: theme.palette.accent.main
        },
        {
            id: 7,
            Settlement: "Settlement Offer",
            Active: ['$ 36,230.20', '04/08/23'],
			Archived: ['$ 06,230.20', '04/08/23'],
        },
        {
            id: 8,
            Settlement: "Counter Offer",
            Active: ['$ 36,230.20', '04/08/23'],
			Archived: ['$ 06,230.20', '04/08/23'],

        },
        {
            id: 9,
            Settlement: "Accepted Offer",
            Active: ['$ 36,230.20', '04/08/23'],
			Archived: ['$ 06,230.20', '04/08/23'],

        },
        {
            id: 10,
            Settlement: "Settlement Amount",
            Active: ["$ 36,230.20"],
			Archived: ['$ 36,230.20'],
            color: theme.palette.success.main

        },

    ];

    return (
        <DashboardCard title={<Typography variant='h4'>Shortage Claim Finding </Typography>}>
            <Table>
                <TableHead>
                    <TableRow style={{ backgroundColor: theme.palette.primary.light, }}>
                        <TableCell style={{ color: 'white', fontSize: '12px', fontWeight: '600' }}>Settlement</TableCell>
                        <TableCell style={{ color: 'white', fontSize: '12px', fontWeight: '600' }}>Active</TableCell>
                        <TableCell style={{ color: 'white', fontSize: '12px', fontWeight: '600' }}>Archived</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {shortagetble.map((row) => (
                        <TableRow key={row.id}>
                            <TableCellStyled>{row.Settlement}</TableCellStyled>
                            <TableCellStyled style={{ color: row.color }}>
                                {Array.isArray(row.Active) ? (
                                    <>
                                        {row.Active.map((item, index) => (
                                            <span key={index}>
                                                {index > 0 && <br />}
                                                {item}&nbsp;
                                            </span>
                                        ))}
                                    </>
                                ) : row.Active}
                            </TableCellStyled>
							<TableCellStyled style={{ color: row.color }}>
                                {Array.isArray(row.Active) ? (
                                    <>
                                        {row.Archived.map((item, index) => (
                                            <span key={index}>
                                                {index > 0 && <br />}
                                                {item}&nbsp;
                                            </span>
                                        ))}
                                    </>
                                ) : row.Active}
                            </TableCellStyled>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </DashboardCard>
    );
};

export default ShortageClaimTable;