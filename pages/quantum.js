import Head from 'next/head';
import { Container, Row, Col, Hide, GlobalStyle, List } from '@catho/quantum';

import ComponentViewer from '../components/ComponentViewer';

export default function Quantum() {
  return (
    <>
      <Head>
        <title>Quantum - SSR-Simulator</title>
      </Head>
      <GlobalStyle />
      <main>
        <section>
          <Container className="FlexContainer GrayContainer">
            <Row>
              <Col className="RoundedEdges PaddingLeftRight">
                <ComponentViewer
                  name="Container"
                  description="Containers wrap around contents and can be used in
                  different ways."
                >
                  <Container>This is a container.</Container>
                </ComponentViewer>
                <ComponentViewer
                  name="Hide"
                  description="Hide will suppress an element in small devices"
                >
                  <Hide xsmall className="Margins PaddingLeftRight">
                    <Row>
                      <Col className="Borders">Reduce the screen size</Col>
                      <Col className="Borders">to see Hide working</Col>
                    </Row>
                  </Hide>
                </ComponentViewer>
              </Col>
            </Row>
            <Row>
              <Col className="RoundedEdges PaddingLeftRight">
                <ComponentViewer
                  name="Rows and Colums"
                  description="Rows are wrappers for columns. Each column has horizontal
                    space column gap (called a gutter) for controlling the
                    space between them."
                >
                  <strong
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      width: '100%',
                    }}
                  >
                    XSMALL
                  </strong>
                  <br />
                  MAX-COLUMNS = 4
                  <br />
                  <Row className="Borders">
                    <Col className="Borders" xsmall={2}>
                      xsmall={2}
                    </Col>
                  </Row>
                  <Row className="Borders">
                    <Col className="Borders" xsmall={2}>
                      xsmall={2}
                    </Col>
                    <Col className="Borders" xsmall={2}>
                      xsmall={2}
                    </Col>
                  </Row>
                  <Row className="Borders">
                    <Col className="Borders" xsmall={2}>
                      xsmall={2}
                    </Col>
                    <Col className="Borders" xsmall={2}>
                      xsmall={2}
                    </Col>
                    <Col className="Borders" xsmall={2}>
                      xsmall={2}
                    </Col>
                  </Row>
                  <Row className="Borders">
                    <Col className="Borders" xsmall={4}>
                      xsmall={4}
                    </Col>
                  </Row>
                  <Row className="Borders">
                    <Col className="Borders" xsmall={4}>
                      xsmall={4}
                    </Col>
                    <Col className="Borders" xsmall={4}>
                      xsmall={4}
                    </Col>
                  </Row>
                  -- start no-gutters
                  <Row className="Borders">
                    <Col className="Borders" no-gutters xsmall={2}>
                      xsmall={2}
                    </Col>
                    <Col className="Borders" no-gutters xsmall={2}>
                      xsmall={2}
                    </Col>
                  </Row>
                  <Row className="Borders">
                    <Col className="Borders" no-gutters xsmall={4}>
                      xsmall={4}
                    </Col>
                  </Row>
                  -- end no-gutters
                  <br />
                  -- start Offset
                  <Row className="Borders">
                    <Col className="Borders" xsmall-offset={1} xsmall={2}>
                      xsmall={2}
                    </Col>
                    <Col className="Borders" xsmall={2}>
                      xsmall={2}
                    </Col>
                  </Row>
                  <Row className="Borders">
                    <Col className="Borders" xsmall-offset={2} xsmall={2}>
                      xsmall={2}
                    </Col>
                    <Col className="Borders" xsmall={2}>
                      xsmall={2}
                    </Col>
                  </Row>
                  -- end Offset
                  <br />
                  -- start No-gutter and Offset
                  <Row className="Borders">
                    <Col
                      className="Borders"
                      no-gutters
                      xsmall-offset={1}
                      xsmall={2}
                    >
                      xsmall={2}
                    </Col>
                    <Col className="Borders" xsmall={2}>
                      xsmall={2}
                    </Col>
                  </Row>
                  <Row className="Borders">
                    <Col
                      className="Borders"
                      no-gutters
                      xsmall-offset={2}
                      xsmall={2}
                    >
                      xsmall={2}
                    </Col>
                    <Col className="Borders" xsmall={2}>
                      xsmall={2}
                    </Col>
                  </Row>
                  -- end No-gutter and Offset
                  <br />
                  -- start Nested
                  <Row className="Borders">
                    <Col className="Borders" no-gutters xsmall={4}>
                      <Row className="B">
                        <Col style={{ backgroundColor: 'gray' }}>
                          {' '}
                          without xsmall
                        </Col>
                        <Col xsmall={2} style={{ backgroundColor: 'gray' }}>
                          xsmall={2}
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  -- end Nested
                  <strong
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      width: '100%',
                    }}
                  >
                    SMALL
                  </strong>
                  <br />
                  MAX-COLUMNS = 8
                  <br />
                  <Row className="Borders">
                    <Col className="Borders" small={2}>
                      small={2}
                    </Col>
                  </Row>
                  <Row className="Borders">
                    <Col className="Borders" small={2}>
                      small={2}
                    </Col>
                    <Col className="Borders" small={2}>
                      small={2}
                    </Col>
                    <Col className="Borders" small={2}>
                      small={2}
                    </Col>
                    <Col className="Borders" small={2}>
                      small={2}
                    </Col>
                  </Row>
                  <Row className="Borders">
                    <Col className="Borders" small={2}>
                      small={2}
                    </Col>
                    <Col className="Borders" small={2}>
                      small={2}
                    </Col>
                    <Col className="Borders" small={2}>
                      small={2}
                    </Col>
                    <Col className="Borders" small={2}>
                      small={2}
                    </Col>
                    <Col className="Borders" small={2}>
                      small={2}
                    </Col>
                  </Row>
                  <Row className="Borders">
                    <Col className="Borders" small={8}>
                      small={8}
                    </Col>
                  </Row>
                  <Row className="Borders">
                    <Col className="Borders" small={8}>
                      small={8}
                    </Col>
                    <Col className="Borders" small={8}>
                      small={8}
                    </Col>
                  </Row>
                  -- start no-gutter
                  <Row className="Borders">
                    <Col className="Borders" no-gutters small={2}>
                      small={2}
                    </Col>
                    <Col className="Borders" no-gutters small={2}>
                      small={2}
                    </Col>
                    <Col className="Borders" no-gutters small={2}>
                      small={2}
                    </Col>
                    <Col className="Borders" no-gutters small={2}>
                      small={2}
                    </Col>
                  </Row>
                  <Row className="Borders">
                    <Col className="Borders" no-gutters small={8}>
                      small={8}
                    </Col>
                  </Row>
                  -- end no-gutter
                  <br />
                  -- start Offset
                  <Row className="Borders">
                    <Col className="Borders" small-offset={1} small={2}>
                      small={2}
                    </Col>
                    <Col className="Borders" small={2}>
                      small={2}
                    </Col>
                    <Col className="Borders" small={2}>
                      small={2}
                    </Col>
                    <Col className="Borders" small={2}>
                      small={2}
                    </Col>
                  </Row>
                  <Row className="Borders">
                    <Col className="Borders" small-offset={2} small={2}>
                      small={2}
                    </Col>
                    <Col className="Borders" small={2}>
                      small={2}
                    </Col>
                    <Col className="Borders" small={2}>
                      small={2}
                    </Col>
                    <Col className="Borders" small={2}>
                      small={2}
                    </Col>
                  </Row>
                  -- end Offset
                  <br />
                  -- start Offset and no-gutter
                  <Row className="Borders">
                    <Col
                      className="Borders"
                      no-gutters
                      small-offset={1}
                      small={2}
                    >
                      small={2}
                    </Col>
                    <Col className="Borders" small={2}>
                      small={2}
                    </Col>
                    <Col className="Borders" small={2}>
                      small={2}
                    </Col>
                    <Col className="Borders" small={2}>
                      small={2}
                    </Col>
                  </Row>
                  <Row className="Borders">
                    <Col
                      className="Borders"
                      no-gutters
                      small-offset={2}
                      small={2}
                    >
                      small={2}
                    </Col>
                    <Col className="Borders" small={2}>
                      small={2}
                    </Col>
                    <Col className="Borders" small={2}>
                      small={2}
                    </Col>
                    <Col className="Borders" small={2}>
                      small={2}
                    </Col>
                  </Row>
                  -- end Offset and no-gutter -- start Nested
                  <Row className="Borders">
                    <Col className="Borders" no-gutters small={8}>
                      <Row className="B">
                        <Col style={{ backgroundColor: 'gray' }}>
                          {' '}
                          without small
                        </Col>
                        <Col small={4} style={{ backgroundColor: 'gray' }}>
                          small={4}
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  -- end Nested
                  <br />
                  <strong
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      width: '100%',
                    }}
                  >
                    MEDIUM
                  </strong>
                  <br />
                  MAX-COLUMNS = 12
                  <br />
                  <Row className="Borders">
                    <Col className="Borders" medium={2}>
                      medium={2}
                    </Col>
                  </Row>
                  <Row className="Borders">
                    <Col className="Borders" medium={2}>
                      medium={2}
                    </Col>
                    <Col className="Borders" medium={2}>
                      medium={2}
                    </Col>
                    <Col className="Borders" medium={2}>
                      medium={2}
                    </Col>
                    <Col className="Borders" medium={2}>
                      medium={2}
                    </Col>
                    <Col className="Borders" medium={2}>
                      medium={2}
                    </Col>
                    <Col className="Borders" medium={2}>
                      medium={2}
                    </Col>
                  </Row>
                  <Row className="Borders">
                    <Col className="Borders" medium={2}>
                      medium={2}
                    </Col>
                    <Col className="Borders" medium={2}>
                      medium={2}
                    </Col>
                    <Col className="Borders" medium={2}>
                      medium={2}
                    </Col>
                    <Col className="Borders" medium={2}>
                      medium={2}
                    </Col>
                    <Col className="Borders" medium={2}>
                      medium={2}
                    </Col>
                    <Col className="Borders" medium={2}>
                      medium={2}
                    </Col>
                    <Col className="Borders" medium={2}>
                      medium={2}
                    </Col>
                  </Row>
                  <Row className="Borders">
                    <Col className="Borders" medium={12}>
                      medium={12}
                    </Col>
                  </Row>
                  <Row className="Borders">
                    <Col className="Borders" medium={12}>
                      medium={12}
                    </Col>
                    <Col className="Borders" medium={12}>
                      medium={12}
                    </Col>
                  </Row>
                  -- start no-gutters
                  <Row className="Borders">
                    <Col className="Borders" no-gutters medium={2}>
                      medium={2}
                    </Col>
                    <Col className="Borders" no-gutters medium={2}>
                      medium={2}
                    </Col>
                    <Col className="Borders" no-gutters medium={2}>
                      medium={2}
                    </Col>
                    <Col className="Borders" no-gutters medium={2}>
                      medium={2}
                    </Col>
                    <Col className="Borders" no-gutters medium={2}>
                      medium={2}
                    </Col>
                    <Col className="Borders" no-gutters medium={2}>
                      medium={2}
                    </Col>
                  </Row>
                  <Row className="Borders">
                    <Col className="Borders" no-gutters medium={12}>
                      medium={12}
                    </Col>
                  </Row>
                  -- end no-gutters
                  <br />
                  -- start Offset
                  <Row className="Borders">
                    <Col className="Borders" medium-offset={1} medium={2}>
                      medium={2}
                    </Col>
                    <Col className="Borders" medium={2}>
                      medium={2}
                    </Col>
                    <Col className="Borders" medium={2}>
                      medium={2}
                    </Col>
                    <Col className="Borders" medium={2}>
                      medium={2}
                    </Col>
                    <Col className="Borders" medium={2}>
                      medium={2}
                    </Col>
                    <Col className="Borders" medium={2}>
                      medium={2}
                    </Col>
                  </Row>
                  <Row className="Borders">
                    <Col className="Borders" medium-offset={2} medium={2}>
                      medium={2}
                    </Col>
                    <Col className="Borders" medium={2}>
                      medium={2}
                    </Col>
                    <Col className="Borders" medium={2}>
                      medium={2}
                    </Col>
                    <Col className="Borders" medium={2}>
                      medium={2}
                    </Col>
                    <Col className="Borders" medium={2}>
                      medium={2}
                    </Col>
                    <Col className="Borders" medium={2}>
                      medium={2}
                    </Col>
                  </Row>
                  -- end Offset
                  <br />
                  -- start Offset no-gutter
                  <Row className="Borders">
                    <Col
                      className="Borders"
                      no-gutters
                      medium-offset={1}
                      medium={2}
                    >
                      medium={2}
                    </Col>
                    <Col className="Borders" medium={2}>
                      medium={2}
                    </Col>
                    <Col className="Borders" medium={2}>
                      medium={2}
                    </Col>
                    <Col className="Borders" medium={2}>
                      medium={2}
                    </Col>
                    <Col className="Borders" medium={2}>
                      medium={2}
                    </Col>
                    <Col className="Borders" medium={2}>
                      medium={2}
                    </Col>
                  </Row>
                  <Row className="Borders">
                    <Col
                      className="Borders"
                      no-gutters
                      medium-offset={2}
                      medium={2}
                    >
                      medium={2}
                    </Col>
                    <Col className="Borders" medium={2}>
                      medium={2}
                    </Col>
                    <Col className="Borders" medium={2}>
                      medium={2}
                    </Col>
                    <Col className="Borders" medium={2}>
                      medium={2}
                    </Col>
                    <Col className="Borders" medium={2}>
                      medium={2}
                    </Col>
                    <Col className="Borders" medium={2}>
                      medium={2}
                    </Col>
                  </Row>
                  -- end Offset and no-gutter -- start Nested
                  <Row className="Borders">
                    <Col className="Borders" no-gutters medium={12}>
                      <Row className="B">
                        <Col style={{ backgroundColor: 'gray' }}>
                          {' '}
                          without medium
                        </Col>
                        <Col medium={6} style={{ backgroundColor: 'gray' }}>
                          medium={6}
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  -- end Nested
                  <br />
                  <strong
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      width: '100%',
                    }}
                  >
                    LARGE
                  </strong>
                  <br />
                  MAX-COLUMNS = 12
                  <br />
                  <Row className="Borders">
                    <Col className="Borders" large={2}>
                      large={2}
                    </Col>
                  </Row>
                  <Row className="Borders">
                    <Col className="Borders" large={2}>
                      large={2}
                    </Col>
                    <Col className="Borders" large={2}>
                      large={2}
                    </Col>
                    <Col className="Borders" large={2}>
                      large={2}
                    </Col>
                    <Col className="Borders" large={2}>
                      large={2}
                    </Col>
                    <Col className="Borders" large={2}>
                      large={2}
                    </Col>
                    <Col className="Borders" large={2}>
                      large={2}
                    </Col>
                  </Row>
                  <Row className="Borders">
                    <Col className="Borders" large={2}>
                      large={2}
                    </Col>
                    <Col className="Borders" large={2}>
                      large={2}
                    </Col>
                    <Col className="Borders" large={2}>
                      large={2}
                    </Col>
                    <Col className="Borders" large={2}>
                      large={2}
                    </Col>
                    <Col className="Borders" large={2}>
                      large={2}
                    </Col>
                    <Col className="Borders" large={2}>
                      large={2}
                    </Col>
                    <Col className="Borders" large={2}>
                      large={2}
                    </Col>
                  </Row>
                  <Row className="Borders">
                    <Col className="Borders" large={12}>
                      large={12}
                    </Col>
                  </Row>
                  <Row className="Borders">
                    <Col className="Borders" large={12}>
                      large={12}
                    </Col>
                    <Col className="Borders" large={12}>
                      large={12}
                    </Col>
                  </Row>
                  -- start no-gutters
                  <Row className="Borders">
                    <Col className="Borders" no-gutters large={12}>
                      large={12}
                    </Col>
                  </Row>
                  <Row className="Borders">
                    <Col className="Borders" no-gutters large={2}>
                      large={2}
                    </Col>
                    <Col className="Borders" no-gutters large={2}>
                      large={2}
                    </Col>
                    <Col className="Borders" no-gutters large={2}>
                      large={2}
                    </Col>
                    <Col className="Borders" no-gutters large={2}>
                      large={2}
                    </Col>
                    <Col className="Borders" no-gutters large={2}>
                      large={2}
                    </Col>
                    <Col className="Borders" no-gutters large={2}>
                      large={2}
                    </Col>
                  </Row>
                  -- end no-gutters
                  <br />
                  -- start Offset
                  <Row className="Borders">
                    <Col className="Borders" large-offset={1} large={2}>
                      large={2}
                    </Col>
                    <Col className="Borders" large={2}>
                      large={2}
                    </Col>
                    <Col className="Borders" large={2}>
                      large={2}
                    </Col>
                    <Col className="Borders" large={2}>
                      large={2}
                    </Col>
                    <Col className="Borders" large={2}>
                      large={2}
                    </Col>
                    <Col className="Borders" large={2}>
                      large={2}
                    </Col>
                  </Row>
                  <Row className="Borders">
                    <Col className="Borders" large-offset={2} large={2}>
                      large={2}
                    </Col>
                    <Col className="Borders" large={2}>
                      large={2}
                    </Col>
                    <Col className="Borders" large={2}>
                      large={2}
                    </Col>
                    <Col className="Borders" large={2}>
                      large={2}
                    </Col>
                    <Col className="Borders" large={2}>
                      large={2}
                    </Col>
                    <Col className="Borders" large={2}>
                      large={2}
                    </Col>
                  </Row>
                  -- end Offset
                  <br />
                  -- start Offset and no-gutters
                  <Row className="Borders">
                    <Col
                      className="Borders"
                      no-gutters
                      large-offset={1}
                      large={2}
                    >
                      large={2}
                    </Col>
                    <Col className="Borders" large={2}>
                      large={2}
                    </Col>
                    <Col className="Borders" large={2}>
                      large={2}
                    </Col>
                    <Col className="Borders" large={2}>
                      large={2}
                    </Col>
                    <Col className="Borders" large={2}>
                      large={2}
                    </Col>
                    <Col className="Borders" large={2}>
                      large={2}
                    </Col>
                  </Row>
                  <Row className="Borders">
                    <Col
                      className="Borders"
                      no-gutters
                      large-offset={2}
                      large={2}
                    >
                      large={2}
                    </Col>
                    <Col className="Borders" large={2}>
                      large={2}
                    </Col>
                    <Col className="Borders" large={2}>
                      large={2}
                    </Col>
                    <Col className="Borders" large={2}>
                      large={2}
                    </Col>
                    <Col className="Borders" large={2}>
                      large={2}
                    </Col>
                    <Col className="Borders" large={2}>
                      large={2}
                    </Col>
                  </Row>
                  -- end Offset and no-gutters -- start Nested
                  <Row className="Borders">
                    <Col className="Borders" no-gutters large={12}>
                      <Row className="B">
                        <Col style={{ backgroundColor: 'gray' }}>
                          {' '}
                          without large
                        </Col>
                        <Col large={6} style={{ backgroundColor: 'gray' }}>
                          large={6}
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  -- end Nested
                  <strong
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      width: '100%',
                    }}
                  >
                    ALL PROPS
                  </strong>
                  <Row className="Borders">
                    <Col
                      className="Borders"
                      xsmall={2}
                      small={6}
                      medium={8}
                      large={10}
                    >
                      Relou uordi!
                    </Col>
                  </Row>
                </ComponentViewer>
                <ComponentViewer
                  name="Lists"
                  description="List is a component with continuous, vertical indexes of texts or icons."
                >
                  <List>
                    <List.Header>List Header</List.Header>
                    <br />
                    <List.SubHeader>List Subheaders</List.SubHeader>
                    <br />
                    <List.Content>
                      <List.Item>List</List.Item>
                      <br />
                    </List.Content>
                  </List>
                </ComponentViewer>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </>
  );
}
