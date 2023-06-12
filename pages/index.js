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
