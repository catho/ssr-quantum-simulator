import React from 'react';
import { Toggle } from '@catho/quantum';

const ToggleWithProps = () => (
  <div style={{ display: 'flex', alignContent: 'center' }}>
    <Toggle id="right" />
    <label htmlFor="right" style={{ marginLeft: 10 }}>
      Right label
    </label>
  </div>
);

export default ToggleWithProps;
