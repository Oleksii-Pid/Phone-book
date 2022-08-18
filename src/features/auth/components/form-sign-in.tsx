import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormLabel, FormGroup, Container, Button, FormText } from "react-bootstrap";
import { useAppSelector } from "src/features/hook/redux/redux";
import { useDispatch } from "react-redux";
import { setAuth } from 'src/features/redux/slices/authSlice';
import { Navigate } from 'react-router-dom'

function FormSingIn(){
    const dispatch = useDispatch();
    const auth = useAppSelector(state => state.auth.isAuth)
    const {
         register, 
         handleSubmit, 
         formState: { errors, isValid } 
        } = useForm({
            mode:"onChange"
        });
        
    const onSubmit = () => {
        dispatch(setAuth(true));
    }
    return auth
        ?
        (<Navigate to ="/"/>) 
        :
        (
        <>
            <Helmet>
                <title>Log In</title>
            </Helmet>
            <Container style = {{ width:"18rem" }}>
                <Form onSubmit = {handleSubmit(onSubmit)}>
                    <FormGroup>
                        <FormLabel>Email adress:</FormLabel>
                        <FormControl
                            {...register('emailAdress',{
                                required: true,
                                pattern: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/,
                            })}
                        ></FormControl> 
                        <FormText style = {{color:"red"}}>
                            {errors?.emailAdress && <p>Must be filled.Invalid email.</p>}
                        </FormText>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Password:</FormLabel>
                        <FormControl
                             {...register('password',{
                                required: true,
                                pattern: /^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                            })}
                        ></FormControl>
                        <FormText style = {{color:"red"}}>
                            {errors?.password &&
                             <p>Must be filled.Minimum 8 symbols. Necessarily one number, one uppercase letter, one lowercase letter.</p>}
                        </FormText>
                    </FormGroup>
                    <Button type = "submit"  disabled = {!isValid} variant="primary" style = {{ marginTop:"5px"}}>
                         Log In
                    </Button>
                </Form>
            </Container>
                
        </>) 
}

export default FormSingIn