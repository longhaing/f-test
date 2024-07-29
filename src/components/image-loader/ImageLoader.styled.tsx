import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const ImageLoaderContainer = styled(Box)<{
  height: number;
  width: number;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ height }) => `${height}px`};
  width: ${({ width }) => `${width}px`};
`;
