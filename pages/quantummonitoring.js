import React from "react";
import Container from "@catho/quantum/Grid/sub-components/Container";
import Col from "@catho/quantum/Grid/sub-components/Col";
import Row from "@catho/quantum/Grid/sub-components/Row";
import { Form, Validations } from "@catho/quantum/Form";
import Dropdown from "@catho/quantum/Dropdown";
import Input from "@catho/quantum/Input";
import CheckboxGroup from "@catho/quantum/Checkbox/CheckboxGroup";
import Button from "@catho/quantum/Button";



const colsProps = {
  medium: 12,
};


export default () => (
  <>
    <Container>
    <Row>
        <Col {...colsProps}>
          <h3>Quantum monitoring page</h3>
          <p>Here the instructions to collect the payload in Browser and the bundle size:</p>
          
          <ol>
            <li>You should be here via task runner <code>yarn analyzer</code></li>
            <li>the libs version must be inserted without "^" signal in package.json. We must test the real version of the package</li>
            <li>keep the yarn lock from master</li>
            <li>find the <i>quantummonitoring</i> chunk at the client page of analyzer</li>
            <li>collect the bundle size by the <strong>"Parsed size"</strong> item </li>
            <li>collect the lib payload in browser by the <strong>"Gziped size"</strong> item </li>
          </ol>
        </Col>
    </Row>
    </Container>
    <Container>
      <Row>
        <Col {...colsProps}>
          <Form>
            <Dropdown
              items={[
                'Lemon',
                'Banana',
                'Strawberry',
                'Orange',
                'Avocado'
              ]}
              label="Listinha de frutas"
            />
            <Input name="professional_name" label="Nome" validate={Validations.MinLength} minLength={4} />
            <Input name="professional_address" label="Endereço" descriptionLabel="manda bala no endereço completo" validate={Validations.MinLength} minLength={4} />
            <Input name="professional_CEP" label="CEP" disabled />
            <CheckboxGroup 
              options={[
                {
                  key: 'banana',
                  label: 'Banana',
                  name: 'banana'
                },
                {
                  checked: true,
                  key: 'orange',
                  label: 'Orange',
                  name: 'orange'
                },
                {
                  checked: true,
                  disabled: true,
                  key: 'lemon',
                  label: 'Lemon',
                  name: 'lemon'
                },
                {
                  disabled: true,
                  key: 'strawberry',
                  label: 'Strawberry',
                  name: 'strawberry'
                },
                {
                  key: 'blueberry',
                  label: 'Blueberry',
                  name: 'blueberry'
                }
              ]}
            />
            <Button name="submit" type="submit">Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  </>
);
