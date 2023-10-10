import Head from 'next/head';
import {
  HeaderResponsive,
  FooterResponsive,
  HeaderSimple,
  HeaderLoggedResponsive,
  PasswordField,
  BarChart,
  CommentsBox,
  DayPicker,
  FooterSimple,
  HorizontalMenu,
  JobCard,
  JobNotificationList,
} from '@catho-private/catho-components';
import { Container, Row, Col } from '@catho/quantum';
import {
  barCharData,
  jobNotificationListMock,
  horizontalMenuItems,
  jobCardProps,
  passwordProps,
  tagListMocks,
} from '../mocks/mocks';

export default function CathoComponentsPage() {
  return (
    <>
      <Head>
        <title>Catho Components - SSR-Simulator</title>
      </Head>
      <main>
        <section>
          <Container className=" ColoredBackground Margins">
            <h4 className="TextFormattingH4">Headers</h4>
            <h6>
              These are responsive Headers for all Catho applications. They
              follow Catho&apos;s style guide and its needs.
            </h6>
            <h5 className="TextFormattingH5">Header Responsive</h5>
            <HeaderResponsive
              type="B2C"
              isSubMenuOpen={false}
              gtmPrefix="next-header-b2c-nosearch"
              hasSearch
            />
            <h5 className="TextFormattingH5">Logged Header Responsive</h5>
            <HeaderLoggedResponsive
              userProfile="STATUS_I_PROFISSIONAL"
              hasSearch
            />
            <h5 className="TextFormattingH5">Simple Header</h5>
            <HeaderSimple gtmPrefix="next" />
          </Container>
        </section>
        <section>
          <Container className=" FlexContainer ColoredBackground Margins">
            <Row>
              <Col
                large={6}
                medium={4}
                small={4}
                xmall={2}
                className=" RoundedEdges WhiteBackground  PaddingLeftRight"
              >
                <h4 className="TextFormattingH4">Password Field</h4>
                <h6>
                  Password Field is a component used when a password input with
                  validations is needed.
                </h6>
                <PasswordField {...passwordProps} />
              </Col>
              <Col
                large={6}
                medium={4}
                small={4}
                xmall={2}
                className=" RoundedEdges WhiteBackground  Margins PaddingLeftRight"
              >
                <h4 className="TextFormattingH4">BarChart</h4>
                <h6>
                  A simplebar chart component. Used to show sorted data in
                  columns.
                </h6>
                <BarChart data={barCharData} />
              </Col>
            </Row>
          </Container>
        </section>
        <section>
          <Container className=" ColoredBackground Margins">
            <h4 className="TextFormattingH4">CommentsBox</h4>
            <h6>A simple way of displaying a form or alert.</h6>
            <CommentsBox>
              <p>This is a test message for the CommentsBox component.</p>
            </CommentsBox>
          </Container>
        </section>
        <section>
          <Container className=" ColoredBackground FlexContainer">
            <Row>
              <Col
                large={6}
                medium={4}
                small={4}
                xmall={2}
                className="WhiteBackground PaddingLeftRight RoundedEdges "
              >
                <h4 className="TextFormattingH4">JobCard</h4>
                <JobCard {...jobCardProps} />
              </Col>
              <Col large={6} medium={4} small={4} xmall={2}>
                <Container className="WhiteBackground RoundedEdges  Margins PaddingTopBotttom PaddingLeftRight">
                  <h4 className="TextFormattingH4">JobNotificationList</h4>
                  <h6>A simple list of cards of job notifications.</h6>
                  <JobNotificationList data={jobNotificationListMock} />
                </Container>

                <Container className="WhiteBackground RoundedEdges PaddingLeftRight  PaddingTopBotttom Margins">
                  <h4 className="TextFormattingH4">DayPicker</h4>
                  <h6>
                    DayPicker allows the user to select a day or a set of days.
                  </h6>
                  <DayPicker />
                </Container>

                <Container className="WhiteBackground RoundedEdges PaddingLeftRight PaddingTopBotttom ">
                  <h4 className="TextFormattingH4">HorizontalMenu</h4>
                  <h6>A mobile navigation bar with a text and an icon.</h6>
                  <HorizontalMenu items={horizontalMenuItems} />
                </Container>
              </Col>
            </Row>
          </Container>
        </section>
        <section>
          <Container className="ColoredBackground Margins">
            <div>
              <h4 className="TextFormattingH4">Footers</h4>
              <h6>These are footers for all Catho applications.</h6>
            </div>
            <div className="Margins">
              <h5 className="TextFormattingH5">
                Complete Footer Version with TagList
              </h5>
              <FooterResponsive
                gtmPrefix="B2C-google-tag-prefix"
                tagsListContent={tagListMocks}
              />
            </div>
            <div className="Margins">
              <h5 className="TextFormattingH5">Simple Footer Version</h5>
              <FooterSimple />
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}
