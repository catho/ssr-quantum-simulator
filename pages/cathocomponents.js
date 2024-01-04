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
import ComponentViewer from '../components/ComponentViewer';

export default function CathoComponentsPage() {
  return (
    <>
      <Head>
        <title>Catho Components - SSR-Simulator</title>
      </Head>
      <main>
        <section>
          <Container className="GrayContainer">
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
          <Container className=" FlexContainer GrayContainer">
            <Row>
              <Col
                large={6}
                medium={6}
                small={4}
                xmall={2}
                className="ComponentContainer"
              >
                <ComponentViewer
                  name="Password Field"
                  description="Password Field is a component used when a password input with validations is needed."
                >
                  <PasswordField {...passwordProps} />
                </ComponentViewer>
              </Col>
              <Col
                large={6}
                medium={6}
                small={4}
                xmall={2}
                className="ComponentContainer"
              >
                <ComponentViewer
                  name="BarChart"
                  description="A simplebar chart component. Used to show sorted data in columns."
                >
                  <BarChart data={barCharData} />
                </ComponentViewer>
              </Col>
            </Row>
          </Container>
          <Container className="GrayContainer">
            <ComponentViewer
              name="CommentsBox"
              description="A simple way of displaying a form or alert."
            >
              <CommentsBox>
                <p>This is a test message for the CommentsBox component.</p>
              </CommentsBox>
            </ComponentViewer>
          </Container>
          <Container className=" GrayContainer FlexContainer">
            <Row>
              <Col
                large={6}
                medium={6}
                small={4}
                xmall={2}
                className="ComponentContainer"
              >
                <ComponentViewer name="JobCard">
                  <JobCard {...jobCardProps} />
                </ComponentViewer>
              </Col>
              <Col large={6} medium={6} small={4} xmall={2}>
                <Container className="ComponentContainer">
                  <ComponentViewer
                    name="JobNotificationList"
                    description="A simple list of cards of job notifications."
                  >
                    <JobNotificationList data={jobNotificationListMock} />
                  </ComponentViewer>
                </Container>
                <Container className="ComponentContainer">
                  <ComponentViewer
                    name="DayPicker"
                    description="DayPicker allows the user to select a day or a set of days."
                  >
                    <DayPicker />
                  </ComponentViewer>
                </Container>
                <Container className="ComponentContainer">
                  <ComponentViewer
                    name="HorizontalMenu"
                    description="A mobile navigation bar with a text and an icon."
                  >
                    <HorizontalMenu items={horizontalMenuItems} />
                  </ComponentViewer>
                </Container>
              </Col>
            </Row>
          </Container>
          <Container className="GrayContainer">
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
