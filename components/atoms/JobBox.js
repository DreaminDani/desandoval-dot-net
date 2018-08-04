import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  leftGrid: {
    margin: '16px auto 0 auto',
  },
  jobTitle: {
    marginBottom: 24,
  },
  jobLogo: {
    [theme.breakpoints.up('xs')]: {
      width: 160,
    },
    [theme.breakpoints.down('sm')]: {
      width: 250,
    },
  },
  jobAbout: {
    color: 'inherit',
    textDecoration: 'none',
    paddingTop: 20,
  },
  description: {
    textAlign: 'left',
    '& li': {
      marginBottom: theme.spacing.unit,
    },
  },
});

// prints the string passed in as the props.description
// or formats a passed in list as an html list
function printDescription(description) {
  if (typeof description === 'string') {
    return description;
  }
  return (
    <ul>
      {description.map(listItem => (
        <li key={listItem}>{listItem}</li>
        ))}
    </ul>);
}

class JobBox extends React.Component {
  state = {
    hover: false,
  };

  toggleHoverOn = () => {
    this.setState({ hover: true });
  };

  toggleHoverOff = () => {
    this.setState({ hover: false });
  };

  render() {
    const { classes, job } = this.props;

    const linkStyle = (this.state.hover)
      ? { color: job.color }
      : { color: 'inherit' };

    return (
      <div>
        <Paper className={classes.root} elevation={4}>
          <Grid container justify="space-between">
            <Grid item xs={12} sm={4} md={3} className={classes.leftGrid}>
              <Typography variant="headline" component="h3" className={classes.jobTitle}>
                {job.title}
              </Typography>
              <a href={job.website} target="_blank" rel="noopener noreferrer">
                <img
                  alt={`logo for ${job.title} job`}
                  onMouseEnter={this.toggleHoverOn}
                  onMouseLeave={this.toggleHoverOff}
                  className={classes.jobLogo}
                  src={job.logo}
                />
              </a>
              <Typography variant="caption">
                <a
                  style={linkStyle}
                  onMouseEnter={this.toggleHoverOn}
                  onMouseLeave={this.toggleHoverOff}
                  className={classes.jobAbout}
                  href={job.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  More info
                </a>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8} md={8} className={classes.description}>
              <Typography variant="body1" component="span">
                {printDescription(job.description)}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

JobBox.defaultProps = {
  classes: {},
};

JobBox.propTypes = {
  classes: PropTypes.object,
  job: PropTypes.shape({
    logo: PropTypes.string, // like /img/example.jpg
    title: PropTypes.string,
    description: PropTypes.oneOfType([ // handled by printDescription
      PropTypes.string,
      PropTypes.array,
    ]),
    website: PropTypes.string, // like http://example.com
    color: PropTypes.string, // rgb(a) or hex
  }).isRequired,
};

export default withStyles(styles)(JobBox);
