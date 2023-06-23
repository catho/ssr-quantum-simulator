import React from 'react';
import Dropdown from '@catho/quantum/Dropdown';

class ControlledDropdown extends React.Component {
  constructor(props) {
    super(props);

    const { selectedItem = '' } = props;

    this.state = { selectedItem };
  }

  render() {
    const { selectedItem } = this.state;

    return (
      <Dropdown
        label="Controlled"
        placeholder="Select a district"
        selectedItem={selectedItem}
        onChange={item => this.setState({ selectedItem: item })}
        items={[
          { label: 'Amazonas', value: 'AM' },
          { label: 'Bahia', value: 'BA' },
          { label: 'Ceará', value: 'CE' },
          { label: 'Goiás', value: 'GO' },
          { label: 'Minas Gerais', value: 'MG' },
          { label: 'Paraná', value: 'PR' },
          { label: 'Pernambuco', value: 'PE' },
          { label: 'Rio de Janeiro', value: 'RJ' },
          { label: 'Rio Grande do Sul', value: 'RS' },
          { label: 'Santa Catarina', value: 'SC' },
          { label: 'São Paulo', value: 'SP' },
        ]}
      />
    );
  }
}

export default ControlledDropdown;
