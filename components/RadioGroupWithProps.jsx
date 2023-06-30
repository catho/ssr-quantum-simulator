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
    label: 'Barbecue sauce',
  },
];

const RadioGroupWithPros = () => (
  <RadioGroup name="groceries" options={options} />
);

export default RadioGroupWithPros;
