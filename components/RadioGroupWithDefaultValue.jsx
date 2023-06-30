import { RadioGroup } from '@catho/quantum';

const options = [
  {
    value: 'Tomato sauce',
    label: 'Tomato sauce',
  },
  {
    value: 'Mustard',
    label: 'Mustard',
  },
  {
    value: 'Barbecue sauce',
    label: 'Barbecue sauce (default checked)',
  },
];

const RadioGroupWithDefaultValue = () => (
  <RadioGroup
    name="groceries"
    options={options}
    defaultValue="Barbecue sauce"
  />
);

export default RadioGroupWithDefaultValue;
