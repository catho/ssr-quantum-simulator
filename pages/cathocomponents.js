import React from 'react';
import { Container, Row, Col, Card } from '@catho/quantum';
import { 
  HeaderResponsive, 
  FooterResponsive, 
  HeaderSimple, 
  HeaderLoggedResponsive,
  PasswordField,
 }from '@catho-private/catho-components';
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
      <h4>Header Simple logged</h4>
      <HeaderLoggedResponsive gtmPrefix="next" />
      <h4>Header Simple logged sem busca</h4>
      <HeaderLoggedResponsive gtmPrefix="next" hasSearch={false} />
      <h4>Footer</h4>
      <FooterResponsive type="B2C" gtmPrefix="next-footer" />
      <Container>
        <h4>Password Field</h4>
        <Card>
          <Card.Content>
            <PasswordField
              password={{ label: 'Password'}}
              onValidate={valid => {
                console.log('valid', valid);
              }} />
          </Card.Content>
        </Card>
      </Container>
    </>
  );
}
