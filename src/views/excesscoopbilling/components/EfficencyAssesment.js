import React from 'react';
import { Typography, Box, Tabs, Tab,styled, Grid, Divider } from '@mui/material';
import PropTypes from 'prop-types';
import DashboardCard from '../../../components/shared/DashboardCard';
import { Stack, textAlign } from '@mui/system';
import { useTheme } from '@emotion/react';


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
                <Box sx={{ p: 3 }}>
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
    color: '#000', 
    fontSize: '15px', 
    alignItems:'start', 
    padding:'0 0 0 15px', 
    minHeight:'45px', 
    fontWeight:'bolder',
    textAlign: 'left',
    '&.Mui-selected': { color: theme.palette.accent.main}
}));

    return (
        <DashboardCard title={
            <Typography variant='h5' sx={{ color: theme.palette.text.dark }}>Efficiency Assessment</Typography>}>
            <Grid container spacing={3}>
                <Grid item sm={4}>
                    <Tabs
                        orientation="vertical"
                        value={value}
                        onChange={handleChange}
                        sx={{ borderColor:'#eee' ,'& .MuiTabs-indicator': { backgroundColor: theme.palette.accent.main, borderWidth: 3, left:0 } }}
                    >
                        <TabStyled label="Shippment DisParirty" {...a11yProps(0)}  />
                        <TabStyled label="Duplicate Freight" {...a11yProps(1)}  />
                        <TabStyled label="Non-Compliment Freight" {...a11yProps(2)} />
                        <TabStyled label="Miscellaneous" {...a11yProps(3)} />
                        <TabStyled label="Duplicate Billing" {...a11yProps(4)} />
                    </Tabs>
                </Grid>
                <Grid item sm={8}>
                    <TabPanel value={value} index={0} style={{ borderLeft: '1px solid #eee', marginLeft: '20px' }}>
                        <Grid container spacing={3}>
                            <Grid item><Typography variant='h6' style={{ color: theme.palette.accent.main }}>11 Jan 2018</Typography></Grid>
                            <Grid item><Typography variant='h6' style={{ color: theme.palette.text.light }}>To</Typography></Grid>
                            <Grid item><Typography variant='h6' style={{ color: theme.palette.success.dark }}>13 Dec 2021</Typography></Grid>
                        </Grid>
                        <Box my={2}><Divider /></Box>
                        <Grid container direction="row" spacing="3">
                            <Grid item>
                                <Typography variant='h6' sx={{color: theme.palette.success.main}}>Agreements Scanned</Typography>
                            </Grid>
                            <Grid item ml={'auto'}><Typography variant='h6'>1,253</Typography></Grid>
                        </Grid>
                        <Box my={1}><Divider /></Box>
                        <Grid container direction="row" spacing="3">
                            <Grid item>
                                <Typography variant='h6' sx={{color: theme.palette.accent.main}}>CoOp Invoices Scanned</Typography>
                            </Grid>
                            <Grid item ml={'auto'}><Typography variant='h6'>1,253</Typography></Grid>
                        </Grid>
                        <Box my={1}><Divider /></Box>
                        <Grid container direction="row" spacing="3">
                            <Grid item>
                                <Typography variant='h6' sx={{color: theme.palette.primary.main}}>PO's Scanned</Typography>
                            </Grid>
                            <Grid item ml={'auto'}><Typography variant='h6'>1,163</Typography></Grid>
                        </Grid>
                        <Box my={1}><Divider /></Box>
                        <Grid container direction="row" spacing="3">
                            <Grid item>
                                <Typography variant='h6' sx={{color: theme.palette.warning.main}}>Sum Identified</Typography>
                            </Grid>
                            <Grid item ml={'auto'}><Typography variant='h6'>11,4047</Typography></Grid>
                        </Grid>
                    </TabPanel>
                    <TabPanel value={value} index={1}></TabPanel>
                    <TabPanel value={value} index={2}></TabPanel>
                    <TabPanel value={value} index={3}></TabPanel>
                    <TabPanel value={value} index={4}></TabPanel>
                    <TabPanel value={value} index={5}></TabPanel> 
                </Grid>
            </Grid>
        </DashboardCard>
    );
};

export default EfficencyAssesment;
