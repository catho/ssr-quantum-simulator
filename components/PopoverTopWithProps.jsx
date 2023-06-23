import React from 'react';
import { Popover, Button } from '@catho/quantum';

const PopoverTopWithProps = () => (
  <div>
    <Popover
      trigger={<Button>This is a Popover top example</Button>}
      onClose={() => console.log('onClose prop triggered')}
    >
      Here comes a new Popover Top example
    </Popover>
  </div>
);

export default PopoverTopWithProps;
