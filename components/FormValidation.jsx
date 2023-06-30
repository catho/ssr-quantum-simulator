import { Form, Validations } from '@catho/quantum/Form';
import { Input, Button } from '@catho/quantum';

const FormValidation = () => (
  <Form>
    <Input
      name="email"
      label="Required"
      validate={[
        Validations.Required,
        {
          validate: Validations.Email,
          error: 'We need a valid e-mail',
        },
      ]}
    />
    <Input
      name="catho"
      label="This field only accepts Catho as a value"
      validate={({ value }) => (value === 'Catho' ? '' : 'Catho, please')}
    />
    <div>
      <Input
        name="required"
        label="this field is required (nested)"
        validate={[Validations.Required]}
      />
    </div>
    <Button name="submit" type="submit">
      Submit
    </Button>
  </Form>
);

export default FormValidation;
