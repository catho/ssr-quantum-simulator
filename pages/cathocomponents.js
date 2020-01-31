import React from 'react';
import { Container, Row, Col, Card } from '@catho/quantum';
import HeaderResponsive from '@catho-private/catho-components/HeaderResponsive';
import styled from 'styled-components';

const colsProps = {
    medium: 12,
  };

const HeaderWrapper = styled.div`
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
            <div>
                <a href="/">Back to menu</a>
            </div>
            <h2>catho components: components simulator</h2>
            <h3>Test your components below</h3>
          </Col>
        </Row>
        <Card>
          <Card.Content>
            <Row>
              <Col {...colsProps}>
                <h4>Header</h4>
                <HeaderWrapper>
                  <HeaderResponsive style={ { width: '100%'}} type="B2C" isSubMenuOpen={false} gtmPrefix="next" hasSearch={false} />
                </HeaderWrapper>
              </Col>
            </Row>
          </Card.Content>
        </Card>
      </Container>
    </>
  );
}