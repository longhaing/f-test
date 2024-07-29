import React, { FC, useMemo } from 'react';
import {
  InputProps,
  InputLabel,
  FormControl,
  OutlinedInput,
  FormHelperText,
} from '@mui/material';

export interface TextFieldProps extends InputProps {
  name: string;
  label?: string;
  helperText?: string;
  error?: boolean;
  required?: boolean;
}

const TextField: FC<TextFieldProps> = ({
  name,
  label,
  helperText,
  error = false,
  required = false,
  ...props
}) => {
  const TextField = useMemo(
    () => (
      <FormControl variant="outlined" error={error} fullWidth>
        {label && <InputLabel required={required}>{label}</InputLabel>}
        <OutlinedInput label={label} {...props} name={name} />
        <FormHelperText> {helperText}</FormHelperText>
      </FormControl>
    ),
    [name, label, helperText, error, required, props]
  );

  return TextField;
};

export default TextField;
