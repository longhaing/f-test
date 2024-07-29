import {
  ModalProps as ModalMUIProps,
  Modal as ModalMUI,
  Box,
  Button,
  Container,
  DialogProps,
  Dialog,
  DialogContent,
  DialogActions,
} from '@mui/material';
import React, { ReactNode } from 'react';
import { FC, PropsWithChildren } from 'react';

type ModalProps = {
  footer?: () => ReactNode;
} & FooterProps &
  DialogProps;

type FooterProps = {
  onOK?: () => void;
  onCancel?: () => void;
};

const Modal: FC<PropsWithChildren<ModalProps>> = ({
  children,
  footer,
  onOK,
  onCancel,
  ...props
}) => {
  return (
    <Dialog {...props} onClose={onCancel}>
      <>
        <DialogContent>{children}</DialogContent>
        {footer ? footer() : <Footer onOK={onOK} onCancel={onCancel} />}
      </>
    </Dialog>
  );
};

const Footer: FC<FooterProps> = ({ onCancel, onOK }) => {
  return (
    <DialogActions>
      <Button onClick={onOK}>Ok</Button>
      <Button onClick={onCancel}>Cancel</Button>
    </DialogActions>
  );
};

export default Modal;
