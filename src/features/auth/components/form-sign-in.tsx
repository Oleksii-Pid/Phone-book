import { useForm } from 'react-hook-form';
import { Form, FormControl, FormLabel, FormGroup, Container, Button, FormText } from 'react-bootstrap';
import useAuth from '../hooks/use-auth';

type FormValues = {
  password: string;
  emailAddress: string;
};

function FormSingIn() {
  const { onLogin } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    mode: 'onChange',
  });

  const onSubmit = () => onLogin();
  return (
    <>
      <Container style={{ width: '18rem' }}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <FormLabel>Email address:</FormLabel>
            <FormControl
              {...register('emailAddress', {
                required: true,
                pattern: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/,
              })}
            ></FormControl>
            <FormText style={{ color: 'red' }}>{errors?.emailAddress && <p>Must be filled.Invalid email.</p>}</FormText>
          </FormGroup>
          <FormGroup>
            <FormLabel>Password:</FormLabel>
            <FormControl
              {...register('password', {
                required: true,
                pattern: /^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
              })}
            ></FormControl>
            <FormText style={{ color: 'red' }}>
              {errors?.password && (
                <p>
                  Must be filled.Minimum 8 symbols. Necessarily one number, one uppercase letter, one lowercase letter.
                </p>
              )}
            </FormText>
          </FormGroup>
          <Button type="submit" disabled={!isValid} variant="primary" style={{ marginTop: '5px' }}>
            Log In
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default FormSingIn;
