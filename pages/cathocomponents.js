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
          <Container className="ColoredContainer">
            <article>
              <h4 className="ComponentTitle">Headers</h4>
              <h6>
                These are responsive Headers for all Catho applications. They
                follow Catho&apos;s style guide and its needs.
              </h6>
              <article>
                <h5 className="ComponentSubTitle">Header Responsive</h5>
                <HeaderResponsive
                  type="B2C"
                  isSubMenuOpen={false}
                  gtmPrefix="next-header-b2c-nosearch"
                  hasSearch
                />
              </article>
              <article>
                <h5 className="ComponentSubTitle">Logged Header Responsive</h5>
                <HeaderLoggedResponsive
                  userProfile="STATUS_I_PROFISSIONAL"
                  hasSearch
                />
                <h5 className="ComponentSubTitle">Simple Header</h5>
                <HeaderSimple gtmPrefix="next" />
              </article>
            </article>
          </Container>
          <Container className=" FlexContainer ColoredContainer">
            <Row>
              <Col
                large={6}
                medium={6}
                small={4}
                xmall={2}
                className="ComponentContainer"
              >
                <article>
                  <h4 className="ComponentTitle">Password Field</h4>
                  <h6>
                    Password Field is a component used when a password input
                    with validations is needed.
                  </h6>
                  <PasswordField {...passwordProps} />
                </article>
              </Col>
              <Col
                large={6}
                medium={6}
                small={4}
                xmall={2}
                className="ComponentContainer"
              >
                <article>
                  <h4 className="ComponentTitle">BarChart</h4>
                  <h6>
                    A simplebar chart component. Used to show sorted data in
                    columns.
                  </h6>
                  <BarChart data={barCharData} />
                </article>
              </Col>
            </Row>
          </Container>
          <Container className="ColoredContainer">
            <article>
              <h4 className="ComponentTitle">CommentsBox</h4>
              <h6>A simple way of displaying a form or alert.</h6>
              <CommentsBox>
                <p>This is a test message for the CommentsBox component.</p>
              </CommentsBox>
            </article>
          </Container>
          <Container className=" ColoredContainer FlexContainer">
            <Row>
              <Col
                large={6}
                medium={6}
                small={4}
                xmall={2}
                className="ComponentContainer"
              >
                <article>
                  <h4 className="ComponentTitle">JobCard</h4>
                  <JobCard {...jobCardProps} />
                </article>
              </Col>
              <Col large={6} medium={6} small={4} xmall={2}>
                <Container className="ComponentContainer">
                  <article>
                    <h4 className="ComponentTitle">JobNotificationList</h4>
                    <h6>A simple list of cards of job notifications.</h6>
                    <JobNotificationList data={jobNotificationListMock} />
                  </article>
                </Container>

                <Container className="ComponentContainer">
                  <article>
                    <h4 className="ComponentTitle">DayPicker</h4>
                    <h6>
                      DayPicker allows the user to select a day or a set of
                      days.
                    </h6>
                    <DayPicker />
                  </article>
                </Container>
                <Container className="ComponentContainer">
                  <article>
                    <h4 className="ComponentTitle">HorizontalMenu</h4>
                    <h6>A mobile navigation bar with a text and an icon.</h6>
                    <HorizontalMenu items={horizontalMenuItems} />
                  </article>
                </Container>
              </Col>
            </Row>
          </Container>
          <Container className="ColoredContainer">
            <article>
              <h4 className="ComponentTitle">Footers</h4>
              <h6>These are footers for all Catho applications.</h6>
              <div className="Margins">
                <article>
                  <h5 className="ComponentSubTitle">
                    Complete Footer Version with TagList
                  </h5>
                  <FooterResponsive
                    gtmPrefix="B2C-google-tag-prefix"
                    tagsListContent={tagListMocks}
                  />
                </article>
              </div>
              <div className="Margins">
                <article>
                  <h5 className="ComponentSubTitle">Simple Footer Version</h5>
                  <FooterSimple />
                </article>
              </div>
            </article>
          </Container>
        </section>
      </main>
    </>
  );
}
