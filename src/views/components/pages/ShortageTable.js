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
    backgroundColor: theme.palette.primary.main,
    borderRadius:'7px',
   
}));
const TableTypography = styled(TableHead)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    fontSize: '16px'
}));
const TableRowStyled = styled(TableRow)(({ theme, index }) => ({
    borderBottom: '1px solid #eee',
    backgroundColor: index % 2 === 0 ? theme.palette.secondary.contrastText : theme.palette.primary.extraLight
}));

const shortagetble = [
    {
       Settlement: "Shortage Claim Finding",
       Active:"362,356.00",
       Archieved: "362,356.00",
    
    },
    {
        Settlement: "Audit Period",
        Active:"11/4/24",
        Archieved: "11/4/24",
     
     },
     {
        Settlement: "Shortage Claim Finding",
        Active:"362,356.00",
        Archieved: "362,356.00",
     
     },
     {
         Settlement: "Audit Period",
         Active:"11/4/24",
         Archieved: "11/4/24",
      
      },
      {
        Settlement: "Shortage Claim Finding",
        Active:"362,356.00",
        Archieved: "362,356.00",
     
     },
     {
         Settlement: "Audit Period",
         Active:"11/4/24",
         Archieved: "11/4/24",
      
      },
      {
        Settlement: "Shortage Claim Finding",
        Active:"362,356.00",
        Archieved: "362,356.00",
     
     },
     {
         Settlement: "Audit Period",
         Active:"11/4/24",
         Archieved: "11/4/24",
      
      },
 
];

const ShortageTable = () => {
    const theme = useTheme(); 
    return (
        <DashboardCard  title={  <Typography variant='h5' > Shortage Claim Reconciliation </Typography>}>
            <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>
                <Table aria-label="simple table" sx={{ whiteSpace: "nowrap"}}>
                    <TableHeadStyled theme={theme}>
                        <TableRow>
                            <TableCell>
                                <TableTypography variant="subtitle2" fontWeight={600}>
                                 
                                </TableTypography>
                            </TableCell>
                            <TableCell>
                                <TableTypography variant="subtitle2" fontWeight={600}>
                                   Activity Cases($)
                                </TableTypography>
                            </TableCell>
                            <TableCell>
                                <TableTypography variant="subtitle2" fontWeight={600}>
                                  Archieved
                                </TableTypography>
                            </TableCell>
                           
                        </TableRow>
                    </TableHeadStyled>
                    <TableBody>
                        {shortagetble.map((shortagetble, index) => (
                            <TableRowStyled theme={theme} key={index} index={index}>
                                <TableCell>
                                    <Typography
                                        sx={{
                                            fontSize: "15px",
                                            fontWeight: "500",
                                        }}
                                    >
                                        {shortagetble.Settlement}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="subtitle2" fontWeight={600}>
                                        {shortagetble.Active}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="subtitle2" fontWeight={400}>
                                        {shortagetble.Archieved}
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

export default ShortageTable;
