import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import DirectionsBoatIcon from '@material-ui/icons/DirectionsBoat';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';
import { useStateValue } from './StateProvider';

import CenteredGrid from "./FaresItem";
import "./TabPanel.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    // backgroundColor: theme.palette.background.paper,
    backgroundColor: "primary",
  },
}));

export default function ScrollableTabsButtonForce() {
  const [{RTC}] = useStateValue();

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
          background-Color="secondary"
        >
          <Tab label="Odiongan" icon={<EmojiTransportationIcon />} {...a11yProps(0)} />
          <Tab label="San Agustin" icon={<DirectionsBoatIcon />} {...a11yProps(1)} />
          <Tab label="Tugdan" icon={<AirplanemodeActiveIcon />} {...a11yProps(2)} />
          <Tab label="Others" icon={<LocalTaxiIcon />} {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <br />
      <CenteredGrid destination={"--- DESTINATION ---"} rental={"--- RENTAL ---"} />
      <TabPanel value={value} index={0}>
        
        {
            RTC ?(
                  
                  RTC.fares?.odiongan.map(fare => (
                    <CenteredGrid destination={fare.destination} rental={fare.rental} />
                 ))
                 )
                :
                (<> </>)
        }
      </TabPanel>
      <TabPanel value={value} index={1}>
            {
                RTC ?(
                    RTC.fares?.sanagustin.map(fare => (
                        <CenteredGrid destination={fare.destination} rental={fare.rental} />
                    ))
                    )
                    :
                    (<> </>)
            }
      </TabPanel>
      <TabPanel value={value} index={2}>
            {
                RTC ?(
                    RTC.fares?.tugdan.map(fare => (
                        <CenteredGrid destination={fare.destination} rental={fare.rental} />
                    ))
                    )
                    :
                    (<> </>)
            }
      </TabPanel>
      <TabPanel value={value} index={3}>
            {
                RTC ?(
                    RTC.fares?.others.map(fare => (
                        <CenteredGrid origin={fare.origin} destination={fare.destination} rental={fare.rental} />
                    ))
                    )
                    :
                    (<> </>)
            }
      </TabPanel>
    </div>
  );
}
