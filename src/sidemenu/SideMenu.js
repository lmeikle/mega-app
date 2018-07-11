import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

class SideMenu extends Component {
  render() {
    let { config } = this.props;
    return (
      <Menu vertical>
        {config.map(entry => (
          <Menu.Item key={entry.name} as={NavLink} to={entry.path}>
            {entry.name}
          </Menu.Item>
        ))}
      </Menu>
    );
  }
}

export default SideMenu;
