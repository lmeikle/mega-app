import React, { SFC } from 'react';
import { Toggleable } from '../renderprops/Toggleable';
import MenuItem from './MenuItem';

type Props = { title: string };

const ToggleableMenuComponentInjection: SFC<Props> = ({ title, children }) => (
  <Toggleable component={MenuItem} props={{ title }}>
    {children}
  </Toggleable>
);

export default ToggleableMenuComponentInjection;
