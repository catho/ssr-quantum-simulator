import React from "react";
import Container from "@catho/quantum/Grid/sub-components/Container";
import Col from "@catho/quantum/Grid/sub-components/Col";
import Row from "@catho/quantum/Grid/sub-components/Row";
import Link from "./styles/style";
import Head from "next/head"; 

const colsProps = {
  medium: 12,
};

export default () => (
  <>
  <Container>
    <Row>
        <Col {...colsProps}>
          <h3>To monitoring page ...</h3>
          <p>Here the instructions to collect the payload in Browser and the bundle size:</p>

          <ol>
            <li>You should be here via task runner <code>yarn analyzer</code></li>
            <li>the libs version must be inserted without "^" signal in package.json. We must test the real version of the package</li>
            <li>keep the yarn lock from master</li>
            <li>choose the page do you want to collect, Quantum or Catho Components</li>
            <li>pages will open, find the corresponding library in its chunk (with same name)</li>
            <li>reloads the page do you want to collect</li>
            <li>point the mouse in node_modules of the page (quantum or cathocomponents)</li>
            <li>collect the bundle size by the <strong>"Parsed size"</strong> item </li>
            <li>collect the lib payload in browser by the <strong>"Gziped size"</strong> item </li>
          </ol>
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
