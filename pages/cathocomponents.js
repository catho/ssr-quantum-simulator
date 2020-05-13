import React from 'react';
import { Container, Row, Col } from '@catho/quantum';
import { HeaderResponsive, FooterResponsive, HeaderSimple }from '@catho-private/catho-components';
import Header from './shared/Header';

export default function CathoComponentsPage() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Header title="catho components: components simulator" />
          </Col>
        </Row>
      </Container>
      <h4>Header B2C Sem busca</h4>
      <HeaderResponsive type="B2C" isSubMenuOpen={false} gtmPrefix="next-header-b2c-nosearch" hasSearch={false} />
      <h4>Header B2C </h4>
      <HeaderResponsive type="B2C" isSubMenuOpen={false} gtmPrefix="next-header-b2c" />
      <h4>Header Simple</h4>
      <HeaderSimple gtmPrefix="next" />
      <h4>Footer</h4>
      <FooterResponsive type="B2C" gtmPrefix="next-footer" />
    </>
  );
}
