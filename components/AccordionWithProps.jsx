import React from 'react';
import Accordion from '@catho/quantum/Accordion';

const accordionItems = [
  {
    title: 'List',
    content: (
      <ul>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Contatos</a>
        </li>
        <li>
          <a href="#">Certificação</a>
        </li>
      </ul>
    ),
  },
  {
    title: 'Paragraph ',
    content: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <br />
        Ut orci metus, auctor et viverra nec, consectetur vel diam.
        <br />
        fringilla non nisi. Proin in pharetra tellus.
      </p>
    ),
    opened: true,
  },
  {
    title: 'Paragraph 2',
    content: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <br />
        Ut orci metus, auctor et viverra nec, consectetur vel diam.
        <br />
        fringilla non nisi. Proin in pharetra tellus.
      </p>
    ),
  },
];

const AccordionWithProps = () => <Accordion items={accordionItems} />;

export default AccordionWithProps;
