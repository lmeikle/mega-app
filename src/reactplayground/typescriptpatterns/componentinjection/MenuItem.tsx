import React, { SFC } from 'react';
import { ToggleableComponentProps } from '../renderprops/Toggleable';

type MenuItemProps = { title: string };

const MenuItem: SFC<MenuItemProps & ToggleableComponentProps> = ({ title, toggle, show, children }) => {
  return (
    <>
      <div onClick={toggle}>
        <div>{title} - click me!</div>
      </div>
      {show ? children : null}
    </>
  );
};

MenuItem.displayName = 'MenuItem';

export default MenuItem;
