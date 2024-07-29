import React, { FC } from 'react';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export enum SortBy {
  DOB = 'BY_DOB',
  NAME = 'BY_NAME',
}

export type SortByValues = SortBy;

interface Props {
  sortBy: SortByValues;
  setSortBy: (val: SortByValues) => void;
}

const ToolBar: FC<Props> = ({ setSortBy, sortBy }) => {
  const handleChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <Box display="flex" justifyContent="space-between" mt={4}>
      <Box flex={1}>
        <Button component={RouterLink} to="/create-card">
          Create New Card
        </Button>
      </Box>

      <Box flex={1}>
        <FormControl fullWidth>
          <InputLabel id="sort_by">Sort By</InputLabel>
          <Select
            size="small"
            labelId="sort_by"
            value={sortBy}
            label="Sort By"
            onChange={handleChange}
          >
            <MenuItem value={SortBy.DOB}>By DOB</MenuItem>
            <MenuItem value={SortBy.NAME}>By Name</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default ToolBar;
