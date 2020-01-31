import React from 'react';
import { Container, Row, Col, Card } from '@catho/quantum';

const colsProps = {
    medium: 12,
  };

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
                <p>Lorem ipsum dolor</p>
              </Col>
            </Row>
          </Card.Content>
        </Card>
      </Container>
    </>
  );
}