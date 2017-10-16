// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import SectionTitle from './SectionTitle';
import Grid from 'material-ui/Grid';
import JobBox from './JobBox';

const styles = theme => ({
  root: {
    marginBottom: theme.spacing.unit * 4,
  }
});

function EmploymentSummary(props) {
  const {classes} = props;

  return (
    <div className={classes.root}>
      <SectionTitle title="Employment" divider={true} />
      <Grid container justify="center" spacing={8}>
        <Grid item xs={12} sm={10} md={5}>
          <JobBox  job={{
            logo: '/img/jobs/dio-logo-white.png',
            title: 'Product Designer',
            description: ['Conducting user research to investigate problem spaces and validate assumptions within next generation market research technology',
                          'Involving internal and external stakeholders in an iterative design practice to define requirements and generate Agile engineering specifications',
                          'Creating personas, user stories, mockups, prototypes and any other necessary artifacts to carry out the User Centered Design process'],
            website: 'https://www.discuss.io',
            color: 'rgba(0,197,238,0.3)',
          }} />
        </Grid>
        {/* todo figure out a way to display other jobs without interrupting */}
      </Grid>
    </div>
  );
}

EmploymentSummary.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EmploymentSummary);