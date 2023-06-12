import React from 'react';
import Container from "@catho/quantum/Grid/sub-components/Container";
import Col from "@catho/quantum/Grid/sub-components/Col";
import Row from "@catho/quantum/Grid/sub-components/Row";
import HeaderResponsive from  '@catho-private/catho-components/HeaderResponsive'
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
