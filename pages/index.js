import React from 'react';
import { Container, Row, Col, Icon } from '@catho/quantum';
import '../static/app.scss';

export default () => (
  <React.Fragment>
    <Container>
      <Row>
        <Col
          style={{
            textAlign: 'center',
            paddingTop: '60px',
            paddingBottom: '60px',
          }}
        >
          <Icon name="thumb_up" />
          Catho Simple App
        </Col>
      </Row>
    </Container>
  </React.Fragment>
);
