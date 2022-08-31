import { SubmitHandler, useForm } from 'react-hook-form';
import isEmail from 'validator/es/lib/isEmail';
import { Form, Container, Button, Spinner } from 'react-bootstrap';
import { useAuth } from 'src/hooks';
import { FormValues } from '../types';

function FormSingIn() {
  const { onLogin, isLoading } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<FormValues> = (userData) => onLogin(userData);

  return (
    <>
      <Container style={{ maxWidth: '21rem', marginTop: '2rem' }}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group>
            <Form.Label>Email address:</Form.Label>
            <Form.Control
              type='email'
              {...register('emailAddress', {
                required: true,
                validate: isEmail,
              })}
            ></Form.Control>
            <Form.Text style={{ color: 'red' }}>
              {errors?.emailAddress && <p>Must be filled.Invalid email.</p>}
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type='password'
              {...register('password', {
                required: true,
                pattern: /^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
              })}
            ></Form.Control>
            <Form.Text style={{ color: 'red' }}>
              {errors?.password && (
                <p>
                  Must be filled.Minimum 8 symbols. Necessarily one number, one uppercase letter,
                  one lowercase letter.
                </p>
              )}
            </Form.Text>
          </Form.Group>
          <Button type='submit' disabled={!isValid} variant='primary' style={{ marginTop: '5px' }}>
            {isLoading && (
              <Spinner as='span' animation='border' size='sm' role='status' aria-hidden='true' />
            )}
            Log In
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default FormSingIn;
