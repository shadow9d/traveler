import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import High from './High'
import Guide from './Guide'
import Moments from './Moments'
const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});

function Someextra(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Currently Trending</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <High 
              source="https://d39gusjpdm7p1o.cloudfront.net/data/layout_grouping/static_page_step/20784/a330628091ede7eb1548d6cda58e0357.jpg?ver=1477297804" 
              detail="Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré.          Area: 105.4 km²
            Local time: Friday, 6:41 pm
            Weather: 14 °C, Wind S at 6 km/h, 82% Humidity
            Currency: Euro
            Population: 21.4 lakhs (1 Jan 2019)"
              title="Paris"
            />
            <High 
              source="https://travel.usnews.com/static-travel/images/destinations/108/main_image_cropped_rome_445x280.jpg"
              title="Rome"
              detail="Roma is a can't-miss spot on your trip to Europe. The aroma of fresh Italian cooking wafts through alleys, and historical sites sit at every turn. No visit to Italy's capital would be complete without checking out the Colosseum, St. Peter's Basilica and the awe-inspiring Trevi Fountain."
            />
            <High 
              source="https://travel.usnews.com/static-travel/images/destinations/82/482151882_445x280.jpg"
              title="London"
              detail="Exploring the world-class British Museum, seeing a musical in the West End, touring the Tower of London and gorging on fish and chips at a local pub are all part of the London bucket list experience. However, London's high hotel prices can make budget travelers cringe. Book far in advance or consider a vacation rental to save some coin. "
            />
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Lost? Let us help you!</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Guide />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Want user reviews?! Hell yeah!!!</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Moments />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

Someextra.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Someextra);
