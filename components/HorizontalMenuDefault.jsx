import React from 'react';
import HorizontalMenu from '@catho-private/catho-components/HorizontalMenu'

const itemsMock = [
    {
      name: 'Buscar Vagas',
      url: 'https://google.com',
      iconName: 'favorite_border',
      isHighlighted: false,
    },
    {
      name: 'Dados Pessoais',
      url: 'https://google.com',
      iconName: 'verified_user',
      isHighlighted: true,
    },
    {
      name: 'Editar meu CV',
      url: 'https://google.com',
      iconName: 'person',
      isHighlighted: false,
    },
    {
      name: 'Mais Vagas',
      url: 'https://google.com',
      iconName: 'favorite_border',
      isHighlighted: false,
    },
  ];

const HorizontalMenuDefault = () => <HorizontalMenu items={itemsMock}  />

export default HorizontalMenuDefault;