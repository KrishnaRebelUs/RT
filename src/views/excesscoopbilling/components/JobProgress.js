import React from 'react';
import {
    Typography, Box,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow, styled, useTheme, Button, LinearProgress
} from '@mui/material';
import DashboardCard from '../../../components/shared/DashboardCard';
import { IconFileArrowRight } from '@tabler/icons-react';
import moment from 'moment';

const job = [
    {
        Vendor: 'Au-Califal',
        Date: '11/04/24',
        Type: 'Quantity Mismatch',
        Id: '88799979',
        Task: 'Pulling Po Invoice Data(3/3)',
        Progress: 65
    },
    {
        Vendor: 'Au-Califal',
        Date: '11/04/24',
        Type: 'Quantity Mismatch',
        Id: '88799979',
        Task: 'Pulling Po Invoice Data(3/3)',
        Progress: 45
    },
    {
        Vendor: 'Au-Califal',
        Date: '11/04/24',
        Type: 'Quantity Mismatch',
        Id: '88799979',
        Task: 'Pulling Po Invoice Data(3/3)',
        Progress: 75
    },
    {
        Vendor: 'Au-Califal',
        Date: '11/04/24',
        Type: 'Quantity Mismatch',
        Id: '88799979',
        Task: 'Pulling Po Invoice Data(3/3)',
        Progress: 35
    },
    {
        Vendor: 'Au-Califal',
        Date: '11/04/24',
        Type: 'Quantity Mismatch',
        Id: '88799979',
        Task: 'Pulling Po Invoice Data(3/3)',
        Progress: 4
    },
];
const TableHeadStyled = styled(TableHead)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    borderRadius: '7px',
}));

const TableTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    fontSize: '14px',
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

const JobProgress = () => {
    const theme = useTheme();

    return (
        <DashboardCard title={
            <Typography variant='h5'>Jobs in Progress</Typography>
        } action={
            <ButtonStyled>Export  <IconFileArrowRight size="18" style={{ marginLeft: '5px' }} /></ButtonStyled>
        }>
            <Box>
                <Table aria-label="simple table" sx={{ whiteSpace: "nowrap", mt: 3 }}>
                    <TableHeadStyled theme={theme}>
                        <TableRow>
                            <TableCell style={{ width: '150px' }}>
                                <TableTypography variant="subtitle2" fontWeight={600}>
                                    Vendor Name
                                </TableTypography>
                            </TableCell>
                            <TableCell style={{ width: '100px' }}>
                                <TableTypography variant="subtitle2" fontWeight={600}>
                                    Date
                                </TableTypography>
                            </TableCell>
                            <TableCell style={{ width: '150px' }}>
                                <TableTypography variant="subtitle2" fontWeight={600}>
                                    Type
                                </TableTypography>
                            </TableCell>
                            <TableCell width="50">
                                <TableTypography variant="subtitle2" fontWeight={600}>
                                    Agreement Id / Disputed Id
                                </TableTypography>
                            </TableCell>
                            <TableCell style={{ width: '200px' }}>
                                <TableTypography variant="subtitle2" fontWeight={600}>
                                    Pending Task
                                </TableTypography>
                            </TableCell>
                            <TableCell>
                                <TableTypography variant="subtitle2" fontWeight={600}>
                                    Progress
                                </TableTypography>
                            </TableCell>
                        </TableRow>
                    </TableHeadStyled>
                    <TableBody>
                        {job.map((job, index) => (
                            <TableRow key={index} sx={{ color: theme.palette.text.primary }}>
                                <TableCell>
                                    <Typography
                                        sx={{
                                            fontSize: "14px",
                                            fontWeight: "600",
                                        }}
                                    >
                                        {job.Vendor}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography  sx={{
                                            fontSize: "14px",
                                            fontWeight: "600",
                                        }} variant="subtitle2" fontWeight={500}>
                                        {moment(job.Date).format('MM/DD/YY')}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography  sx={{
                                            fontSize: "14px",
                                            fontWeight: "600",
                                            color: theme.palette.accent.main
                                        }} variant="subtitle2" fontWeight={500}>
                                        {job.Type}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography  sx={{
                                            fontSize: "14px",
                                            fontWeight: "600",
                                        }} variant="subtitle2" fontWeight={500}>
                                        {job.Id}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography sx={{
                                            fontSize: "14px",
                                            fontWeight: "600",
                                        }} variant="subtitle2" fontWeight={500}>
                                        {job.Task}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Box display="flex" alignItems="center">
                                        <LinearProgress color="success" variant="determinate" value={job.Progress} sx={{ height: '6px', flexGrow: 1, borderRadius: 10, mr: 1, backgroundColor: theme.palette.primary.extraLight }} />
                                        <Typography variant="h6">{job.Progress}%</Typography>
                                    </Box>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
        </DashboardCard>
    );
};

export default JobProgress;
