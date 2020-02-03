import React from 'react';
import { Container, Row, Col, TabbedView, Card, RangeSlider, Button } from '@catho/quantum';
import Link from './styles/style';
import Header from './shared/Header';

const colsProps = {
    medium: 12,
  };
  

export default function Quantum() {

return (
  <>
    <Container>
      <Row>
        <Col {...colsProps}>
          <Header title="Quantum: components simulator" />
        </Col>
      </Row>
      <Row>
        <Col {...colsProps}>
          <Card>
            <Card.Content>
              <TabbedView
                activeTab="Slider">
                <TabbedView.Tab title="Slider">
                  <RangeSlider defaultValue={50} />
                </TabbedView.Tab>
                <TabbedView.Tab title="Button">
                  <Button icon="close"> This is a Button</Button>
                </TabbedView.Tab>
              </TabbedView>
            </Card.Content>
          </Card>
        </Col>
      </Row>
    </Container>
  </>
);
};
