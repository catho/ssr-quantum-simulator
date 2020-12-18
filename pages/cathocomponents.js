import React from 'react';
import { Container, Row, Col, Card } from '@catho/quantum';
import { 
  HeaderResponsive, 
  FooterResponsive, 
  HeaderSimple, 
  DeprecatedHeaderLoggedResponsive,
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
      <h4>Header Logged B2C (with logged props) </h4>
      <HeaderResponsive 
        gtmPrefix="next-header-b2c"       
        userProfile="STATUS_A_PROFISSIONAL"
        userThumbnail="https://picsum.photos/24"
        userMessages={1000}
        userEvents={3}
        hasSearch={false}
      />
      <h4>[cadastro candidato] Header Simple (implementado pelo área 51)</h4>
      <HeaderSimple gtmPrefix="next" />
      <h4>[/ajuda] Header Simple logged (implementado pela Transformers)</h4>
      <DeprecatedHeaderLoggedResponsive gtmPrefix="next" />
      <h4>[/ajuda] Header Simple logged sem busca (implementado pela Transformers)</h4>
      <DeprecatedHeaderLoggedResponsive gtmPrefix="next" hasSearch={false} />
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
