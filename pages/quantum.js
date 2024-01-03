import Head from 'next/head';
import {
  Container,
  Row,
  Col,
  Hide,
  GlobalStyle,
  List,
  Link,
  AutoComplete,
  Breadcrumbs,
  ChargeBar,
  TabbedView,
  Card,
  RangeSlider,
  Button,
  Hamburger,
  Alert,
  Badge,
  Tag,
  ProgressBar,
  CircularLoader,
  Skeleton,
  Dropdown,
  Input,
  TextArea,
  SocialButton,
  Icon,
  Avatar,
  Stepper,
  Pagination,
  Socials,
  Accordion,
  Popover,
  Tooltip,
  CheckboxGroup,
  RadioGroup,
  Toggle,
  Form,
  SegmentedControl,
  Tab,
} from '@catho/quantum';

import Carousel from '@catho/quantum/Carousel';
import DropdownLight from '@catho/quantum/DropdownLight';
import ComponentViewer from '../components/ComponentViewer';
import {
  breadcrumbsMockItems,
  accordionMock,
  segmentedControlMock,
  socialMocks,
  cardsMock,
  checkBoxMocks,
  radioGroupMocks,
  dropdownMenuMocks,
} from '../mocks/mocks';

import ControlledModal from '../components/ControlledModal';
import ControlledSnackBar from '../components/ControlledSnackBar';
import ControlledDialog from '../components/ControlledDialog';

export default function Quantum() {
  return (
    <>
      <Head>
        <title>Quantum - SSR-Simulator</title>
      </Head>
      <GlobalStyle />
      <main>
        <section>
          <Container className="GrayContainer">
            <article>
              <Row>
                <Col className=" RoundedEdges  PaddingLeftRight">
                  <ComponentViewer
                    componentName="Breadcrumbs"
                    componentDescription="Breadcrumbs creates a trail of links to help the user to
                      locate the current page within the website's
                      hierarchy."
                  >
                    <Breadcrumbs items={breadcrumbsMockItems} />
                  </ComponentViewer>
                </Col>
              </Row>
              <Row>
                <Col className="RoundedEdges PaddingLeftRight">
                  <ComponentViewer
                    componentName="TabbedView"
                    componentDescription="TabbedView and Tab are components created to organize
                    content into separate views where only one view can be
                    visible at a time."
                  >
                    <TabbedView activeTab="TabTest">
                      <Tab title="TabTest">Tab with TabbedView</Tab>
                      <Tab title="TabTest 2">Second tab with TabbedView</Tab>
                      <Tab title="TabTest 3">Third tab with TabbedView</Tab>
                    </TabbedView>
                  </ComponentViewer>
                </Col>
              </Row>
            </article>
          </Container>
        </section>
        <section>
          <Container className="FlexContainer GrayContainer">
            <Row>
              <Col
                large={6}
                medium={6}
                small={4}
                xmall={2}
                className="RoundedEdges PaddingLeftRight"
              >
                <ComponentViewer
                  componentName="Container"
                  componentDescription="Containers wrap around contents and can be used in
                  different ways."
                >
                  <Container>This is a container.</Container>
                </ComponentViewer>
                <ComponentViewer
                  componentName="Hide"
                  componentDescription="Hide will suppress an element in small devices"
                >
                  <Hide xsmall className="Margins PaddingLeftRight">
                    <Row>
                      <Col className="Borders">Reduce the screen size</Col>
                      <Col className="Borders">to see Hide working</Col>
                    </Row>
                  </Hide>
                </ComponentViewer>
                <ComponentViewer
                  componentName="Link"
                  componentDescription="Link styled according to Catho's Style Guide. Makes
                      it easier to style an anchor tag."
                >
                  <Link href="https://www.catho.com.br">Link</Link>
                </ComponentViewer>
              </Col>
              <Col
                large={6}
                medium={6}
                small={4}
                xmall={2}
                className="RoundedEdges PaddingLeftRight"
              >
                <ComponentViewer
                  componentName="Rows and Colums"
                  componentDescription="Rows are wrappers for columns. Each column has horizontal
                    space column gap (called a gutter) for controlling the
                    space between them."
                >
                  <Row className="Borders">
                    <Col className="Borders" xsmall={2} small={12}>
                      12 Columns Width
                    </Col>
                  </Row>
                  <Row className="Borders">
                    <Col className="Borders" xsmall={2} small={6}>
                      6 Columns Width
                    </Col>
                    <Col className="Borders" xsmall={2} small={6}>
                      6 Columns Width
                    </Col>
                  </Row>
                  <Row className="Borders">
                    <Col className="Borders" xsmall={4} small={4}>
                      4 Columns Width
                    </Col>
                    <Col className="Borders" xsmall={4} small={4}>
                      4 Columns Width
                    </Col>
                    <Col className="Borders" xsmall={4} small={4}>
                      4 Columns Width
                    </Col>
                  </Row>
                </ComponentViewer>
                <ComponentViewer
                  componentName="Lists"
                  componentDescription="List is a component with continuous, vertical indexes of texts or icons."
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
        <section>
          <Container className="FlexContainer GrayContainer">
            <Row>
              <Col
                large={6}
                medium={6}
                small={4}
                xmall={2}
                className="RoundedEdges PaddingLeftRight"
              >
                <ComponentViewer
                  componentName="Autocomplete"
                  componentDescription="Styled input component with autocomplete suggestions."
                >
                  <AutoComplete suggestions={['AutoComplete suggestion']} />
                </ComponentViewer>
                <ComponentViewer
                  componentName="Dropdown"
                  componentDescription="Styled dropwdown menu component following Catho's Style Guide."
                >
                  <Dropdown items={dropdownMenuMocks} />
                </ComponentViewer>
                <ComponentViewer
                  componentName="DropdownLight"
                  componentDescription="Styled dropwdown menu component without the external lib
                      Downshift; therefore it is lighter than the usual
                      Dropdown."
                >
                  <DropdownLight items={dropdownMenuMocks} />
                </ComponentViewer>
                <ComponentViewer
                  componentName="TextArea"
                  componentDescription="Styled text area component following Catho's Style
                      Guide."
                >
                  <TextArea
                    helperText="Some Helper Text"
                    label="TextArea Label"
                    error="Error message"
                  />
                </ComponentViewer>
              </Col>
              <Col
                large={6}
                medium={6}
                small={4}
                xmall={2}
                className="RoundedEdges PaddingLeftRight"
              >
                <ComponentViewer
                  componentName="Card"
                  componentDescription="Cards contain a content and actions about a single subject."
                >
                  <Card>
                    <Card.Header>
                      <Card.HeaderText>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Description>
                          Card Description: Proin massa nulla, rhoncus nec
                          lectus vitae, interdum pharetra est. Etiam sed quam
                          nec nulla lobortis ultrices.
                        </Card.Description>
                      </Card.HeaderText>
                      <Card.Thumbnail src="#" alt="Alternative" />
                    </Card.Header>
                    <Card.Content>Content of the Card</Card.Content>
                    <Card.Footer>Footer of the Card</Card.Footer>
                  </Card>
                </ComponentViewer>
                <ComponentViewer
                  componentName="Alert"
                  componentDescription="Alerts are used for items that need to be labeled,
                      categorized, or organized using keywords."
                >
                  <Alert>Alert Test</Alert>
                </ComponentViewer>
                <ComponentViewer
                  componentName="Accordion"
                  componentDescription="An accordion is a vertical stack of interactive headings
                      used to toggle the display of further information; each
                      item can be &lsquo;collapsed&rsquo;, with just a short
                      label visible, or &lsquo;expanded&rsquo; to show the
                      complete content."
                >
                  <Accordion items={accordionMock} />
                </ComponentViewer>
              </Col>
            </Row>
          </Container>
        </section>
        <section>
          <Container className="FlexContainer GrayContainer">
            <Row>
              <Col
                large={6}
                medium={6}
                small={4}
                xmall={2}
                className="RoundedEdges PaddingLeftRight"
              >
                <ComponentViewer
                  componentName="ChargeBar"
                  componentDescription="ChargeBar shows the level the user is to be able to
                    complete their stats to the maximum."
                >
                  <ChargeBar />
                </ComponentViewer>
                <ComponentViewer
                  componentName="RangeSlider"
                  componentDescription="RangeSlider is a component to select a value from a
                      predefined range. Chaneging the component's props,
                      it's possible to set the minimum and maximum values,
                      format the tooltip and labels, or disable the component
                      itself."
                >
                  <RangeSlider />
                </ComponentViewer>
                <ComponentViewer
                  componentName="ProgressBar"
                  componentDescription="Progress bars are used to give the user a feedback on the
                      progress of a process or an action."
                >
                  <ProgressBar />
                </ComponentViewer>
                <ComponentViewer
                  componentName="Stepper"
                  componentDescription="The Stepper component is a visual tool to show progress
                      using logical and numbered steps."
                >
                  <Stepper />
                </ComponentViewer>
                <ComponentViewer
                  componentName="CircularLoader"
                  componentDescription="The CircularLoader component is a visual tool to show something is loading."
                >
                  <CircularLoader />
                </ComponentViewer>
                <ComponentViewer
                  componentName="Skeleton"
                  componentDescription="The Skeleton is a component that replaces others while
                      they are loading or not ready to render."
                >
                  <Skeleton />
                </ComponentViewer>
                <ComponentViewer
                  componentName="Pagination"
                  componentDescription="Add pagination buttons to help splitting up long contents
                      into shorter, easy to understand blocks."
                >
                  <Pagination totalPages={4} activePage={1} />
                </ComponentViewer>
              </Col>
              <Col
                large={6}
                medium={6}
                small={4}
                xmall={2}
                className="RoundedEdges PaddingLeftRight"
              >
                <ComponentViewer
                  componentName="Button"
                  componentDescription="Buttons express what will happen when the user clicks or
                      touches it."
                >
                  <Button>Simple Button</Button>
                </ComponentViewer>
                <ComponentViewer
                  componentName="ControlledDialog"
                  componentDescription="ControlledDialog is a button that activates a dialog
                      window in front of all content. It is commonly used to
                      provide an important information or ask for some user
                      interaciont."
                >
                  <ControlledDialog />
                </ComponentViewer>
                <ComponentViewer
                  componentName="Hamburger"
                  componentDescription="Hamburger component is used for opening mobile menu. You
                      can also pass a aria-label description to inform screen
                      readers that there are new notifications."
                >
                  <Hamburger inverted />
                </ComponentViewer>
                <ComponentViewer
                  componentName="SegmentedControl"
                  componentDescription="The Segmented control component is a linear set of two or
                      more alternation buttons, with all segments with same
                      width."
                >
                  <SegmentedControl
                    name="items-text"
                    items={segmentedControlMock}
                  />
                </ComponentViewer>
                <ComponentViewer
                  componentName="ControlledModal"
                  componentDescription="Modals inform users about a task and can contain critical
                      information, require decisions, or involve multiple tasks.
                      A ControlledModal contains control buttons, such as
                      &lsquo;Cancel&rsquo; and &lsquo;Delete&rsquo;."
                >
                  <ControlledModal />
                </ComponentViewer>
                <ComponentViewer
                  componentName="ControlledSnackBar"
                  componentDescription="SnackBars are used to show an alert about the action that
                      have just been made: delete or archive content by accident
                      (undo), resend messages that not been sent for some
                      reason, or try to reconnect to internet (retry). A
                      ControlledSnackBar has control buttons."
                >
                  <ControlledSnackBar />
                </ComponentViewer>
              </Col>
            </Row>
          </Container>
        </section>
        <section>
          <Container className="FlexContainer GrayContainer">
            <Row>
              <Col
                large={6}
                medium={6}
                small={4}
                xmall={2}
                className="RoundedEdges PaddingLeftRight"
              >
                <ComponentViewer
                  componentName="Badge"
                  componentDescription="Badges are used for showing the quantity of something,
                      such as warnings, inbox messages and others."
                >
                  <Badge>
                    <Tag>Example Badge</Tag>
                  </Badge>
                </ComponentViewer>
                <ComponentViewer
                  componentName="Tag"
                  componentDescription="Tags are used for items that need to be labeled,
                      categorized, or organized using keywords that describe
                      them."
                >
                  <Tag>Example Tag</Tag>
                </ComponentViewer>
              </Col>
              <Col
                large={6}
                medium={6}
                small={4}
                xmall={2}
                className="RoundedEdges PaddingLeftRight"
              >
                <ComponentViewer
                  componentName="Popover"
                  componentDescription="Tags are used for items that need to be labeled,
                      categorized, or organized using keywords that describe
                      them."
                >
                  <Popover trigger="Click Me" onClose={() => {}}>
                    Example PopOver Trigger
                  </Popover>
                </ComponentViewer>
                <ComponentViewer
                  componentName="Tooltip"
                  componentDescription="Tooltips provide additional information upon hover or
                      focus. They often contain helper text that is contextual
                      to an element."
                >
                  <article className="ComponentContainer">
                    <Tooltip placement="top" text="Example Tooltip Text">
                      Pass the pointer over me
                    </Tooltip>
                  </article>
                </ComponentViewer>
              </Col>
            </Row>
          </Container>
        </section>
        <section>
          <Container className="GrayContainer">
            <ComponentViewer
              componentName="Carousel"
              componentDescription="Carousel is a component that align cards with a series of
                content. Works with images, texts, or custom markups. Also
                includes support for indicators and previous/next controls."
            >
              <Carousel cards={cardsMock} />
            </ComponentViewer>
          </Container>
        </section>
        <section>
          <Container className="FlexContainer GrayContainer">
            <Row>
              <Col
                large={6}
                medium={6}
                small={4}
                xmall={2}
                className="RoundedEdges PaddingLeftRight"
              >
                <ComponentViewer
                  componentName="Social Button"
                  componentDescription="These buttons are used to run actions related to their
                      respective providers. Example: login with OAuth API from
                      Google."
                >
                  <div className="FlexContainer">
                    <SocialButton provider="facebook" />
                    <SocialButton provider="google" />
                  </div>
                </ComponentViewer>
                <ComponentViewer componentName="Info Icon">
                  <Icon name="info" />
                </ComponentViewer>
              </Col>
              <Col
                large={6}
                medium={6}
                small={4}
                xmall={2}
                className="RoundedEdges PaddingLeftRight"
              >
                <ComponentViewer
                  componentName="Avatar"
                  componentDescription="Avatars are used to display a thumbnail of the u
                      ser's profile picture or an user icon if the picture
                      is not defined. It can also display a dot to alert that
                      there is some notification."
                >
                  <Avatar />
                </ComponentViewer>
                <ComponentViewer
                  componentName="Socials"
                  componentDescription="Socials show the icons of respective Social Medias."
                >
                  <Socials items={socialMocks} />
                </ComponentViewer>
              </Col>
            </Row>
          </Container>
        </section>
        <section>
          <Container className="FlexContainer GrayContainer PaddingLeftRight Overflow">
            <Row>
              <Col
                large={6}
                medium={6}
                small={4}
                xmall={2}
                className="RoundedEdges PaddingLeftRight"
              >
                <ComponentViewer
                  componentName="Checkbox Group"
                  componentDescription="Gets values from a single onChange callback prop and apply
                      a single error message to a group of checkboxes."
                >
                  <CheckboxGroup error="Some error" options={checkBoxMocks} />
                </ComponentViewer>
                <ComponentViewer
                  componentName="Radio Group"
                  componentDescription="Radio group is a list of radio buttons that are used when
                      a list of two or more options are mutually exclusive,
                      meaning the user must select only one option."
                >
                  <RadioGroup
                    name="Radio Group Example"
                    options={radioGroupMocks}
                  />
                </ComponentViewer>
                <ComponentViewer
                  componentName="Toggle"
                  componentDescription="Toggle is a control that is used to quickly switch between
                      two possible states."
                >
                  <Toggle id="right" />
                </ComponentViewer>
              </Col>
              <Col
                large={6}
                medium={6}
                small={4}
                xmall={2}
                className="RoundedEdges PaddingLeftRight"
              >
                <ComponentViewer
                  componentName="Form"
                  componentDescription="A Form displays a set of related user input fields in a
                    structured way, some other components like validation adds
                    check behavior of the data against a set of criteria before
                    passing it along to the server."
                >
                  <Form>
                    <Input label="Input With Generic Label" />
                    <Input
                      label="Input With Error Message"
                      error="Some error"
                    />
                    <Input label="Disabled Input" disabled />
                    <Input
                      label="Input With Description Label"
                      descriptionLabel="Some Description Label"
                    />
                    <Input
                      label="Input With Helper Text"
                      helperText="Some Helper Text"
                    />
                    <Input type="search" label="Searchable Input" />
                    <Input.CEP label="CEP" />
                    <Input.CNPJ label="CNPJ" />
                    <Input.CPF label="CPF" />
                    <Input.Date label="Date" />
                    <Input.Phone label="Phone Number" />
                    <Input.Password label="Password" />
                  </Form>
                </ComponentViewer>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </>
  );
}
