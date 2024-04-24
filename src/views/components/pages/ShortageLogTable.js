import React from 'react';
import {
    Typography,
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    styled,
    useTheme,
	Grid,Button, Stack
} from '@mui/material';
import DashboardCard from '../../../components/shared/DashboardCard';
import { IconArrowNarrowUp } from '@tabler/icons-react';


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
    backgroundColor: theme.palette.primary.light,
    border: '1px solid currentColor',
    color: theme.palette.primary.contrastText,
    fontSize: '16px',
    padding: '4px 10px',
    '&:hover': {
        backgroundColor: theme.palette.primary.contrastText,
        color: theme.palette.primary.dark,
    },
}));

const ShortageLogTable = () => {
    const theme = useTheme();
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
        <DashboardCard title="Itemized Shortage Dipute Log">
            <Box>
				<Grid container spacing={2}>
					{/* <Grid item xs="4">
					
					</Grid> */}
					<Grid item xs="2">
					   <Stack direction='row' spacing={2}>
					      <ButtonStyled>Resete</ButtonStyled>
					      <ButtonStyled>Export <IconArrowNarrowUp  size="30" /></ButtonStyled>
					   </Stack>
					</Grid>
					
				</Grid>
                <TableContainer>
                    <Table aria-label="simple table" sx={{ whiteSpace: "nowrap", mt: 2 }}>
                        <TableHeadStyled>
                            <TableRow>
                                <TableCellStyled>  Vendor Name</TableCellStyled>
                                <TableCellStyled>Created Date</TableCellStyled>
                                <TableCellStyled> Disputed</TableCellStyled>
                                <TableCellStyled>Not Dispute </TableCellStyled>
                                <TableCellStyled>Total</TableCellStyled>
                            </TableRow>
                        </TableHeadStyled>
                        <TableBody>
                            {ShortageDisputeTable.map((dispute, index) => (
                                <TableRowStyled theme={theme} index={index} key={index}>
                                    <TableCell>
									{dispute.VendorName}
                                    </TableCell>
                                    <TableCell>
									    {dispute.CreatedDate}
                                    </TableCell>
                                    <TableCell>
								     	{dispute.Disputed}
                                    </TableCell>
                                    <TableCell>
								    	{dispute.NotDisputed}
                                    </TableCell>
                                    <TableCell>
									   {dispute.Total}
                                    </TableCell>
                                </TableRowStyled>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </DashboardCard>
    );
};

export default ShortageLogTable;
