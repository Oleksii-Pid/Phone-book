import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormLabel, FormGroup, Modal, ModalBody, ModalHeader, ModalTitle, Container, Button, FormText } from "react-bootstrap";

function FormSingIn(){
    const {
         register, 
         handleSubmit, 
         formState: { errors } 
        } = useForm();
        
    const onSubmit = () =>{
        console.log("to phone book ....")
    }
    return(
        <>
            <Helmet>
                <title>Log In</title>
            </Helmet>
            <Container style = {{ width:"18rem"}}>
                <Form onSubmit = {handleSubmit(onSubmit)}>
                    <FormGroup>
                        <FormLabel>Email adress:</FormLabel>
                        <FormControl
                            {...register('emailAdress',{
                                required: "Must be filled",
                            })}
                        ></FormControl> 
                        <FormText style = {{color:"red"}}>
                            {errors?.emailAdress && <p>{errors?.emailAdress?.message || "Error!"}</p>}
                        </FormText>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Password:</FormLabel>
                        <FormControl
                             {...register('password',{
                                required: "Must be filled",
                                minLength: {
                                    value:8,
                                    message:"Minimum 8 symbols"
                                }
                            })}
                        ></FormControl>
                        <FormText style = {{color:"red"}}>
                            {errors?.password && <p>{errors?.password?.message || "Error!"}</p>}
                        </FormText>
                    </FormGroup>
                    <Button type = "submit" variant="outline-info" style = {{ marginTop:"5px"}}> Log In</Button>
                </Form>
            </Container>
                
        </>   
    )
}
export default FormSingIn