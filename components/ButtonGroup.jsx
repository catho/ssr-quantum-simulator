import { RadioGroup } from '@catho/quantum';

const options = [
  {
    value: 'with-icon',
    label: 'With an Icon',
    icon: 'info',
  },
  {
    value: 'default',
    label: 'Default',
  },
];

const ButtonGroup = () => (
  <RadioGroup name="groceries" type="button" options={options} />
);

export default ButtonGroup;
