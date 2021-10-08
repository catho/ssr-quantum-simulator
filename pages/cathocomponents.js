import React from 'react';
import { Container, Row, Col, Card } from '@catho/quantum';
import {
  HeaderResponsive,
  FooterResponsive,
  HeaderSimple,
  DeprecatedHeaderLoggedResponsive,
  PasswordField,
  HeaderLoggedResponsive,
} from '@catho-private/catho-components';
import Header from './shared/Header';
import { FooterTagsList, HorizontalMenuDefault, CommentsBoxWithForm, BarChartExample } from '../components';

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
      <HeaderResponsive type="B2C" isSubMenuOpen={false} gtmPrefix="next-header-b2c-nosearch" hasSearch />
      <h4>Header B2C </h4>
      <HeaderResponsive type="B2C" isSubMenuOpen={false} gtmPrefix="next-header-b2c" />
      <h4>Header B2B </h4>
      <HeaderResponsive type="B2B" isSubMenuOpen={false} gtmPrefix="next-header-b2b" loginRedirect={`https://google/com`} hasSearch searchFieldEvents={{ onKeyPress: (e) => console.log('keypress: ', e) }} />
      <h4>Header Logged B2C (with logged props) </h4>
      <HeaderResponsive
        gtmPrefix="next-header-b2c"
        userProfile="STATUS_A_PROFISSIONAL"
        userThumbnail="https://picsum.photos/24"
        userMessages={1000}
        userEvents={3}
        hasSearch={false}
      />
      <HeaderLoggedResponsive userProfile="STATUS_I_PROFISSIONAL" hasSearch />
      <h4>Header B2B logged</h4>
      <HeaderLoggedResponsive
        type="B2B"
        userProfile="STATUS_LOGGED_HIRER"
        hasSearch
        userMessages={9999}
        userEvents={10}
      />
      <h4>[cadastro candidato] Header Simple (implementado pelo área 51)</h4>
      <HeaderSimple gtmPrefix="next" />
      <h4>[/ajuda] Header Simple logged (implementado pela Transformers)</h4>
      <DeprecatedHeaderLoggedResponsive gtmPrefix="next" />
      <h4>[/ajuda] Header Simple logged sem busca (implementado pela Transformers)</h4>
      <DeprecatedHeaderLoggedResponsive gtmPrefix="next" hasSearch={false} />
      <h4>Footer B2C</h4>
      <FooterResponsive type="B2C" gtmPrefix="next-footer" />
      <h4>Footer with Tagslist</h4>
      <FooterTagsList />
      <Container>
        <h4>Password Field</h4>
        <Card>
          <Card.Content>
            <PasswordField
              password={{ label: 'Password' }}
              onValidate={valid => {
                console.log('valid', valid);
              }} />
          </Card.Content>
        </Card>

      </Container>
      <Container>
        <h4>Horizontal Menu</h4>
        <Card>
          <Card.Content>
            <HorizontalMenuDefault />
          </Card.Content>
        </Card>
      </Container>

      <Container>
        <h4>Comments box (with form)</h4>
        <Card>
          <Card.Content>
            <CommentsBoxWithForm />
          </Card.Content>
        </Card>
      </Container>

      <Container>
        <BarChartExample />
      </Container>
    </>
  );
}
