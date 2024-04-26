import React from 'react';
import {
    Typography,
    Box,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    styled,
    useTheme,
	Grid,Button, Stack
} from '@mui/material';
import DashboardCard from '../../../components/shared/DashboardCard';
import { IconFileArrowRight } from '@tabler/icons-react';
import Search from './Search';
import DataTable from 'react-data-table-component';
import '../../../theme/TableStyle.css'

const TableHeadStyled = styled(TableHead)(({ theme }) => ({
    backgroundColor: theme.palette.primary.light,
    borderRadius: '7px',
}));

const TableCellStyled = styled(TableCell)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
}));

const TableRowStyled = styled(TableRow)(({ theme, index }) => ({
    borderBottom: '1px solid #eee',
    backgroundColor: index % 2 === 0 ? theme.palette.secondary.contrastText : theme.palette.primary.extraLight,
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
const ShortageLogTable = () => {
    const theme = useTheme();

    const columns = [
        {
            name: 'Vendor Name',
            selector: row => row.VendorName,
            sortable: true,
        },
        {
            name: 'Created Date',
            selector: row => row.CreatedDate,
            sortable: true,
        },
        {
            name: 'Disputed',
            selector: row => row.Disputed,
            sortable: true,
        },
        {
            name: 'Not Disputed',
            selector: row => row.NotDisputed,
            sortable: true,
        },
        {
            name: 'Total',
            selector: row => row.Total,
            sortable: true,
        },
    ];

    const ShortageDisputeTable = [
        {
            VendorName: 'CA - Chefman – Canada',
            CreatedDate: '01/09/24',
            Disputed: '0',
            NotDisputed: '10',
            Total: '0'
        },
        {
            VendorName: 'CA - Chefman – Canada',
            CreatedDate: '01/09/24',
            Disputed: '0',
            NotDisputed: '10',
            Total: '0'
        },
        {
            VendorName: 'CA - Chefman – Canada',
            CreatedDate: '01/09/24',
            Disputed: '0',
            NotDisputed: '10',
            Total: '0'
        },
        {
            VendorName: 'CA - Chefman – Canada',
            CreatedDate: '01/09/24',
            Disputed: '0',
            NotDisputed: '10',
            Total: '0'
        },
        {
            VendorName: 'CA - Chefman – Canada',
            CreatedDate: '01/09/24',
            Disputed: '0',
            NotDisputed: '10',
            Total: '0'
        },
    ];

    return (
        <DashboardCard  title={
            <Typography variant='h5' sx={{ color: theme.palette.text.dark }}>Itemized Shortage Dipute Log</Typography>}>
            <Box>
				<Grid container spacing={2} alignItems='center' marginBottom={3}>
					<Grid item xs="4">
					    <Search />
					</Grid>
					<Grid item xs="4">
					   <Stack direction='row' spacing={2}>
					      <ButtonStyled>Reset</ButtonStyled>
					      <ButtonStyled>Export  <IconFileArrowRight size="18" style={{ marginLeft: '5px' }} /></ButtonStyled>
					   </Stack>
					</Grid>
					
				</Grid>
                <TableContainer>
                   <DataTable
                        columns={columns}
                        data={ShortageDisputeTable}
                        pagination
                    />
                </TableContainer>
            </Box>
        </DashboardCard>
    );
};

export default ShortageLogTable;
