import Head from 'next/head';
import 'index.css';
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
    <div className="ComponentsContainer">
      <Head>
        <title>Quantum - SSR-Simulator</title>
      </Head>
      <GlobalStyle />
      <div className="MarginTopBottom ColoredBackground PaddingTopBotttom">
        <h4 className="TextFormattingH4 PaddingLeftRight">Breadcrumbs</h4>
        <h6 className="TextFormattingH6 PaddingLeftRight">
          Breadcrumbs creates a trail of links to help the user to locate the
          current page within the website&apos;s hierarchy.
        </h6>

        <Breadcrumbs items={breadcrumbsMockItems} />

        <div className="MarginTopBottom PaddingLeftRight">
          <h4 className="TextFormattingH4">TabbedView</h4>
          <h6 className="TextFormattingH6">
            TabbedView and Tab are components created to organize content into
            separate views where only one view can be visible at a time.
          </h6>
          <TabbedView activeTab="TabTest">
            <Tab title="TabTest">Tab with TabbedView</Tab>
            <Tab title="TabTest 2">Second tab with TabbedView</Tab>
            <Tab title="TabTest 3">Third tab with TabbedView</Tab>
          </TabbedView>
        </div>
      </div>

      <div className="FlexContainer  ColoredBackground  ComponentsContainer">
        <div>
          <div className="WhiteBackground  RoundedEdges ComponentsContainer Width">
            <h4 className="TextFormattingH4">Container</h4>
            <h6 className="TextFormattingH6">
              Containers wrap around contents and can be used in different ways.
            </h6>
            <Container>This is a container.</Container>
          </div>
          <div className="WhiteBackground  RoundedEdges ComponentsContainer Width">
            <h4 className="TextFormattingH4">Hide</h4>
            <h6 className="TextFormattingH6">
              Hide will suppress an element in small devices.
            </h6>
            <Hide xsmall>
              <Row>
                <Col className="Borders">Reduce the screen size</Col>
                <Col className="Borders">to see Hide working</Col>
              </Row>
            </Hide>
          </div>
          <div className="WhiteBackground  RoundedEdges ComponentsContainer Width">
            <h4 className="TextFormattingH4">Link</h4>
            <h6 className="TextFormattingH6">
              Link styled according to Catho&apos;s Style Guide. Makes it easier
              to style an anchor tag.
            </h6>
            <Link href="https://www.catho.com.br">Link</Link>
          </div>
        </div>
        <div>
          <div className="WhiteBackground  RoundedEdges ComponentsContainer Width">
            <div>
              <h4 className="TextFormattingH4">Rows and Colums</h4>
              <h6 className="TextFormattingH6">
                Rows are wrappers for columns. Each column has horizontal space
                column gap (called a gutter) for controlling the space between
                them.
              </h6>
            </div>
            <div className="ComponentsContainer">
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
            </div>
          </div>
          <div className="RoundedEdges ComponentsContainer Width">
            <div className=" WhiteBackground  RoundedEdges ComponentsContainer Width">
              <h4 className="TextFormattingH4">Lists</h4>
              <h6 className="TextFormattingH6">
                List is a component with continuous, vertical indexes of texts
                or icons.
              </h6>
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
            </div>
          </div>
        </div>
      </div>
      <div className="FlexContainer  ColoredBackground ComponentsContainer">
        <div className="Width PaddingLeftRight">
          <div className="PaddingTopBotttom  ComponentsContainer WhiteBackground RoundedEdges">
            <h4 className="TextFormattingH4">Autocomplete</h4>
            <h6 className="TextFormattingH6">
              Styled input component with autocomplete suggestions
            </h6>
            <AutoComplete suggestions={['AutoComplete suggestion']} />
          </div>
          <div className="PaddingTopBotttom ComponentsContainer WhiteBackground RoundedEdges">
            <h4 className="TextFormattingH4">Dropdown</h4>
            <h6 className="TextFormattingH6">
              Styled dropwdown menu component following Catho&apos;s Style
              Guide.
            </h6>
            <Dropdown items={dropdownMenuMocks} />
          </div>
          <div className="PaddingTopBotttom ComponentsContainer WhiteBackground RoundedEdges">
            <h4 className="TextFormattingH4">DropdownLight</h4>
            <h6 className="TextFormattingH6">
              Styled dropwdown menu component without the external lib
              Downshift; therefore it is lighter than the usual Dropdown.
            </h6>
            <DropdownLight items={dropdownMenuMocks} />
          </div>
          <div className="PaddingTopBotttom ComponentsContainer WhiteBackground RoundedEdges">
            <h4 className="TextFormattingH4">TextArea</h4>
            <h6 className="TextFormattingH6">
              Styled text area component following Catho&apos;s Style Guide.
            </h6>
            <TextArea
              helperText="Some Helper Text"
              label="TextArea Label"
              error="Error message"
            />
          </div>
        </div>
        <div className="Width   PaddingLeftRight ">
          <div className="MarginTopBottom  RoundedEdges WhiteBackground ComponentsContainer">
            <h4 className="TextFormattingH4">Card</h4>
            <h6 className="TextFormattingH6">
              Cards contain a content and actions about a single subject.
            </h6>
            <Card>
              <Card.Header>
                <Card.HeaderText>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Description>
                    Card Description: Proin massa nulla, rhoncus nec lectus
                    vitae, interdum pharetra est. Etiam sed quam nec nulla
                    lobortis ultrices.
                  </Card.Description>
                </Card.HeaderText>
                <Card.Thumbnail src="#" alt="Alternative" />
              </Card.Header>
              <Card.Content>Content of the Card</Card.Content>
              <Card.Footer>Footer of the Card</Card.Footer>
            </Card>
          </div>
          <div className="MarginTopBottom ComponentsContainer RoundedEdges WhiteBackground">
            <h4 className="TextFormattingH4">Alert</h4>
            <h6 className="TextFormattingH6">
              Alerts are used for items that need to be labeled, categorized, or
              organized using keywords.
            </h6>
            <Alert>Alert Test</Alert>
          </div>
          <div className="MarginTopBottom ComponentsContainer RoundedEdges WhiteBackground">
            <h4 className="TextFormattingH4">Accordion</h4>
            <h6 className="TextFormattingH6">
              An accordion is a vertical stack of interactive headings used to
              toggle the display of further information; each item can be
              &lsquo;collapsed&rsquo;, with just a short label visible, or
              &lsquo;expanded&rsquo; to show the complete content.
            </h6>
            <Accordion items={accordionMock} />
          </div>
        </div>
      </div>
      <div className="FlexContainer ColoredBackground PaddingTopBotttom">
        <div className=" Width RoundedEdges ComponentsContainer">
          <div className="PaddingTopBotttom ComponentsContainer WhiteBackground RoundedEdges">
            <h4 className="TextFormattingH4">ChargeBar</h4>
            <h6 className="TextFormattingH6 ComponentsContainer WhiteBackground">
              ChargeBar shows the level the user is to be able to complete their
              stats to the maximum.
            </h6>
            <ChargeBar />
          </div>
          <div className="PaddingTopBotttom ComponentsContainer WhiteBackground RoundedEdges">
            <h4 className="TextFormattingH4">RangeSlider</h4>
            <h6 className="TextFormattingH6">
              RangeSlider is a component to select a value from a predefined
              range. Chaneging the component&apos;s props, it&apos;s possible to
              set the minimum and maximum values, format the tooltip and labels,
              or disable the component itself.
            </h6>
            <RangeSlider />
          </div>
          <div className="PaddingTopBotttom ComponentsContainer WhiteBackground RoundedEdges">
            <h4 className="TextFormattingH4">ProgressBar</h4>
            <h6 className="TextFormattingH6">
              Progress bars are used to give the user a feedback on the progress
              of a process or an action.
            </h6>
            <ProgressBar />
          </div>
          <div className="PaddingTopBotttom ComponentsContainer WhiteBackground RoundedEdges">
            <h4 className="TextFormattingH4">Stepper</h4>
            <h6 className="TextFormattingH6">
              The Stepper component is a visual tool to show progress using
              logical and numbered steps.
            </h6>
            <Stepper />
          </div>
          <div>
            <div className="PaddingTopBotttom ComponentsContainer WhiteBackground RoundedEdges">
              <h4 className="TextFormattingH4">CircularLoader</h4>
              <h6 className="TextFormattingH6">
                The Stepper component is a visual tool to show progress using
                logical and numbered steps.
              </h6>
              <CircularLoader />
            </div>
            <div className="PaddingTopBotttom ComponentsContainer WhiteBackground RoundedEdges">
              <h4 className="TextFormattingH4">Skeleton</h4>
              <h6 className="TextFormattingH6">
                The Skeleton is a component that replaces others while they are
                loading or not ready to render.
              </h6>
              <Skeleton />
            </div>
          </div>
          <div className="PaddingTopBotttom ComponentsContainer WhiteBackground RoundedEdges">
            <h4 className="TextFormattingH4">Pagination</h4>
            <h6 className="TextFormattingH6">
              Add pagination buttons to help splitting up long contents into
              shorter, easy to understand blocks.
            </h6>
            <Pagination totalPages={4} activePage={1} />
          </div>
        </div>
        <div className="Width RoundedEdges ComponentsContainer">
          <div className="PaddingTopBotttom ComponentsContainer WhiteBackground RoundedEdges">
            <h4 className="TextFormattingH4">Button</h4>
            <h6 className="TextFormattingH6">
              Buttons express what will happen when the user clicks or touches
              it.
            </h6>
            <Button>Simple Button</Button>
          </div>
          <div className="PaddingTopBotttom ComponentsContainer WhiteBackground RoundedEdges">
            <h4 className="TextFormattingH4">ControlledDialog</h4>
            <h6 className="TextFormattingH6">
              ControlledDialog is a button that activates a dialog window in
              front of all content. It is commonly used to provide an important
              information or ask for some user interaciont.
            </h6>
            <ControlledDialog />
          </div>
          <div className="PaddingTopBotttom ComponentsContainer WhiteBackground RoundedEdges">
            <h4 className="TextFormattingH4">Hamburger</h4>
            <h6 className="TextFormattingH6">
              Hamburger component is used for opening mobile menu. You can also
              pass a aria-label description to inform screen readers that there
              are new notifications.
            </h6>
            <Hamburger inverted />
          </div>
          <div className="PaddingTopBotttom ComponentsContainer WhiteBackground RoundedEdges">
            <h4 className="TextFormattingH4">SegmentedControl</h4>
            <h6 className="TextFormattingH6">
              The Segmented control component is a linear set of two or more
              alternation buttons, with all segments with same width.
            </h6>
            <SegmentedControl name="items-text" items={segmentedControlMock} />
          </div>
          <div className="PaddingTopBotttom ComponentsContainer WhiteBackground RoundedEdges">
            <h4 className="TextFormattingH4">ControlledModal</h4>
            <h6 className="TextFormattingH6">
              Modals inform users about a task and can contain critical
              information, require decisions, or involve multiple tasks. A
              ControlledModal contains control buttons, such as
              &lsquo;Cancel&rsquo; and &lsquo;Delete&rsquo;.
            </h6>
            <ControlledModal />
          </div>
          <div className="PaddingTopBotttom ComponentsContainer WhiteBackground RoundedEdges">
            <h4 className="TextFormattingH4">ControlledSnackBar</h4>
            <h6 className="TextFormattingH6">
              SnackBars are used to show an alert about the action that have
              just been made: delete or archive content by accident (undo),
              resend messages that not been sent for some reason, or try to
              reconnect to internet (retry). A ControlledSnackBar has control
              buttons.
            </h6>
            <ControlledSnackBar />
          </div>
        </div>
      </div>
      <div className="FlexContainer ColoredBackground ComponentsContainer">
        <div className="Width">
          <div className=" WhiteBackground  RoundedEdges ComponentsContainer">
            <h4 className="TextFormattingH4">Badge</h4>
            <h6 className="TextFormattingH6">
              Badges are used for showing the quantity of something, such as
              warnings, inbox messages and others.
            </h6>
            <Badge>
              <Tag>Example Badge</Tag>
            </Badge>
          </div>
          <div className=" WhiteBackground  RoundedEdges   ComponentsContainer">
            <h4 className="TextFormattingH4">Tag</h4>
            <h6 className="TextFormattingH6">
              Tags are used for items that need to be labeled, categorized, or
              organized using keywords that describe them.
            </h6>
            <Tag>Example Tag</Tag>
          </div>
        </div>
        <div className="Width">
          <div className="  WhiteBackground Width RoundedEdges   ComponentsContainer">
            <h4 className="TextFormattingH4">Popover</h4>
            <h6 className="TextFormattingH6">
              Tags are used for items that need to be labeled, categorized, or
              organized using keywords that describe them.
            </h6>
            <Popover trigger="Click Me" onClose={() => {}}>
              Example PopOver Trigger
            </Popover>
          </div>
          <div className=" WhiteBackground Width RoundedEdges  InlineBlock ComponentsContainer">
            <h4 className="TextFormattingH4">Tooltip</h4>
            <h6 className="TextFormattingH6">
              Tooltips provide additional information upon hover or focus. They
              often contain helper text that is contextual to an element.
            </h6>
            <Tooltip placement="top" text="Example Tooltip Text">
              Pass the pointer over me
            </Tooltip>
          </div>
        </div>
      </div>
      <div className="ColoredBackground ComponentsContainer">
        <h4 className="TextFormattingH4">Carousel</h4>
        <h6 className="TextFormattingH6">
          Carousel is a component that align cards with a series of content.
          Works with images, texts, or custom markups. Also includes support for
          indicators and previous/next controls.
        </h6>
        <Carousel cards={cardsMock} />
      </div>
      <div className="FlexContainer ColoredBackground PaddingLeftRight MarginTopBottom">
        <div className="Width  ComponentsContainer WhiteBackground RoundedEdges">
          <h4 className="TextFormattingH4">Social Button</h4>
          <h6 className="TextFormattingH6">
            These buttons are used to run actions related to their respective
            providers. Example: login with OAuth API from Google.
          </h6>
          <div className="FlexContainer">
            <SocialButton provider="facebook" />
            <SocialButton provider="google" />
          </div>
        </div>
        <div className="Width  ComponentsContainer WhiteBackground RoundedEdges">
          <h4 className="TextFormattingH4">Info Icon</h4>
          <Icon name="info" />
        </div>
        <div className="Width  ComponentsContainer WhiteBackground RoundedEdges">
          <h4 className="TextFormattingH4">Avatar</h4>
          <h6 className="TextFormattingH6">
            Avatars are used to display a thumbnail of the user&apos;s profile
            picture or an user icon if the picture is not defined. It can also
            display a dot to alert that there is some notification.
          </h6>
          <Avatar />
        </div>
        <div className="Width   ComponentsContainer WhiteBackground RoundedEdges">
          <h4 className="TextFormattingH4">Socials</h4>
          <h6 className="TextFormattingH6">
            Socials show the icons of respective Social Medias{' '}
          </h6>
          <Socials items={socialMocks} />
        </div>
      </div>
      <div className="FlexContainer ColoredBackground PaddingLeftRight MarginTopBottom Overflow ">
        <div>
          <div className="Width  ComponentsContainer WhiteBackground RoundedEdges">
            <h4 className="TextFormattingH4">Checkbox Group</h4>
            <h6 className="TextFormattingH6">
              Gets values from a single onChange callback prop and apply a
              single error message to a group of checkboxes.
            </h6>
            <CheckboxGroup error="Some error" options={checkBoxMocks} />
          </div>
          <div className="Width  ComponentsContainer WhiteBackground RoundedEdges">
            <h4 className="TextFormattingH4">Radio Group</h4>
            <h6 className="TextFormattingH6">
              Radio group is a list of radio buttons that are used when a list
              of two or more options are mutually exclusive, meaning the user
              must select only one option.
            </h6>
            <RadioGroup name="Radio Group Example" options={radioGroupMocks} />
          </div>
          <div className="Width   WhiteBackground RoundedEdges ComponentsContainer">
            <h4 className="TextFormattingH4">Toggle</h4>
            <h6 className="TextFormattingH6">
              Toggle is a control that is used to quickly switch between two
              possible states.
            </h6>
            <Toggle id="right" />
          </div>
        </div>
        <div className="Width   WhiteBackground RoundedEdges ComponentsContainer">
          <h4 className="TextFormattingH4">Form</h4>
          <h6 className="TextFormattingH6">
            A Form displays a set of related user input fields in a structured
            way, some other components like validation adds check behavior of
            the data against a set of criteria before passing it along to the
            server.{' '}
          </h6>
          <Form>
            <Input label="Input With Generic Label" />
            <Input label="Input With Error Message" error="Some error" />
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
        </div>
      </div>
    </div>
  );
}
