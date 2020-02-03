import React from 'react';
import { Container, Row, Col, Card } from '@catho/quantum';
import { HeaderResponsive, FooterResponsive }from '@catho-private/catho-components';
import styled from 'styled-components';
import Header from './shared/Header';

const colsProps = {
    medium: 12,
  };

const Wrapper = styled.div`
  > div { 
    width: 100%;
  }
`;

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
        <Container>
        <Card>
          <Card.Content>
            <Row>
              <Col {...colsProps}>
                <h4>Header</h4>
                <Wrapper>
                  <HeaderResponsive type="B2C" isSubMenuOpen={false} gtmPrefix="next" hasSearch={false} />
                </Wrapper>
              </Col>
            </Row>
          </Card.Content>
        </Card>
        </Container>
        <Container>
        <Card>
          <Card.Content>
            <Row>
              <Col {...colsProps}>
                <h4>Footer</h4>
                <Wrapper>
                  <FooterResponsive type="B2C" gtmPrefix="next" />
                </Wrapper>
              </Col>
            </Row>
          </Card.Content>
        </Card>
      </Container>
    </>
  );
}