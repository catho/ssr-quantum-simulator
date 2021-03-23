import React from 'react';
import {
  Container,
  Row,
  Col,
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
} from '@catho/quantum';

import { colors } from '@catho/quantum/shared/theme';


import {
  ControlledPagination,
  ControlledSnackBar,
  SocialsWithProps,
  AccordionWithProps,
  PopoverTopWithProps,
  TooltipWithProps,
  ControlledModal,
  ControlledCheckboxGroup,
  ControlledDropdown,
  RadioGroupWithPros,
  ToggleWithProps,
  RadioGroupWithDefaultValue,
  FormValidation,
  ButtonGroup,
  CarouselExample,
  SegmentedControlExample,
} from '../components';

import Header from './shared/Header';

const colsProps = {
    medium: 12,
  };

export default function Quantum() {

return (
  <>
    <Container>
      <Row>
        <Col {...colsProps}>
          <Header title="Quantum: components simulator" />
        </Col>
      </Row>
    </Container>
    <Container>
      <h4>Static components</h4>
      <Row>
          <Col {...colsProps}>
            <Card>
              <Card.Content>
                <h5>Icons</h5>
                <Icon name="info" size="small" />
                <Icon name="info" />
                <Icon name="info" size="large" />
                <Icon name="clear" />
                <Icon name="search" />
                <Icon name="error" />
                <Icon name="visibility_off" />
                <Icon name="visibility" />
                <Icon name="check_box" />
                <Icon name="emoji_people" skin={colors.primary['900']} />
                <Icon name="emoji_people" skin={colors.secondary['900']} />
                <Icon name="emoji_people" skin={colors.primary['700']} />
                <Icon name="emoji_people" skin={colors.warning['900']} />
                <Icon name="emoji_people" skin={colors.error['300']} />
                <Icon name="emoji_people" skin={colors.error['300']} size="large" />
              </Card.Content>

              <Card.Content>
                <h5>TabbedView</h5>
                <TabbedView
                  activeTab="Slider">
                  <TabbedView.Tab title="Slider">
                    <RangeSlider defaultValue={50} />
                  </TabbedView.Tab>
                  <TabbedView.Tab title="Button">
                    <Button icon="close"> This is a Button</Button>
                  </TabbedView.Tab>
                </TabbedView>
              </Card.Content>

              <Card.Content>
                <h5>Socials</h5>
                <SocialsWithProps />
              </Card.Content>

              <Card.Content>
                <h5>Hamburger</h5>
                <Hamburger inverted />
                <Hamburger inverted showNotification />
                <Hamburger inverted isOpened />
              </Card.Content>

              <Card.Content>
                <h5>Alert</h5>
                <Alert icon="info">
                  <span>
                    This is a <strong>sample</strong> message, a much bigger text could fit in
                    here
                    <br />
                    and a buch of other lines too, just to demonstrate
                    <br />
                    how this component behaves ❤
                  </span>
                </Alert>
              </Card.Content>

              <Card.Content>
                <h5>Badge</h5>
                  <Badge number={10} skin="primary" />This is a badge
                  <Badge number={10} skin="primary" dot>
                    <p>This is a badge</p>
                  </Badge>
              </Card.Content>

              <Card.Content>
                <h5>Tags</h5>
                <Tag skin="primary">Primary</Tag>
                <Tag inverted skin="primary">Primary</Tag>
                <Tag stroked skin="primary">Primary</Tag>
                <Tag onClose={() => {}} skin="primary" size="large">Primary</Tag>
                <Tag onClose={() => {}} skin="primary">Primary</Tag>
              </Card.Content>

              <Card.Content>
                <h5>Loaders</h5>
                <ProgressBar progressPercent={30}  label=" percent processed" />
                <CircularLoader size="large" />
              </Card.Content>

              <Card.Header>
                <Card.HeaderText>
                <Card.Title small><Skeleton.Text width="180px" /></Card.Title>
                <Card.Description small>
                <Skeleton.Tag width="117px" />
                <Skeleton.Tag width="75px" />
                </Card.Description>
                </Card.HeaderText>
                <Skeleton.Circle height="72px" width="72px" />
              </Card.Header>
              <Card.Content>
                <Skeleton.Text />
                <Skeleton.Text width="60%" />
              </Card.Content>
              <Card.Footer>
                <Skeleton.Button size="small" width="116px" />
              </Card.Footer>

              <Card.Content>
                <h5>Accordion</h5>
                <AccordionWithProps />
              </Card.Content>

              <Card.Content>
                <h5>Buttons</h5>
                <Button icon="close"> This is a Button</Button>
                <Button skind="secondary" > This is a Button</Button>
                <Button icon="close" disabled> This is a disabled Button</Button>
                <Button icon="close" size="large"> This is a large Button</Button>
                <h5>Social Buttons</h5>
                <SocialButton provider="google" />
                <SocialButton provider="facebook" />
              </Card.Content>
            </Card>
            
            <Card>
              <Card.Content>
                <h5>Pagination</h5>
                <ControlledPagination />
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <h5>Avatar</h5>
                <Avatar
                  text="Perfil"
                  href="#user-profile"
                  hasNotification
                  hasToggle
                />
                </Card.Content>
              </Card>
          </Col>
      </Row>
    </Container>
    <Container>
      <h4>Action components</h4>
      <Row>
        <Col {...colsProps}>
          <Card>
            <Card.Content>
              <h5>SnackBar</h5>
              <ControlledSnackBar />
            </Card.Content>
            <Card.Content>
              <h5>Popover</h5>
              <PopoverTopWithProps />
            </Card.Content>
            <Card.Content>
              <h5>Tooltip</h5>
              <TooltipWithProps />
            </Card.Content>
           <Card.Content>
              <h5>Modal</h5>
              <ControlledModal />
            </Card.Content>
          </Card>
        </Col>
      </Row>
    </Container>
    <Container>
    <h4>Quantum form components</h4>
      <Row>
        <Col {...colsProps}>
          <Card>
            <Card.Content>
              <h5>Checkbox</h5>
              <ControlledCheckboxGroup />
            </Card.Content>
            <Card.Content>
              <h5>Dropdown</h5>
              <ControlledDropdown />
              <Dropdown
                autocomplete
                label="Autocomplete"
                placeholder="Start typing..."
                items={['Lemon', 'Banana', 'Strawberry', 'Orange', 'Avocado']}
              />
            </Card.Content>
            <Card.Content>
              <h5>Input</h5>
              <Input
                label="With a description label"
                descriptionLabel="Description here"
                helperText="Helper here"
              />
              <Input.Phone label="Phone" />
              <Input.CEP label="CEP" />
              <Input.CPF label="CPF" />
              <Input.Date label="Date" />
              <Input.Password label="Password Type" />
              <Input label="Searchable" type="search" />
              <Input label="With an error" error="Error here" />
              <Input label="Disabled" disabled />
            </Card.Content>
            <Card.Content>
              <h5>Radio with props</h5>
              <RadioGroupWithPros />
            </Card.Content>
            <Card.Content>
              <h5>Radio with defaultValue</h5>
              <RadioGroupWithDefaultValue />
            </Card.Content>
            <Card.Content>
              <h5>Button groups</h5>
              <ButtonGroup />
            </Card.Content>
            <Card.Content>
              <h5>Toggle</h5>
              <ToggleWithProps />
            </Card.Content>
            <Card.Content>
              <h5>TextArea</h5>
              <TextArea helperText="helper text" placeholder="placeholder" label="TextArea label" />
            </Card.Content>
          </Card>
        </Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Col {...colsProps}>
        <Card>
            <Card.Content>
              <h5>Form validations</h5>
              <FormValidation />
            </Card.Content>
          </Card> 
        </Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Col {...colsProps}>
        <Card>
          <Card.Content>
              <h5>Carousel</h5>
              <CarouselExample />
          </Card.Content>
          <Card.Content>
            <h5>Stepper</h5>
            <Stepper
              index={5}
              total={6}
              currentStepText="Salários / benefícios"
              nextStepText="Contrato / Local"
            />
          </Card.Content>
          <Card.Content>
            <h5>Segmented control</h5>
            <SegmentedControlExample />            />
          </Card.Content>
          
        </Card> 
        </Col>
      </Row>
    </Container>
  </>
);
};
