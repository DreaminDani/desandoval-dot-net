/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react';

/* material-ui */
import withStyles from 'material-ui/styles/withStyles';
import withRoot from '../components/withRoot';
import Grid from 'material-ui/Grid';

/* my components */
import PageLayout from '../components/PageLayout';
import PortfolioGridList from '../components/PortfolioGridList';

const styles = {};

class Portfolio extends Component {

  render() {

    return (
      <PageLayout currentPage={this.props.url.pathname}>
        <PortfolioGridList tileData={this.props.portfolioEntries} large={true} />
      </PageLayout>
    )
  }
}

Portfolio.getInitialProps = async function(context) {

  const portfolio = await fetch(process.env.SERVER_HOST + ':' + process.env.PORT
                                + '/portfolio/list');
  const portfolioData = await portfolio.json();

  return {
    portfolioEntries: portfolioData,
  }
};

export default withRoot(withStyles(styles)(Portfolio));