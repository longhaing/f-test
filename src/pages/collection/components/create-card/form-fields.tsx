import { Box, Button, Grid } from '@mui/material';
import React, { FC, useMemo, useState } from 'react';

import TextField from '../../../../components/text-field/text-field';
import ButtonSubmit from '../../../../components/button-submit/button-submit';
import DateField from '../../../../components/date-field/date-field';
import {
  InitCollectionItem,
  FIRSTNAME_FIELD_ERROR_MESSAGE,
  LASTNAME_FIELD_ERROR_MESSAGE,
  FormErrors,
  validateForm,
} from '../../config';
import { CollectionItem } from '../../../../model/collection';

const CreateCardFormFields: FC<{
  onClose?: () => void;
}> = ({ onClose }) => {
  const [collectionItem, setCollectionItem] =
    useState<CollectionItem>(InitCollectionItem);

  const [errors, setErrors] = useState<FormErrors>({});

  const onHandleChangeTextField = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setCollectionItem({
      ...collectionItem,
      player: {
        ...collectionItem.player,
        [e.target.name]: e.target.value,
      },
    });
  };

  const onHandleChangeDate = (date: Date | null): void => {
    console.log('date', date.toISOString().split('T')[0]);
    // setCollectionItem({
    //   ...collectionItem,
    //   player: {
    //     ...collectionItem.player,
    //     birthday: date ? date.toISOString().split('T')[0] : '',
    //   },
    // });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors(validateForm(collectionItem));
  };

  const field = useMemo(
    () => (
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              name="firstname"
              label="first name"
              value={collectionItem.player.firstname}
              onChange={onHandleChangeTextField}
              error={!!errors?.player?.firstname}
              helperText={FIRSTNAME_FIELD_ERROR_MESSAGE}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="lastname"
              label="last name"
              value={collectionItem.player.lastname}
              onChange={onHandleChangeTextField}
              helperText={LASTNAME_FIELD_ERROR_MESSAGE}
              error={!!errors?.player?.lastname}
            />
          </Grid>
          <Grid item xs={12}>
            <DateField />
          </Grid>
        </Grid>
        <Box>
          <Button onClick={onClose}>Close</Button>
          <ButtonSubmit>Create New Card</ButtonSubmit>
        </Box>
      </form>
    ),
    [collectionItem, onClose, onHandleChangeTextField]
  );

  return field;
};

export default CreateCardFormFields;
