import { Container } from '@mui/material';
import React from 'react';
import { FC, PropsWithChildren } from 'react';

type MainLayoutProps = {};

const MainLayout: FC<PropsWithChildren<MainLayoutProps>> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default MainLayout;
