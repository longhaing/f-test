import React, { FC } from 'react';
import { CollectionItem } from '../../../../model/collection';
import { Grid, Typography } from '@mui/material';
import CollectionCard from '../CollectionCard';

interface Props {
  data: CollectionItem[];
}

const Content: FC<Props> = ({ data }) => {
  if (data.length === 0) {
    return (
      <Grid
        container
        sx={{ minHeight: '100vh' }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Typography>Please create a new card item.</Typography>
      </Grid>
    );
  }

  return (
    <Grid py={5} container spacing={2}>
      {data.map((item) => (
        <Grid item xs={6} md={3}>
          <CollectionCard key={item.id} item={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Content;
