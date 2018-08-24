import React, { Component, createContext } from 'react';

/**
 * https://blog.logrocket.com/guide-to-react-compound-components-9c4b3eb482e9
 */

const context = createContext({
  activeTabId: '',
  changeTab: () => {}
});

const { Provider, Consumer } = context;

const Tab = ({ id, children }) => <Consumer>{({ changeTab }) => <div onClick={() => changeTab(id)}>{children}</div>}</Consumer>;

const TabPanel = ({ whenActive, children }) => <Consumer>{({ activeTabId }) => (activeTabId === whenActive ? children : null)}</Consumer>;

class TabSwitcher extends Component {
  state = {
    activeTabId: 'a'
  };

  changeTab = newTabId => {
    this.setState({
      activeTabId: newTabId
    });
  };

  render() {
    return (
      <Provider
        value={{
          activeTabId: this.state.activeTabId,
          changeTab: this.changeTab
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export default TabSwitcher;
export { Tab, TabPanel };
