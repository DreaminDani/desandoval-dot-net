/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import {handleImageURI, paragraphRenderer, headingRenderer, listRenderer, linkRenderer } from '../lib/MarkdownRenderer';

/* material-ui */
import withStyles from 'material-ui/styles/withStyles';
import withRoot from '../components/withRoot';
import Grid from 'material-ui/Grid';

/* my components */
import PageLayout from '../components/PageLayout';

const styles = {};

/*
Renders a portfolio post from the following data (found in the source .md):
title: This is text
description: Also some text
date: June 2017
tags: [tag1, tag two, tag 3#, tag 4%, tag $#!]
category: test                                        // haven't quite decided on this yet
topImage: ![Screen Shot 2017-10-25 at 8.47.07 AM.png](resources/1AF7E97F815E72F0392AD67C648FBA8A.png) // all images (including this one) have to be saved in the /static/resources directory
content: #Markdown Content
 */

class PortfolioItem extends Component {

  handleTopImage = () => {
    const regExp = /\(([^)]+)\)/;
    let imgUri = regExp.exec(this.props.url.query.topImage)[1];
    imgUri = handleImageURI(imgUri)
    return imgUri;
  };

  render() {
    let headerData = {
      topImage: this.handleTopImage(),
      title: this.props.url.query.title,
      description: this.props.url.query.description,
      date: this.props.url.query.date,
      tags: this.props.url.query.tags,
    };

    return (
      <PageLayout pageType="portfolioItem" headerData={headerData}>
        <Grid container spacing={24} justify="center">
          <Grid item xs={10} sm={8}>
            <ReactMarkdown transformImageUri={handleImageURI}
                           renderers={{
                             Paragraph: paragraphRenderer,
                             Heading: headingRenderer,
                             List: listRenderer,
                             Link: linkRenderer,
                           }}
                           source={this.props.url.query.content} />
          </Grid>
        </Grid>
      </PageLayout>
    )
  }
}

export default withRoot(withStyles(styles)(PortfolioItem));