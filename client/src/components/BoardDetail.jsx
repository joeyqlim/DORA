import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import { Grid, Container } from 'semantic-ui-react'


function BoardDetail() {
  const { boardId: id } = useParams();

  // fetch all lists in this board
  // display lists in rows
  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}

export default BoardDetail;
