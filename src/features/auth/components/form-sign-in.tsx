import { Helmet } from "react-helmet";

function FormSingIn(){
    
    return(
        <>
            <Helmet>
                <title>Log In</title>
            </Helmet>
            <form>
                <label htmlFor = "email"> Email:</label>
                <input name = "email"/>
                <br/>
                <label htmlFor = "password">Password:</label>
                <input name = "password"/>
                <br/>
                <button type = "submit">Sing in</button>
            </form>
    </>     
            
    )
}
export default FormSingIn