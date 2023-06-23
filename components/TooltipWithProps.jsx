import React from 'react';
import { Tooltip, Button } from '@catho/quantum';

const TooltipWithProps = () => (
  <Tooltip placement="top" text="This is a hint.">
    <Button full>Hover me</Button>
  </Tooltip>
);

export default TooltipWithProps;
