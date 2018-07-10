import React from 'react';
import DumbCard from './DumbCard';
import ResponsiveCard from './ResponsiveCard';

const ReactSentinel = () => (
  <div>
    <div>
      <DumbCard small>Im a small card!</DumbCard>
      <DumbCard medium>Im a medium card!</DumbCard>
      <DumbCard large>Im a large card!</DumbCard>
    </div>
    <div>
      <ResponsiveCard>Im a small card!</ResponsiveCard>
      <ResponsiveCard>Im a medium card!</ResponsiveCard>
      <ResponsiveCard>Im a large card!</ResponsiveCard>
    </div>
  </div>
);

export default ReactSentinel;
