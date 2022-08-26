import { Button, Container, Form, FormLabel, FormText } from 'react-bootstrap';
import { SubmitHandler, useForm } from 'react-hook-form';

function AddPhone() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormValuesPhone>({
    mode: 'onChange',
  });

  type FormValuesPhone = {
    isActive: boolean;
    age?: number;
    name: {
      first: string;
      last: string;
    };
    company?: string;
    email?: string;
    phone: string;
    address?: string;
    registered: string;
  };
  const onSubmit: SubmitHandler<FormValuesPhone> = (phoneData) => {
    reset();
    alert(JSON.stringify(phoneData));
  };
  return (
    <Container style={{ maxWidth: '25rem' }}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <FormLabel>First name*</FormLabel>
          <Form.Control
            {...register('name.first', {
              required: true,
            })}
            placeholder='Required'
          />
        </Form.Group>
        <FormText style={{ color: 'red' }}>
          {errors?.name?.first && <span>This field is required</span>}
        </FormText>
        <Form.Group>
          <FormLabel>Last name*</FormLabel>
          <Form.Control
            {...register('name.last', {
              required: true,
            })}
            placeholder='Required'
          />
          <FormText style={{ color: 'red' }}>
            {errors?.name?.last && <span>This field is required</span>}
          </FormText>
        </Form.Group>
        <Form.Group>
          <FormLabel>Age</FormLabel>
          <Form.Control
            {...register('age', {
              pattern: /^([0-9]+)$/,
              min: 1,
              max: 120,
            })}
          />
          <FormText style={{ color: 'red' }}>
            {errors?.age && <span>Min 1, max 120 years.Only numbers!</span>}
          </FormText>
        </Form.Group>
        <Form.Group>
          <FormLabel>Company</FormLabel>
          <Form.Control {...register('company')} />
        </Form.Group>
        <Form.Group>
          <FormLabel>Email</FormLabel>
          <Form.Control
            {...register('email', {
              pattern: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
            })}
            type='email'
          />
          <FormText style={{ color: 'red' }}>
            {errors?.email && <span>Invalid email!</span>}
          </FormText>
        </Form.Group>
        <Form.Group>
          <FormLabel>Phone*</FormLabel>
          <Form.Control
            {...register('phone', {
              required: true,
            })}
            placeholder='Required'
          />
          <FormText style={{ color: 'red' }}>
            {errors?.phone && <span>This field is required</span>}
          </FormText>
        </Form.Group>
        <Form.Group>
          <FormLabel>Address</FormLabel>
          <Form.Control {...register('address')} />
        </Form.Group>
        <Button style={{ marginTop: '1rem', width: '100%' }} type='submit'>
          {' '}
          Add phone
        </Button>
      </Form>
    </Container>
  );
}
export default AddPhone;
