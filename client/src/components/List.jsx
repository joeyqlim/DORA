import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import { Grid, Container } from 'semantic-ui-react'


function List() {

  // each list will be a row
  // fetch cards and render each into a card component
  return (
    <Grid divided='vertically'>
      {/* render cards */}
    </Grid>
  );
}

export default List;
