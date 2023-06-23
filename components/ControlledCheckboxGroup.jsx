import React from 'react';
import { CheckboxGroup } from '@catho/quantum/Checkbox';

class ControlledCheckboxGroup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        { checked: false, label: 'Banana', name: 'banana' },
        { checked: true, label: 'Orange', name: 'orange' },
        { checked: false, label: 'Lemon', name: 'lemon' },
      ],
    };
  }

  render() {
    const { items } = this.state;

    return (
      <>
        <CheckboxGroup
          options={items}
          onChange={newItems => this.setState({ items: newItems })}
        />
      </>
    );
  }
}

export default ControlledCheckboxGroup;
