import React, { useMemo, useState } from 'react';
import { CircularProgress, Grid, Typography } from '@mui/material';
import MainLayout from '../../layout/MainLayout';

import useCollection from '../../hooks/useCollection';
import ToolBar, { SortBy } from './components/tool-bar/ToolBar';
import { SortByValues } from './components/tool-bar/ToolBar';
import Content from './components/content/Content';

const Collection = () => {
  const { data, isSuccess, loading } = useCollection();
  const [sortBy, setSortBy] = useState<SortByValues>(SortBy.DOB);

  const collections = useMemo(() => {
    if (loading || !isSuccess) {
      return [];
    }

    return data.sort((a, b) => {
      if (sortBy === SortBy.DOB) {
        return (
          new Date(a.player.birthday).getTime() -
          new Date(b.player.birthday).getTime()
        );
      }

      const leftPlayerFullName = [a.player.firstname, a.player.lastname].join(
        ' '
      );

      const rightPlayerFullName = [b.player.firstname, b.player.lastname].join(
        ' '
      );

      if (leftPlayerFullName < rightPlayerFullName) {
        return -1;
      }
      if (leftPlayerFullName > rightPlayerFullName) {
        return 1;
      }

      return 0;
    });
  }, [data, sortBy, loading, isSuccess]);

  return (
    <MainLayout>
      {loading && <CircularProgress />}

      {isSuccess ? (
        <>
          <ToolBar sortBy={sortBy} setSortBy={setSortBy} />
          <Content data={collections} />
        </>
      ) : (
        <Grid
          container
          sx={{ minHeight: '100vh' }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography>Something went wrong</Typography>
        </Grid>
      )}
    </MainLayout>
  );
};

export default Collection;
