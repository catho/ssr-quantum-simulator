import React from "react";
import Container from "@catho/quantum/Grid/sub-components/Container";
import Col from "@catho/quantum/Grid/sub-components/Col";
import Row from "@catho/quantum/Grid/sub-components/Row";
import Link from "./styles/style";
import Alert from "@catho/quantum/Alert"
import List from "@catho/quantum/List"
import Head from "next/head"; 

const colsProps = {
  medium: 12,
};

const itemsList = [
  { content: 'You should be here via task runner yarn analyzer' },
  { content: 'the libs version must be inserted without "^" signal in package.json. We must test the real version of the package' },
  { content: 'choose the page do you want to collect, Quantum or Catho Components' },
  { content: 'pages will open, find the corresponding library in its chunk (with same name)' },
  { content: 'reloads the page do you want to collect' },
  { content: 'point the mouse in node_modules of the page (quantum or cathocomponents)' },
  { content: 'collect the bundle size by the "Parsed size" item ' },
  { content: 'collect the lib payload in browser by the "Gziped size" item ' },
]

export default () => (
  <>
  <Container>
    <Row>
        <Col {...colsProps}>
          <h3>To monitoring page ...</h3>
          <p>Here the instructions to collect the payload in Browser and the bundle size:</p>
          <List bullet="•" items={itemsList} />
        </Col>
    </Row>
    </Container>
    <Container>
    <Row>
        <Col {...colsProps}>
          <Alert
            icon="info"
            skin="primary"
          >
            <span>
              <strong>Important:</strong> this bundle is bigger than applications uses. Here, we use all the components that 
              library offers, and some duplicated ones.
              One application do not use 2 headers or all components.
              Its only our unit of measurement.
            </span>
          </Alert>
        </Col>
    </Row>
    </Container>



    <Container>
      <Head>
        <title>SSR-Simulator</title>
      </Head>
      <Row>
        <Col {...colsProps}>
          <h2>SSR simulator</h2>
          <h3>Choose your test</h3>
        </Col>
      </Row>
      <Row>
        <Col {...colsProps}>
          <span>&rarr;</span>
          <Link href="/quantum">Collects Quantum metrics</Link>
        </Col>
      </Row>
      <Row>
        <Col {...colsProps}>
          <span>&rarr;</span>
          <Link href="/cathocomponents">Collects catho components metrics</Link>
        </Col>
      </Row>
      <Row>
        <Col {...colsProps}>
          <span>&rarr;</span>
          <Link href="/render">Simulates renders</Link>
        </Col>
      </Row>
    </Container>
  </>
);
