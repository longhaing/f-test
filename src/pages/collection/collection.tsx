import React from 'react';
import CollectionCard from './components/CollectionCard';
import { Grid } from '@mui/material';
import MainLayout from '../../layout/MainLayout';

import useCollection from '../../hooks/useCollection';
import ToolBar from './components/tool-bar/ToolBar';

const Collection = () => {
  const { data } = useCollection();

  const content = data.map((item) => (
    <CollectionCard key={item.id} item={item} />
  ));

  return (
    <MainLayout>
      <ToolBar />
      <Grid py={5} container spacing={2} gridTemplateColumns={'repeat(4, 1fr)'}>
        {content}
      </Grid>
    </MainLayout>
  );
};

export default Collection;
