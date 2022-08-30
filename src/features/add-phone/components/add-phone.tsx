import { Button, Container, Form, FormLabel, FormText } from 'react-bootstrap';
import { SubmitHandler, useForm } from 'react-hook-form';
import { TPhone } from 'src/types';
import InputMask from 'react-input-mask';
import validator from 'validator';
import { useList } from 'src/hooks';
import { useNavigate } from 'react-router';
import ROUTES from 'src/routes/constants';

function AddPhone() {
  const navigate = useNavigate();
  const { saveNewPhone } = useList();
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<FormValuesPhone>({
    mode: 'onChange',
    defaultValues: {
      isActive: true,
      registered: String(new Date().toISOString()),
    },
  });

  type FormValuesPhone = Omit<TPhone, 'id'>;

  const onSubmit: SubmitHandler<FormValuesPhone> = (phoneData) => {
    reset();
    saveNewPhone(phoneData);
    navigate(ROUTES.main);
  };
  return (
    <Container style={{ maxWidth: '25rem', marginTop: '1rem' }}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Check
            type='switch'
            label='Active phone'
            {...register('isActive', {
              required: true,
            })}
            placeholder='Required'
          />
        </Form.Group>
        <Form.Group>
          <FormLabel>First name*</FormLabel>
          <Form.Control
            style={{ textTransform: 'capitalize' }}
            {...register('name.first', {
              validate: validator.isAlpha,
              required: true,
              minLength: 3,
            })}
            placeholder='Required'
          />
        </Form.Group>
        <FormText style={{ color: 'red' }}>
          {errors?.name?.first && (
            <span>This field is required. Only letters. Minimum 3 letters.</span>
          )}
        </FormText>
        <Form.Group>
          <FormLabel>Last name*</FormLabel>
          <Form.Control
            style={{ textTransform: 'capitalize' }}
            {...register('name.last', {
              validate: validator.isAlpha,
              required: true,
              minLength: 3,
            })}
            placeholder='Required'
          />
          <FormText style={{ color: 'red' }}>
            {errors?.name?.last && (
              <span>This field is required. Only letters. Minimum 3 letters.</span>
            )}
          </FormText>
        </Form.Group>
        <Form.Group>
          <FormLabel>Age</FormLabel>
          <Form.Control
            {...register('age', {
              min: 1,
              max: 120,
              pattern: /^[0-9]+$/,
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
              pattern: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
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
            as={InputMask}
            mask='+1 (999) 999-99 99'
            alwaysShowMask
            {...register('phone', {
              pattern: /^\+1\s\(\d{3}\)\s\d{3}-\d{2}\s\d{2}$/,
            })}
          />
          <FormText style={{ color: 'red' }}>
            {errors?.phone && <span>This field is required</span>}
          </FormText>
        </Form.Group>
        <Form.Group>
          <FormLabel>Address</FormLabel>
          <Form.Control {...register('address')} />
        </Form.Group>
        <Form.Group>
          <FormLabel>Registered</FormLabel>
          <Form.Control disabled {...register('registered')} />
        </Form.Group>

        <Button disabled={!isValid} style={{ marginTop: '1rem', width: '100%' }} type='submit'>
          {' '}
          Add phone
        </Button>
      </Form>
    </Container>
  );
}
export default AddPhone;
