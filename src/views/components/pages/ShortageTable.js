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
    borderRadius: '7px',
}));

const TableTypography = styled(TableHead)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    fontSize: '16px'
}));

const TableCellStyled = styled(TableCell)(({ theme, index }) => ({
    color: theme.palette.secondary.main
}));

const ShortageTable = () => {
    const theme = useTheme();
    const formatNumber = (number) => new Intl.NumberFormat().format(number);
    const shortagetble = [
        {
           Settlement: "Shortage Claim Finding",
           Active: "$ 36,230.20",
           Archieved: "$ 36,230.20",
           color: theme.palette.accent.main
        
        },
        {
            Settlement: " Start Audit Period",
            Active: "11/24/23",
            Archieved: "9/04/22",
            
         
         },
         {
            Settlement: "End Audit Period",
            Active:"11/24/23",
            Archieved: "11/24/23",
            color: theme.palette.error.dark
            
         
         },
         {
            Settlement: "Case ID and Creation Date",
            Active: ['1423658', '11/24/23'],
            Archieved: ['1423658', '11/24/23'],
         
         },
         {
            Settlement: "Open Balance",
            Active:"$ 36,230.20",
            Archieved: "$ 36,230.20",
            color: theme.palette.accent.main
         },
        
          {
            Settlement: "Confirmation Date",
            Active:"06/16/23",
            Archieved: "09/09/23",
         
         },
         {
             Settlement: "Settlement Offer",
             Active: ['$ 36,230.20', '08/04/23'],
             Archieved: ['$ 36,230.20', '08/04/23'],
          
          },
          {
            Settlement: "Counter Offer",
            Active: ['$ 36,230.20', '08/04/23'],
            Archieved: ['$ 36,230.20', '08/04/23'],
         
         },
         {
            Settlement: "Accepted Offer",
            Active: ['$ 36,230.20', '08/04/23'],
            Archieved: ['$ 36,230.20', '08/04/23'],
         
         },
          {
            
            Settlement: "Settlement Amount",
            Active:"$ 36,230.20",
            Archieved: "$ 36,230.20",
            color:theme.palette.success.main
         
         },
     
    ];

    return (
        <DashboardCard title={<Typography variant='h4'> Shortage Claim Finding </Typography>}>
            <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>
                <Table aria-label="simple table" sx={{ whiteSpace: "nowrap", mt: 2 }}>
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
                                    Archived
                                </TableTypography>
                            </TableCell>
                        </TableRow>
                    </TableHeadStyled>
                    <TableBody>
                        {shortagetble.map((data, index) => (
                            <TableRow theme={theme} key={index}>
                                <TableCellStyled index={index}>
                                   
                                        <Typography
                                            sx={{
                                                fontSize: "15px",
                                                fontWeight: "500",
                                            }}
                                        >
                                            {data.Settlement}
                                        </Typography>

                                </TableCellStyled>
                                <TableCell>
                                    <Typography variant="subtitle2" fontWeight={600} style={{ color: data.color }}>
                                       {/* {
                                        data.Active.map((d,i)=>{
                                           
                                        })
                                       } */}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                          <Typography key={index} variant="subtitle2" fontWeight={600} style={{ color: data.color }}>
                                                {typeof data.Archieved === 'number' ? formatNumber(data.Archieved) : data.Archieved}
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

export default ShortageTable;
