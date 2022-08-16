function FormSingIn(){
    console.log(' Autorization...')
    return(
        <form>
            <label htmlFor = "email"> Email:</label>
            <input name = "email"/>
            <br/>
            <label htmlFor = "password">Password:</label>
            <input name = "password"/>
            <br/>
            <button type = "submit">Sing in</button>
        </form>
    )
}
export default FormSingIn