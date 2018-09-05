import React, { SFC } from 'react';
import { Toggleable } from './Toggleable';

type Props = { title: string };
const ToggleableMenu: SFC<Props> = ({ title, children }) => (
  <div>
    <Toggleable
      render={({ show, toggle }) => {
        return (
          <React.Fragment>
            <div onClick={toggle}>
              <div>{title} - click me!</div>
            </div>
            {show ? <p>{children}</p> : null}
          </React.Fragment>
        );
      }}
    />
  </div>
);

export default ToggleableMenu;
