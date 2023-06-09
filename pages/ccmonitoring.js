import React from "react";
import Container from "@catho/quantum/Grid/sub-components/Container";
import Col from "@catho/quantum/Grid/sub-components/Col";
import Row from "@catho/quantum/Grid/sub-components/Row";
import Head from "next/head"; 
import HeaderResponsive from "@catho-private/catho-components/HeaderResponsive";

const colsProps = {
  medium: 12,
};

const args = {
    type: 'B2B',
    gtmPrefix: 'B2B-google-tag-prefix',
    originApply: 'acme',
    hasSearch: true,
}

export default () => (
  <>
    <Container>
    <Row>
        <Col {...colsProps}>
          <h3>Catho components monitoring page</h3>
          <p>Here the instructions to collect the payload in Browser and the bundle size</p>
          <ol>
            <li> You should be here via task runner <code>yarn analyzer</code></li>
            <li>find the <i>ccmonitoring</i> chunk at the client page of analyzer</li>
            <li>collect the bundle size by the <strong>"Parsed size"</strong> item </li>
            <li>collect the lib payload in browser by the <strong>"Gziped size"</strong> item </li>
          </ol>
        </Col>
    </Row>
    </Container>
    <HeaderResponsive {...args} />
  </>
);
