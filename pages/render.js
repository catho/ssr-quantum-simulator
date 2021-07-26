import React from 'react';
import { Container, Row, Col } from '@catho/quantum';
import { FooterTagsList } from '../components';
import Header from './shared/Header'

export default function RenderPage() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Header title="Simulates render of one component" />
            <p>Here you implement a component to make all use tests</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <FooterTagsList />
          </Col>
        </Row>
      </Container>
    </>
  );
}
