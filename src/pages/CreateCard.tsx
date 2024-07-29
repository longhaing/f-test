import React, { ChangeEvent, FormEvent, useState } from 'react';

import {
  Alert,
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { randomId } from '../utils';
import { CARD_ENDPOINT } from '../constants/share';
import MainLayout from '../layout/MainLayout';

/**
 * Step 3: Render a form and everything needed to be able to create a card
 */
export const CreateCard = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    date: null,
  });
  const [error, setError] = useState(null);
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const onChangeDate = (value: Date) => {
    setFormValues({
      ...formValues,
      date: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await axios.post(CARD_ENDPOINT, {
        id: randomId(10_000, 30_000),
        player: {
          firstname: formValues.firstName,
          lastname: formValues.lastName,
          birthday: formValues.date,
          image: '',
        },
      });

      history.push('/collection');
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          mt: 5,
        }}
        onSubmit={handleSubmit}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Create Card
        </Typography>

        {!!error && (
          <Box>
            <Alert severity="error">Something went wrong. Please retry.</Alert>
          </Box>
        )}
        <TextField
          label="First Name"
          name="firstName"
          value={formValues.firstName}
          onChange={handleInputChange}
          fullWidth
          required
        />
        <TextField
          label="Last Name"
          name="lastName"
          value={formValues.lastName}
          onChange={handleInputChange}
          fullWidth
          required
        />

        <DatePicker
          label="Date of birth"
          onChange={onChangeDate}
          value={formValues.date}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={loading}
        >
          {loading && (
            <Box mr={4}>
              <CircularProgress size={12} />
            </Box>
          )}
          Submit
        </Button>
      </Box>
    </MainLayout>
  );
};
