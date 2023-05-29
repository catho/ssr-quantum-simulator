import React from "react";
import { Container, Row, Col } from "@catho/quantum";
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
          <Link href="/quantum">Quantum</Link>
        </Col>
      </Row>
      <Row>
        <Col {...colsProps}>
          <span>&rarr;</span>
          <Link href="/cathocomponents">Catho components</Link>
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
