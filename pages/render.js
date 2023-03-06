import React from 'react';
import { Container, Row, Col } from '@catho/quantum';
import { HeaderResponsive } from  '@catho-private/catho-components'
import { FooterTagsList } from '../components';
import Header from './shared/Header'

export default function RenderPage() {
  return (
    <>
      <HeaderResponsive type="B2C" />
      <Container>
        <Row>
          <Col>
            <Header title="Simulates render of one component" />
            <p>Here you implement a component to make all use tests</p>
          </Col>
        </Row>
      </Container>
      <FooterTagsList />
    </>
  );
}
