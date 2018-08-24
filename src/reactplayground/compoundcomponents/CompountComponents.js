import React from 'react';
import { default as TabSwitcher, Tab, TabPanel } from './TabSwitcher';

const CompoundComponents = () => (
  <div>
    <h3>Compound Components</h3>
    <TabSwitcher>
      <Tab id="a">
        <button>Switch to TabPanel a</button>
      </Tab>
      <br />
      <Tab id="b">
        <button>Switch to TabPanel b</button>
      </Tab>

      <br />
      <br />

      <TabPanel whenActive="a">
        <div>a panel</div>
      </TabPanel>

      <TabPanel whenActive="b">
        <div>b panel</div>
      </TabPanel>
    </TabSwitcher>
  </div>
);

export default CompoundComponents;
