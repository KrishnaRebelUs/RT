import React from 'react';
import { Typography, Box, Tabs, Tab,styled, Grid, Divider } from '@mui/material';
import PropTypes from 'prop-types';
import DashboardCard from '../../../components/shared/DashboardCard';
import { Stack, textAlign } from '@mui/system';
import { useTheme } from '@emotion/react';
import moment from 'moment';


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ px: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
  
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
  
function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const EfficencyAssesment = () => {
const theme = useTheme();
const [value, setValue] = React.useState(0);

const handleChange = (event, newValue) => {
    setValue(newValue);
};
const TabStyled = styled(Tab)(({ theme }) => ({
    color: theme.palette.text.main, 
    fontSize: '0.68rem', 
    alignItems: 'start',
    fontWeight: '600', 
    minHeight: 'inherit',
    marginBottom: '0',
    textAlign: 'left',
    transition: 'all 0.3s ease',
    '&:before': {
        content: '""',
        backgroundColor: theme.palette.divider,
        position: 'absolute',
        bottom: '3px',
        width: '100%',
        height: '2px',
        transition: 'all 0.3s ease'
    },
    '&.Mui-selected, &:hover': { 
        color: theme.palette.accent.main,

        '&:before': {
            backgroundColor: theme.palette.accent.main,
        }
    }
}));

    return (
        <DashboardCard 
            title={
                <Typography variant='h5' sx={{ color: theme.palette.text.dark }}>Efficiency Assessment</Typography>
            }
        >
            <Grid container spacing={4} justifyContent='space-between'>
                <Grid item md={4}>
                    <Tabs
                        orientation="vertical"
                        value={value}
                        onChange={handleChange}
                        className='assesment-tab'
                        sx={{ borderColor:'#eee' ,'& .MuiTabs-indicator': { backgroundColor: theme.palette.accent.main, borderWidth: 3, left:0 } }}
                    >
                        <TabStyled label="Shipment Disparity" {...a11yProps(0)}  />
                        <TabStyled label="Duplicate Freight" {...a11yProps(1)}  />
                        <TabStyled label="Non-Compliment Freight" {...a11yProps(2)} />
                        <TabStyled label="Miscellaneous" {...a11yProps(3)} />
                        <TabStyled label="Duplicate Billing" {...a11yProps(4)} />
                    </Tabs>
                </Grid>
                <Grid item md={8}>
                    <TabPanel value={value} index={0}>
                        <Grid container spacing={4} justifyContent='space-between'>
                            <Grid item mt={1}>
                                <Typography variant='h6' fontWeight={600} mb={3}>Audit time period</Typography>
                                <Typography variant='body2' style={{ color: theme.palette.text.dark ,fontSize:'11px'}} fontWeight={600} mb={3}> 1-Apr-2017 to 31-Oct-2021</Typography>
                                <Grid container spacing={3} mb={3} justifyContent='space-between'>
                                    <Grid item xs={8}>
                                        <Typography variant='body2'  sx={{color: theme.palette.success.dark}} fontWeight={600}>Agreements Scanned</Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography variant='body2' style={{ textAlign: 'right', fontWeight: '600' }}>3,253</Typography>
                                    </Grid>
                                </Grid>
                                <Grid container justifyContent={'space-between'} spacing={3} mb={3}>
                                    <Grid item xs={8}>
                                        <Typography variant='body2'  sx={{color: theme.palette.accent.main}} fontWeight={600}>CoOp Invoices Scanned</Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography variant='body2' style={{ textAlign: 'right', fontWeight: '600' }}>1,253</Typography>
                                    </Grid>
                                </Grid>
                                <Grid container justifyContent={'space-between'} spacing={3} mb={3}>
                                    <Grid item xs={8}>
                                        <Typography variant='body2'  sx={{color: theme.palette.primary.main}} fontWeight={600}>PO's Scanned</Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography variant='body2' style={{ textAlign: 'right', fontWeight: '600' }}>1,163</Typography>
                                    </Grid>
                                </Grid>
                                <Grid container justifyContent={'space-between'} spacing={1}>
                                    <Grid item xs={8}>
                                        <Typography variant='body2'  sx={{color: theme.palette.secondary.main}} fontWeight={600}>Sum Identified</Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography variant='body2' style={{ textAlign: 'right', fontWeight: '600' }}> $11,405.27</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Grid container>
                            <Grid item mt={1}>
                                <Typography variant='h6' fontWeight={600} mb={3}>Audit time period</Typography>
                                <Typography variant='body2' style={{ color: theme.palette.text.dark , fontSize:'11px'}} fontWeight={600} mb={3}> 1-Apr-2017 to 05-Oct-2021</Typography>
                                <Grid container spacing={3} mb={3}>
                                    <Grid item xs={8}>
                                        <Typography variant='body2'  sx={{color: theme.palette.success.dark}} fontWeight={600}>Agreements Scanned</Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography variant='body2' style={{ textAlign: 'right', fontWeight: '600' }}>2,515</Typography>
                                    </Grid>
                                </Grid>
                                <Grid container justifyContent={'space-between'} spacing={3} mb={3}>
                                    <Grid item xs={8}>
                                        <Typography variant='body2'  sx={{color: theme.palette.accent.main}} fontWeight={600}>CoOp Invoices Scanned</Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography variant='body2' style={{ textAlign: 'right', fontWeight: '600' }}>1,253</Typography>
                                    </Grid>
                                </Grid>
                                <Grid container justifyContent={'space-between'} spacing={3} mb={3}>
                                    <Grid item xs={8}>
                                        <Typography variant='body2'  sx={{color: theme.palette.primary.main}} fontWeight={600}>PO's Scanned</Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography variant='body2' style={{ textAlign: 'right', fontWeight: '600' }}>1,163</Typography>
                                    </Grid>
                                </Grid>
                                <Grid container justifyContent={'space-between'} spacing={1}>
                                    <Grid item xs={8}>
                                        <Typography variant='body2'  sx={{color: theme.palette.secondary.main}} fontWeight={600}>Sum Identified</Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography variant='body2' style={{ textAlign: 'right', fontWeight: '600' }}> $11,405.27</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <Grid container>
                            <Grid item mt={1}>
                                 <Typography variant='h6' fontWeight={600} mb={3}>Audit time period</Typography>
                                <Typography variant='body2' style={{ color: theme.palette.text.dark ,fontSize:'11px'}} fontWeight={600} mb={3}> 1-Apr-2017 to 31-Oct-2021</Typography>
                                <Grid container spacing={3} mb={3}>
                                    <Grid item xs={8}>
                                        <Typography variant='body2'  sx={{color: theme.palette.success.dark}} fontWeight={600}>Agreements Scanned</Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography variant='body2' style={{ textAlign: 'right', fontWeight: '600' }}>3,253</Typography>
                                    </Grid>
                                </Grid>
                                <Grid container justifyContent={'space-between'} spacing={3} mb={3}>
                                    <Grid item xs={8}>
                                        <Typography variant='body2'  sx={{color: theme.palette.accent.main}} fontWeight={600}>CoOp Invoices Scanned</Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography variant='body2' style={{ textAlign: 'right', fontWeight: '600' }}>1,253</Typography>
                                    </Grid>
                                </Grid>
                                <Grid container justifyContent={'space-between'} spacing={3} mb={3}>
                                    <Grid item xs={8}>
                                        <Typography variant='body2'  sx={{color: theme.palette.primary.main}} fontWeight={600}>PO's Scanned</Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography variant='body2' style={{ textAlign: 'right', fontWeight: '600' }}>1,163</Typography>
                                    </Grid>
                                </Grid>
                                <Grid container justifyContent={'space-between'} spacing={1}>
                                    <Grid item xs={8}>
                                        <Typography variant='body2'  sx={{color: theme.palette.secondary.main}} fontWeight={600}>Sum Identified</Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography variant='body2' style={{ textAlign: 'right', fontWeight: '600' }}> $11,405.27</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <Grid container>
                            <Grid item mt={1}>
                                <Typography variant='h6' fontWeight={600} mb={3}>Audit time period</Typography>
                                <Typography variant='body2' style={{ color: theme.palette.text.dark , fontSize:'11px'}} fontWeight={600} mb={3}> 1-Apr-2017 to 05-Oct-2021</Typography>
                                <Grid container spacing={3} mb={3}>
                                    <Grid item xs={8}>
                                        <Typography variant='body2'  sx={{color: theme.palette.success.dark}} fontWeight={600}>Agreements Scanned</Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography variant='body2' style={{ textAlign: 'right', fontWeight: '600' }}>2,515</Typography>
                                    </Grid>
                                </Grid>
                                <Grid container justifyContent={'space-between'} spacing={3} mb={3}>
                                    <Grid item xs={8}>
                                        <Typography variant='body2'  sx={{color: theme.palette.accent.main}} fontWeight={600}>CoOp Invoices Scanned</Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography variant='body2' style={{ textAlign: 'right', fontWeight: '600' }}>1,253</Typography>
                                    </Grid>
                                </Grid>
                                <Grid container justifyContent={'space-between'} spacing={3} mb={3}>
                                    <Grid item xs={8}>
                                        <Typography variant='body2'  sx={{color: theme.palette.primary.main}} fontWeight={600}>PO's Scanned</Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography variant='body2' style={{ textAlign: 'right', fontWeight: '600' }}>1,163</Typography>
                                    </Grid>
                                </Grid>
                                <Grid container justifyContent={'space-between'} spacing={1}>
                                    <Grid item xs={8}>
                                        <Typography variant='body2'  sx={{color: theme.palette.secondary.main}} fontWeight={600}>Sum Identified</Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography variant='body2' style={{ textAlign: 'right', fontWeight: '600' }}> $11,405.27</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                        <Grid container>
                            <Grid item mt={1}>
                                <Typography variant='h6' fontWeight={600} mb={3}>Audit time period</Typography>
                                <Typography variant='body2' style={{ color: theme.palette.text.dark ,fontSize:'11px'}} fontWeight={600} mb={3}> 1-Apr-2017 to 31-Oct-2021</Typography>
                                <Grid container spacing={3} mb={3}>
                                    <Grid item xs={8}>
                                        <Typography variant='body2'  sx={{color: theme.palette.success.dark}} fontWeight={600}>Agreements Scanned</Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography variant='body2' style={{ textAlign: 'right', fontWeight: '600' }}>3,253</Typography>
                                    </Grid>
                                </Grid>
                                <Grid container justifyContent={'space-between'} spacing={3} mb={3}>
                                    <Grid item xs={8}>
                                        <Typography variant='body2'  sx={{color: theme.palette.accent.main}} fontWeight={600}>CoOp Invoices Scanned</Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography variant='body2' style={{ textAlign: 'right', fontWeight: '600' }}>1,253</Typography>
                                    </Grid>
                                </Grid>
                                <Grid container justifyContent={'space-between'} spacing={3} mb={3}>
                                    <Grid item xs={8}>
                                        <Typography variant='body2'  sx={{color: theme.palette.primary.main}} fontWeight={600}>PO's Scanned</Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography variant='body2' style={{ textAlign: 'right', fontWeight: '600' }}>1,163</Typography>
                                    </Grid>
                                </Grid>
                                <Grid container justifyContent={'space-between'} spacing={1}>
                                    <Grid item xs={8}>
                                        <Typography variant='body2'  sx={{color: theme.palette.secondary.main}} fontWeight={600}>Sum Identified</Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography variant='body2' style={{ textAlign: 'right', fontWeight: '600' }}> $11,405.27</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </TabPanel>
                    
                </Grid>
            </Grid>
        </DashboardCard>
    );
};

export default EfficencyAssesment;
