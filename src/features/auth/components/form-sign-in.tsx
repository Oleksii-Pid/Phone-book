import { SubmitHandler, useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormLabel,
  FormGroup,
  Container,
  Button,
  FormText,
  Spinner,
} from 'react-bootstrap';
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
      <Container style={{ width: '18rem' }}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <FormLabel>Email address:</FormLabel>
            <FormControl
              type='email'
              {...register('emailAddress', {
                required: true,
                pattern: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/,
              })}
            ></FormControl>
            <FormText style={{ color: 'red' }}>
              {errors?.emailAddress && <p>Must be filled.Invalid email.</p>}
            </FormText>
          </FormGroup>
          <FormGroup>
            <FormLabel>Password:</FormLabel>
            <FormControl
              type='password'
              {...register('password', {
                required: true,
                pattern: /^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
              })}
            ></FormControl>
            <FormText style={{ color: 'red' }}>
              {errors?.password && (
                <p>
                  Must be filled.Minimum 8 symbols. Necessarily one number, one uppercase letter,
                  one lowercase letter.
                </p>
              )}
            </FormText>
          </FormGroup>
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
