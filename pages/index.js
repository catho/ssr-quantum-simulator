import React from 'react';
import { Container, Row, Col, TabbedView, Card, RangeSlider, Button } from '@catho/quantum';
import '../static/app.scss';

const colsProps = {
  'medium-offset': 3,
  medium: 6,
};

export default () => (
  <React.Fragment>
    <Container>
      <Row>
        <Col {...colsProps}>
          <h1>Quantum examples</h1>
          <h2>Test your component below</h2>
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
  </React.Fragment>
);
