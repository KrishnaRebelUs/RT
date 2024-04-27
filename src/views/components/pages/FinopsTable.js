import React, { useState } from 'react';
import { Box, Grid, Tab, Typography,Stack,  TableCell, TableHead, TableRow, useTheme,styled , Button} from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import DashboardCard from '../../../components/shared/DashboardCard';
import DataTable from 'react-data-table-component';
import {IconFileArrowRight} from '@tabler/icons-react';
import '../../../theme/TableStyle.css'
import moment from 'moment';

const TableHeadStyled = styled(TableHead)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main
}));
const TableTypography = styled(TableCell)(({ }) => ({
    color: 'white',
    fontWeight: '600',
    fontSize: '14px'
}));
const TableRowStyled = styled(TableRow)(({ theme, index }) => ({
    borderBottom: '1px solid #eee',
    backgroundColor: index % 2 === 0 ?  theme.palette.primary.extraLight : theme.palette.primary.contrastText,
}));

const TabStyled = styled(Tab)(({ theme}) => ({
    fontWeight: '600',
    fontSize: '16px',
    padding: 0
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

export const ExportCSVBTN = () => {

	return (
		<ButtonStyled variant="contained" color="primary">Export <Box style={{ display: 'flex', alignItems: 'center', marginLeft: '5px' }}><IconFileArrowRight width="20" /></Box></ButtonStyled>
	);
};

const FinopsTable = () => {
    const [value, setValue] = useState('1');
    const theme = useTheme();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const columns = [
        {
            name: 'DisputeID',
            selector: row => row.DisputeID,
            sortable: true,
            cell: (row, index, column, id) => {
                return (
                    <Box>
                        <Typography variant='body1' fontWeight='500' fontSize='14px' style={{ color: theme.palette.secondary.main }}>{row.DisputeID}</Typography>
                    </Box>
                );
            }
        },
        {
            name: 'DisputeType',
            selector: row => row.DisputeType,
            sortable: true,
            cell: (row, index, column, id) => {
                return (
                    <Box>
                        <Typography variant='body1' fontWeight='500' fontSize='14px' style={{ color: theme.palette.accent.main }}>{row.DisputeType}</Typography>
                    </Box>
                );
            }
        },
        {
            name: 'DisputeDate',
            selector: row => row.DisputeType,
            sortable: true,
            cell: (row, index, column, id) => {
                return (
                    <Box>
                        <Typography variant='body1' fontWeight='500' fontSize='14px' style={{ color: theme.palette.secondary.main }}>
                            {moment(row.DisputeDate).format('MM/DD/YY')}
                        </Typography>
                    </Box>
                );
            }
        },
        {
            name: 'DisputeStatus',
            selector: row => row.DisputeStatus,
            sortable: true,
            cell: (row, index, column, id) => {
                if (row.DisputeStatus === 'Resolved') {
                    return (
                        <Box>
                            <Typography variant='body1' fontWeight='500' fontSize='14px' style={{ color: theme.palette.success.main }}>{row.DisputeStatus}</Typography>
                        </Box>
                    );
                } else {
                    return (
                        <Box>
                            <Typography variant='body2' style={{ color: 'red' }}>{row.DisputeStatus}</Typography>
                        </Box>
                    );
                }
            }
        },
        {
            name: 'DisputeAmount',
            selector: row => row.DisputeAmount,
            sortable: true,
        },
        {
            name: 'ApprovedAmount (As Per Vc)',
            selector: row => row.ApprovedAmount,
            sortable: true,
        },
    ];
    
    const data = [
        {
            DisputeID: "DSPT10021849951",
            DisputeType: "Shortage",
            DisputeDate: "03/06/23",
            DisputeStatus: "Resolved",
            DisputeAmount: "$229.40",
            ApprovedAmount: "$143.64",
        },
        {
            DisputeID: "DSPT10021849489",
            DisputeType: "Shortage",
            DisputeDate: "04/08/23",
            DisputeStatus: "Resolved",
            DisputeAmount: "$329.40",
            ApprovedAmount: "$3,324.01",
        },
        {
            DisputeID: "DSPT10021849999",
            DisputeType: "Shortage",
            DisputeDate: "09/08/23",
            DisputeStatus: "Resolved",
            DisputeAmount: "$529.40",
            ApprovedAmount: "$173.64",
        },
        {
            DisputeID: "DSPT10021849852",
            DisputeType: "Shortage",
            DisputeDate: "05/06/23",
            DisputeStatus: "Pending Amazon Action",
            DisputeAmount: "$829.40",
            ApprovedAmount: "$173.64",
        },
        {
            DisputeID: "DSPT10021849202",
            DisputeType: "Shortage",
            DisputeDate: "03/08/23",
            DisputeStatus: "Resolved",
            DisputeAmount: "$229.40",
            ApprovedAmount: "$243.64",
        },
        {
            DisputeID: "DSPT10021849001",
            DisputeType: "Shortage",
            DisputeDate: "08/02/23",
            DisputeStatus: "Resolved",
            DisputeAmount: "$129.40",
            ApprovedAmount: "$1043.64",
        },
        {
            DisputeID: "DSPT12011504991",
            DisputeType: "Shortage",
            DisputeDate: "01/01/23",
            DisputeStatus: "Resolved",
            DisputeAmount: "$329.40",
            ApprovedAmount: "$183.64",
        },
        {
            DisputeID: "DSPT12011504991",
            DisputeType: "Shortage",
            DisputeDate: "03/06/23",
            DisputeStatus: "Resolved",
            DisputeAmount: "$ 429.40",
            ApprovedAmount: "$193.64",
        }
    ];

    return (
        <DashboardCard title={<Typography variant='h4'>FinOps-Shortage Claim</Typography>}>
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Box sx={{ width: '100%', typography: 'body1' }}>
                            <TabContext value={value} className="table-tabs">
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }} style={{display:'flex',justifyContent: "space-between", marginBottom:'20px', alignItems:'center', borderBottom:'0'}}>
                                    <TabList onChange={handleChange} indicatorColor="secondary" className='finops-tab' style={{overflow:'visible'}}>
                                        <TabStyled label="Approved" value="1"  style={{color:theme.palette.text.dark}}/>
                                        <TabStyled label="Denied" value="2" />
                                        <TabStyled label="Pending" value="3" />
                                        <TabStyled label="All" value="4" />
                                    </TabList>
                                   <Grid container spacing={2}  justifyContent='end' alignItems="center">
                                       <Grid item xs={5} style={{paddingTop:'0'}}>
                                           <Stack direction='row' spacing={3} style={{columnGap:'13px', marginTop:'15px'}}>
                                                <Box>
                                                    <Typography variant='h6' style={{color: theme.palette.success.main,}} className="win-rate-text"> Win Rate</Typography>
                                                </Box>
                                                <Box>
                                                    <Typography variant="body2" style={{backgroundColor: '#2AC670', color: "#fff", fontSize:'14px',lineHeight:'25px', width:"50px", height:'25px',textAlign:'center', marginLeft:'42px'}} className="win-rate-number">66%</Typography>
                                                </Box>
                                            </Stack>
                                       </Grid>
                                       <Grid>
                                           <Stack direction='row' spacing={2} style={{marginTop:'16px'}}>
                                                <ButtonStyled>Import  <IconFileArrowRight size="18" style={{ marginLeft: '5px' }} /></ButtonStyled>
                                                <ButtonStyled>Export  <IconFileArrowRight size="18" style={{ marginLeft: '5px' }} /></ButtonStyled>
                                            </Stack>
                                       </Grid>
                                   </Grid>

                                </Box>
                                <TabPanel value="1" style={{ padding: 0 }}>
                                    <DataTable
                                        columns={columns}
                                        data={data}
                                        pagination
                                        // actions={<ImportCSVBTN />}
                                        // actions={<ExportCSVBTN />}
                                    />
                                </TabPanel>
                                <TabPanel value="2" style={{ padding: 0 }}>
                                <DataTable
                                        columns={columns}
                                        data={data}
                                        pagination
                                        // actions={<ExportCSVBTN />}
                                    />
                                </TabPanel>
                                <TabPanel value="3" style={{ padding: 0 }}>
                                <DataTable
                                        columns={columns}
                                        data={data}
                                        pagination
                                        // actions={<ExportCSVBTN />}
                                    />
                                </TabPanel>
                                <TabPanel value="4" style={{ padding: 0 }}>
                                <DataTable
                                        columns={columns}
                                        data={data}
                                        pagination
                                        // actions={<ExportCSVBTN />}
                                    />
                                </TabPanel>
                            </TabContext>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </DashboardCard>
    );
};

export default FinopsTable;
