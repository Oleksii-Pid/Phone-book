import ErrorPage from 'src/shared/error';
import { usePhone, useList } from 'src/hooks';
import { Container, Form, Button } from 'react-bootstrap';
import { useForm, SubmitHandler } from 'react-hook-form';
import validator from 'validator';
import InputMask from 'react-input-mask';
import { TPhone } from 'src/types';
import { useNavigate } from 'react-router';
import ROUTES from 'src/routes/constants';

function EditPhoneForm() {
  const { phone, error } = usePhone();
  const navigate = useNavigate();
  const { editPhone } = useList();

  if (!phone) {
    return <ErrorPage nameError={error} />;
  }
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<TPhone>({
    mode: 'onChange',
    defaultValues: phone,
  });
  const onSubmit: SubmitHandler<TPhone> = (phoneData) => {
    editPhone(phoneData, () => navigate(ROUTES.main));
  };

  return (
    <Container style={{ maxWidth: '25rem', marginTop: '1rem' }}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label>ID</Form.Label>
          <Form.Control disabled {...register('id')} placeholder='Required' />
        </Form.Group>
        <Form.Group>
          <Form.Check
            type='switch'
            label='Active phone'
            {...register('isActive')}
            placeholder='Required'
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>First name*</Form.Label>
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
        <Form.Text style={{ color: 'red' }}>
          {errors?.name?.first && (
            <span>This field is required. Only letters. Minimum 3 letters.</span>
          )}
        </Form.Text>
        <Form.Group>
          <Form.Label>Last name*</Form.Label>
          <Form.Control
            style={{ textTransform: 'capitalize' }}
            {...register('name.last', {
              validate: validator.isAlpha,
              required: true,
              minLength: 3,
            })}
            placeholder='Required'
          />
          <Form.Text style={{ color: 'red' }}>
            {errors?.name?.last && (
              <span>This field is required. Only letters. Minimum 3 letters.</span>
            )}
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Age</Form.Label>
          <Form.Control
            {...register('age', {
              min: 1,
              max: 120,
              pattern: /^[0-9]+$/,
            })}
          />
          <Form.Text style={{ color: 'red' }}>
            {errors?.age && <span>Min 1, max 120 years.Only numbers!</span>}
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Company</Form.Label>
          <Form.Control {...register('company')} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            {...register('email', {
              pattern: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
            })}
            type='email'
          />
          <Form.Text style={{ color: 'red' }}>
            {errors?.email && <span>Invalid email!</span>}
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Phone*</Form.Label>
          <Form.Control
            as={InputMask}
            mask='+1 (999) 999-9999'
            alwaysShowMask
            {...register('phone', {
              pattern: /^\+1\s\(\d{3}\)\s\d{3}-\d{4}$/,
            })}
          />
          <Form.Text style={{ color: 'red' }}>
            {errors?.phone && <span>This field is required</span>}
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Address</Form.Label>
          <Form.Control {...register('address')} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Registered</Form.Label>
          <Form.Control disabled {...register('registered')} />
        </Form.Group>

        <Button style={{ marginTop: '1rem', width: '100%' }} type='submit'>
          {' '}
          Edit phone
        </Button>
      </Form>
    </Container>
  );
}
export default EditPhoneForm;
