import React, { useMemo, useState } from 'react';
import CollectionCard from './components/collection-card/collection-card';
import { Grid, Box, Button } from '@mui/material';

import MainLayout from '../../layout/MainLayout';
import useCollection from '../../hooks/useCollection';
import Modal from '../../components/modal/modal';
import CreateCardFormFields from './components/create-card/form-fields';

const Collection = () => {
  const { data, loading } = useCollection();
  const [openCreateCardModal, setOpenCreateCardModal] = useState(false);

  const handleShowCreateCardModal = () => {
    setOpenCreateCardModal(true);
  };
  const handleCloseCreateCardModal = () => {
    setOpenCreateCardModal(false);
  };

  const formModal = useMemo(
    () => (
      <>
        <CreateCardFormFields onClose={handleCloseCreateCardModal} />
      </>
    ),
    []
  );

  const content = data.map((item) => (
    <CollectionCard key={item.id} item={item} loading={loading} />
  ));

  return (
    <MainLayout>
      <Box>
        <Button onClick={handleShowCreateCardModal}>Create New Card</Button>
        <Modal title="Create New Card" open={openCreateCardModal} hideFooter>
          {formModal}
        </Modal>
      </Box>
      <Grid py={5} container spacing={2} gridTemplateColumns={'repeat(4, 1fr)'}>
        {content}
      </Grid>
    </MainLayout>
  );
};

export default Collection;
