import { SegmentedControl } from '@catho/quantum';

const fiveContentsWithFirstChecked = [
  {
    label: 'Profissional',
    value: 'profissional',
    checked: true,
  },
  {
    label: 'Operacional',
    value: 'operacional',
  },
  {
    label: 'Estagiário',
    value: 'estagiário',
  },
  {
    label: 'Maquinário',
    value: 'maquinário',
  },
  {
    label: 'Favorito',
    value: 'favorito',
  },
];

const fiveContentsWithIcon = [
  {
    label: 'Profissional',
    value: 'profissional',
    icon: 'info',
  },
  {
    label: 'Operacional',
    value: 'operacional',
    checked: true,
    icon: 'block',
  },
  {
    label: 'Estagiário',
    value: 'estagiário',
    icon: 'date_range',
  },
  {
    label: 'Maquinário',
    value: 'maquinário',
    icon: 'error',
  },
  {
    label: 'Favorito',
    value: 'favorito',
    icon: 'favorite_border',
  },
];

const SegmentedControlExample = () => (
  <>
    <SegmentedControl name="items-text" items={fiveContentsWithFirstChecked} />
    <SegmentedControl name="items-with-icon" items={fiveContentsWithIcon} />
  </>
);

export default SegmentedControlExample;
