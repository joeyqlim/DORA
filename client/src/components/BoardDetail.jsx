import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import { Grid, Container } from 'semantic-ui-react'


function BoardDetail() {
  const { boardId: id } = useParams();

  // fetch all lists in this board
  // render each list into a list component
  return (
    <Grid divided='vertically'>
      {/* render lists */}
    </Grid>
  );
}

export default BoardDetail;
