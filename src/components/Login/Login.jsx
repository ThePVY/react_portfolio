import { Field, reduxForm } from 'redux-form'
import styles from './Login.module.css'

const Login = props => {

    const submit = jsonObj => {
        console.log(jsonObj)
        props.signIn(jsonObj)
    }

    return (
        <div className={styles.login} >
            <LoginFormContainer onSubmit={submit} />
        </div>
    )
}

export default Login


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.loginForm}>
            <div>
                <Field component='input' name='email' type='text' placeholder='Email' />    
            </div>
            <div>
                <Field component='input' name='password' type='text' placeholder='Password' />
            </div>
            <div>
                <Field component='input' name='rememberMe' type='checkbox' /> Remember me
            </div>
            <div>
                <button type='submit' >Submit</button>
            </div>
        </form>
    )
}

const LoginFormContainer = reduxForm({ form: 'login' })(LoginForm)