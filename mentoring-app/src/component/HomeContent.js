import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { sizing } from '@material-ui/system';

import { withStyles, makestyles } from '@material-ui/core/styles';
import { Refresh, People, ChatBubble } from '@material-ui/icons';
import { GridList } from '@material-ui/core';




class HomeContent extends Component {
  render() {
    // Styling
    const { classes } = this.props;

    return (
      <div >
      <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={3}> 
      <Grid item xs={6}>
      <Paper className="paper" align="center">
      Chats and Projects <br />
      Find all your ALLY communication here
      <ChatBubble/>
      </Paper>
      </Grid>
      </Grid>

      <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={3}> 
      <Grid item xs={6}>
      <Paper className="paper" align="center">
      Find 1 to 1 ALLY <br />
      Make a commitment to regular meetings and connect to a great ally!
      <People/>
      </Paper>
      </Grid>
      </Grid>

      <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={3}> 
      <Grid item xs={6}>
      <Paper className="paper" align="center">
      Update Profile <br />
      Keep your skill set and interests up to date!
      <Refresh/>
      </Paper>
      </Grid>
      </Grid>
  

      <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={3}> 
      <Grid item xs={6}>
      <Paper className="paper" align="center">
      Update Profile <br />
      Keep your skill set and interests up to date!
      <Refresh/>
      </Paper>
      </Grid>
      </Grid>
      </div>

      
      
      );
  }
}

HomeContent.propTypes = {
  classes: PropTypes.object.isRequired,

  isSignedIn: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired
};
export default HomeContent;
