import React from "react";
import Head from "next/head";
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
  Dialog,
  TabbedView,
  Tab,
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
} from "@catho/quantum";

import {
  breadcrumbsMockItems,
  accordionMock,
  segmentedControlMock,
  socialMocks,
  cardsMock,
} from "../simulateddata/mocks";

import Carousel from "@catho/quantum/Carousel";

import {
  ControlledModal,
  ControlledSnackBar,
  ControlledDialog,
} from "../components";

export default function Quantum() {
  return (
    <Container>
      <Head>
        <title>Quantum - SSR-Simulator</title>
      </Head>
      <GlobalStyle />
      <div class="MarginTopBottom ColoredBackground PaddingTopBotttom">
        <h4 class="TextFormattingH4 PaddingLeftRight">Breadcrumbs</h4>
        <h6 class="TextFormattingH6 PaddingLeftRight">
          Breadcrumbs creates a trail of links to help the user to locate the
          current page within the website's hierarchy.
        </h6>

        <Breadcrumbs items={breadcrumbsMockItems} />

        <div class="MarginTopBottom PaddingLeftRight">
          <h4 class="TextFormattingH4">TabbedView</h4>
          <h6 class="TextFormattingH6">
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

      <div class="FlexContainer MarginTopBottom ColoredBackground PaddingTopBotttom">
        <div class="WhiteBackground PaddingLeftRight RoundedEdges MarginLeftRight">
          <div>
            <h4 class="TextFormattingH4">Rows and Colums</h4>
          </div>
          <Row>
            <Col>
              <Hide>Hide</Hide>
            </Col>
          </Row>
        </div>
        <div class="WhiteBackground PaddingLeftRight RoundedEdges MarginLeftRight">
          <div>
            <h4 class="TextFormattingH4">Lists</h4>
            <h6 class="TextFormattingH6">
              Styled items and subitems of a list.
            </h6>
          </div>
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
        <div class="WhiteBackground PaddingLeftRight RoundedEdges MarginLeftRight">
          <h4 class="TextFormattingH4">Styled Link</h4>
          <h6 class="TextFormattingH6">
            Link styled according to Catho's Style Guide.
          </h6>
          <Link href="www.catho.com.br">Link</Link>
        </div>
      </div>

      <div class="FlexContainer MarginTopBottom ColoredBackground PaddingTopBotttom">
        <div class="MaxWidth PaddingLeftRight">
          <div class="PaddingTopBotttom ">
            <h4 class="TextFormattingH4">Autocomplete</h4>
            <h6 class="TextFormattingH6">
              Styled input component with autocomplete suggestions
            </h6>
            <AutoComplete
              suggestions={["AutoComplete suggestion"]}
            ></AutoComplete>
          </div>
          <div class="PaddingTopBotttom">
            <h4 class="TextFormattingH4">Dropdown</h4>
            <h6 class="TextFormattingH6">
              Styled dropwdown menu component following Catho's Style Guide.
            </h6>
            <Dropdown items={["ItemTest"]} />
          </div>
          <div class="PaddingTopBotttom">
            <h4 class="TextFormattingH4">Input</h4>
            <h6 class="TextFormattingH6">
              Styled input component following Catho's Style Guide.
            </h6>
            <Input />
          </div>
          <div class="PaddingTopBotttom">
            <h4 class="TextFormattingH4">TextArea</h4>
            <h6 class="TextFormattingH6">
              Styled text area component following Catho's Style Guide.
            </h6>
            <TextArea />
          </div>
        </div>
        <div class="MaxWidth RoundedEdges WhiteBackground PaddingLeftRight">
          <h4 class="TextFormattingH4">Card</h4>
          <h6 class="TextFormattingH6">
            Cards contain a content and actions about a single subject.
          </h6>
          <div class="MarginTopBottom">
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
                <Card.Thumbnail src="#" alt="Alternative"></Card.Thumbnail>
              </Card.Header>
              <Card.Content>Content of the Card</Card.Content>
              <Card.Footer>Footer of the Card</Card.Footer>
            </Card>
          </div>
          <div class="MarginTopBottom">
            <h4 class="TextFormattingH4">Alert</h4>
            <h6 class="TextFormattingH6">
              Alerts are used for items that need to be labeled, categorized, or
              organized using keywords.
            </h6>
            <Alert>Alert Test</Alert>
          </div>
          <div class="MarginTopBottom">
            <h4 class="TextFormattingH4">Accordion</h4>
            <h6 class="TextFormattingH6">
              An accordion is a vertical stack of interactive headings used to
              toggle the display of further information; each item can be
              'collapsed', with just a short label visible, or 'expanded' to
              show the complete content.
            </h6>
            <Accordion items={accordionMock} />
          </div>
        </div>
      </div>
      <div class="FlexContainer ColoredBackground PaddingTopBotttom">
        <div class="WhiteBackground PaddingTopBotttom PaddingLeftRight MaxWidth RoundedEdges MarginLeftRight">
          <div class="PaddingTopBotttom">
            <h4 class="TextFormattingH4">ChargeBar</h4>
            <h6 class="TextFormattingH6">
              ChargeBar shows the level the user is to be able to complete their
              stats to the maximum.
            </h6>
            <ChargeBar />
          </div>
          <div class="PaddingTopBotttom">
            <h4 class="TextFormattingH4">RangeSlider</h4>
            <h6 class="TextFormattingH6">
              RangeSlider is a component to select a value from a predefined
              range. Chaneging the component's props, it's possible to set the
              minimum and maximum values, format the tooltip and labels, or
              disable the component itself.
            </h6>
            <RangeSlider />
          </div>
          <div class="PaddingTopBotttom">
            <h4 class="TextFormattingH4">ProgressBar</h4>
            <h6 class="TextFormattingH6">
              Progress bars are used to give the user a feedback on the progress
              of a process or an action.
            </h6>
            <ProgressBar />
          </div>
          <div class="PaddingTopBotttom">
            <h4 class="TextFormattingH4">Stepper</h4>
            <h6 class="TextFormattingH6">
              The Stepper component is a visual tool to show progress using
              logical and numbered steps.
            </h6>
            <Stepper />
          </div>
          <div>
            <div class="PaddingTopBotttom">
              <h4 class="TextFormattingH4">CircularLoader</h4>
              <h6 class="TextFormattingH6">
                The Stepper component is a visual tool to show progress using
                logical and numbered steps.
              </h6>
              <CircularLoader />
            </div>
            <div class="PaddingTopBotttom">
              <h4 class="TextFormattingH4">Skeleton</h4>
              <h6 class="TextFormattingH6">
                The Skeleton is a component that replaces others while they are
                loading or not ready to render.
              </h6>
              <Skeleton />
            </div>
          </div>
          <div class="PaddingTopBotttom">
            <h4 class="TextFormattingH4">Pagination</h4>
            <h6 class="TextFormattingH6">
              Add pagination buttons to help splitting up long contents into
              shorter, easy to understand blocks.
            </h6>
            <Pagination totalPages={4} activePage={1} />
          </div>
        </div>
        <div class="WhiteBackground MaxWidth RoundedEdges PaddingLeftRight MarginLeftRight">
          <div class="PaddingTopBotttom">
            <h4 class="TextFormattingH4">Button</h4>
            <h6 class="TextFormattingH6">
              Buttons express what will happen when the user clicks or touches
              it.
            </h6>
            <Button>Simple Button</Button>
          </div>
          <div class="PaddingTopBotttom">
            <h4 class="TextFormattingH4">ControlledDialog</h4>
            <h6 class="TextFormattingH6">
              ControlledDialog is a button that activates a dialog window in
              front of all content. It is commonly used to provide an important
              information or ask for some user interaciont.
            </h6>
            <ControlledDialog />
          </div>
          <div class="PaddingTopBotttom">
            <h4 class="TextFormattingH4">Hamburger</h4>
            <h6 class="TextFormattingH6">
              Hamburger component is used for opening mobile menu. You can also
              pass a aria-label description to inform screen readers that there
              are new notifications.
            </h6>
            <Hamburger inverted />
          </div>
          <div class="PaddingTopBotttom">
            <h4 class="TextFormattingH4">SegmentedControl</h4>
            <h6 class="TextFormattingH6">
              The Segmented control component is a linear set of two or more
              alternation buttons, with all segments with same width.
            </h6>
            <SegmentedControl name="items-text" items={segmentedControlMock} />
          </div>
          <div class="PaddingTopBotttom">
            <h4 class="TextFormattingH4">ControlledModal</h4>
            <h6 class="TextFormattingH6">
              Modals inform users about a task and can contain critical
              information, require decisions, or involve multiple tasks. A
              ControlledModal contains control buttons, such as "Cancel" and
              "Delete".
            </h6>
            <ControlledModal />
          </div>
          <div class="PaddingTopBotttom">
            <h4 class="TextFormattingH4">ControlledSnackBar</h4>
            <h6 class="TextFormattingH6">
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
      <div class="FlexContainer ColoredBackground PaddingTopBotttom MarginTopBottom">
        <div class="PaddingTopBotttom WhiteBackground MaxWidth RoundedEdges PaddingLeftRight MarginLeftRight">
          <h4 class="TextFormattingH4">Badge</h4>
          <h6 class="TextFormattingH6">
            Badges are used for showing the quantity of something, such as
            warnings, inbox messages and others.
          </h6>
          <Badge>Example Badge</Badge>
        </div>
        <div class="PaddingTopBotttom WhiteBackground MaxWidth RoundedEdges PaddingLeftRight MarginLeftRight">
          <h4 class="TextFormattingH4">Tag</h4>
          <h6 class="TextFormattingH6">
            Tags are used for items that need to be labeled, categorized, or
            organized using keywords that describe them.
          </h6>
          <Tag>Example Tag</Tag>
        </div>
        <div class=" PaddingTopBotttom WhiteBackground MaxWidth RoundedEdges PaddingLeftRight MarginLeftRight">
          <h4 class="TextFormattingH4">Popover</h4>
          <h6 class="TextFormattingH6">
            Tags are used for items that need to be labeled, categorized, or
            organized using keywords that describe them.
          </h6>
          <Popover trigger="Click Me" onClose={() => {}}>
            Example PopOver Trigger
          </Popover>
        </div>
        <div class="PaddingTopBotttom WhiteBackground MaxWidth RoundedEdges PaddingLeftRight MarginLeftRight">
          <h4 class="TextFormattingH4">Tooltip</h4>
          <h6 class="TextFormattingH6">
            Tags are used for items that need to be labeled, categorized, or
            organized using keywords that describe them.
          </h6>
          <Tooltip placement="top" text="Example Tooltip Text">
            Hoove the pointer over me
          </Tooltip>
        </div>
      </div>
      <div class="ColoredBackground PaddingTopBottom PaddingLeftRight">
        <h4 class="TextFormattingH4">Carousel</h4>
        <h6 class="TextFormattingH6">
          Carousel is a component that align cards with a series of content.
          Works with images, texts, or custom markups. Also includes support for
          indicators and previous/next controls.
        </h6>
        <Carousel cards={cardsMock} />
      </div>
      <div class="FlexContainer ColoredBackground PaddingLeftRight MarginTopBottom">
        <div class="MaxWidth MarginTopBottom MarginLeftRight">
          <h4 class="TextFormattingH4">Social Button</h4>
          <h6 class="TextFormattingH6">
            These buttons are used to run actions related to their respective
            providers. Example: login with OAuth API from Google.
          </h6>
          <SocialButton provider="facebook" />
        </div>
        <div class="MaxWidth MarginTopBottom MarginLeftRight">
          <h4 class="TextFormattingH4">Info Icon</h4>
          <Icon name="info" />
        </div>
        <div class="MaxWidth MarginTopBottom MarginLeftRight">
          <h4 class="TextFormattingH4">Avatar</h4>
          <h6 class="TextFormattingH6">
            Avatars are used to display a thumbnail of the user's profile
            picture or an user icon if the picture is not defined. It can also
            display a dot to alert that there is some notification.
          </h6>
          <Avatar />
        </div>
        <div class="MaxWidth MarginTopBottom  MarginLeftRight">
          <h4 class="TextFormattingH4">Socials</h4>
          <h6 class="TextFormattingH6">
            Socials show the icons of respective Social Medias{" "}
          </h6>
          <Socials items={socialMocks} />
        </div>
      </div>
      <div class="FlexContainer ColoredBackground PaddingLeftRight MarginTopBottom Overflow">
        <div class="MaxWidth MarginLeftRight MarginTopBottom">
          <h4 class="TextFormattingH4">Checkbox Group</h4>
          <h6 class="TextFormattingH6">
            Gets values from a single onChange callback prop and apply a single
            error message to a group of checkboxes.
          </h6>
          <CheckboxGroup
            options={[{ checked: false, label: "Test", name: "Test" }]}
          />
        </div>
        <div class="MaxWidth MarginLeftRight MarginTopBottom">
          <h4 class="TextFormattingH4">Radio Group</h4>
          <h6 class="TextFormattingH6">
            Radio group is a list of radio buttons that are used when a list of
            two or more options are mutually exclusive, meaning the user must
            select only one option.
          </h6>
          <RadioGroup
            name="test"
            options={[
              {
                value: "Test",
                label: "Test",
              },
            ]}
          />
        </div>
        <div class="MaxWidth MarginLeftRight MarginTopBottom">
          <h4 class="TextFormattingH4">Toggle</h4>
          <h6 class="TextFormattingH6">
            Toggle is a control that is used to quickly switch between two
            possible states.
          </h6>
          <Toggle id="right" />
        </div>
        <div class="MaxWidth MarginLeftRight MarginTopBottom">
          <h4 class="TextFormattingH4">Form</h4>
          <h6 class="TextFormattingH6">
            A Form displays a set of related user input fields in a structured
            way, some other components like validation adds check behavior of
            the data against a set of criteria before passing it along to the
            server.{" "}
          </h6>
          <Form>
            <label>Name: </label>
            <input />
            <br />
            <label>E-Mail: </label>
            <input />
            <br />
          </Form>
        </div>
      </div>
    </Container>
  );
}
