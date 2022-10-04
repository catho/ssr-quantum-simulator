import React from "react";
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

import Carousel from '@catho/quantum/Carousel';

import {
  ControlledModal,
  ControlledSnackBar
} from '../components';


export default function Quantum() {
  return (
    <Container>
      <GlobalStyle />
      <Row>
        <Col>
          <Hide>Hide</Hide>
        </Col>
      </Row>
      <List>
        <List.Header>List Header</List.Header>
        <List.SubHeader>List Subheaders</List.SubHeader>
        <List.Content>
          <List.Item>List</List.Item>
        </List.Content>
      </List>
      <Link href="www.catho.com.br">Link</Link>
      <AutoComplete suggestions={["AutoComplete suggestion"]}></AutoComplete>
      <Breadcrumbs
        items={[
          { label: "Breadcrumbs", url: "catho.com" },
          { label: "Breadcrumbs 2", url: "catho.com" },
        ]}
      />
      <ChargeBar />
      {/* <Dialog>Dialog</Dialog> */}
      <TabbedView activeTab="TabTest">
        <Tab title="TabTest">Tab with TabbedView</Tab>
      </TabbedView>
      <Card>
        <Card.Header>
          <Card.HeaderText>
            <Card.Title>Card Title</Card.Title>
            <Card.Description>Card.Description</Card.Description>
          </Card.HeaderText>
          <Card.Thumbnail src="#" alt="alt test"></Card.Thumbnail>
        </Card.Header>
        <Card.Content>Content Card</Card.Content>
        <Card.Footer>Card.Footer</Card.Footer>
      </Card>
      <RangeSlider />
      <Button>Button</Button>
      <Hamburger />
      <Alert>Alert Test</Alert>
      <Badge>Badge</Badge>
      <Tag>Tag</Tag>
      <ProgressBar />
      <CircularLoader />
      <Skeleton />
      <Dropdown items={["ItemTest"]} />
      <Input />
      <TextArea />
      <SocialButton provider="facebook" />
      <Icon name="info" />
      <Avatar />
      <Stepper />
      <Pagination totalPages={1} activePage={1} />
      <Socials
        items={[
          {
            name: "facebook",
            url: "http://facebook.com",
            title: "facebook title of the purpose of this icon",
          },
          {
            name: "twitter",
            url: "http://twitter.com",
            title: "twitter title of the purpose of this icon",
          },
          {
            name: "youtube",
            url: "http://youtube.com",
            title: "youtube title of the purpose of this icon",
          },
        ]}
      />
      <Accordion
        items={[
          {
            title: "Test 1",
            content: "Content Text...",
          },
          {
            title: "Test 2",
            content: "Content Text...",
          },
        ]}
      />
      <Popover trigger="Popover Trigger" onClose={() => {}}>
        Popover test
      </Popover>
      <Tooltip placement="top" text="Tooltip Text">
        Tooltip Trigger
      </Tooltip>
      <CheckboxGroup
        options={[{ checked: false, label: "Test", name: "Test" }]}
      />
      <RadioGroup
        name="test"
        options={[
          {
            value: "Test",
            label: "Test",
          },
        ]}
      />
      <Toggle id="right" />
      <Form />
      <Carousel
        cards={[
          {
            imagePath: "https://assets.catho.com.br/logo/svg/blue.svg",
            imageDescription: "test",
            title: "title",
            description: "description...",
          },
        ]}
      />
      <SegmentedControl
        name="items-text"
        items={[
          {
            label: "Test",
            value: "Test ",
            checked: true,
          },
        ]}
      />
      <ControlledModal/>
      <ControlledSnackBar/>
    </Container>
  );
}