import { useState } from 'react'
import { Field, reduxForm } from 'redux-form'
import { required } from '../../../scripts/validates'
import { Input } from '../../common/CustomFields/CustomFields'
import withProfileRedirection from '../../hoc/withProfileRedirection'
import styles from './Login.module.css'

const Login = props => {

    const submit = jsonObj => {
        props.signIn(jsonObj)
    }

    return (
        <div className={styles.login} >
            <LoginForm onSubmit={submit} />
        </div>
    )
}

export default withProfileRedirection(Login)

let LoginForm = (props) => {

    const [emailIsValid, setEmailIsValid] = useState(false)
    const [passwordIsValid, setPasswordIsValid] = useState(false)

    const getEmailValid = (valid = false) => setEmailIsValid(valid)
    const getpasswordValid = (valid = false) => setPasswordIsValid(valid)

    return (
        <form onSubmit={props.handleSubmit} className={styles.loginForm}>
            <div>
                <Field component={Input} name='email' type='text' placeholder='Email'
                    validate={[required]} isValid={getEmailValid} />
            </div>
            <div>
                <Field component={Input} name='password' type='password' placeholder='Password'
                    validate={[required]} isValid={getpasswordValid} />
            </div>
            <div>
                <Field component='input' name='rememberMe' type='checkbox' /> Remember me
            </div>
            {
                props.error ? <div><span className={styles.error} >{props.error}</span></div> : ''
            }
            <div>
                <button type='submit' disabled={!emailIsValid || !passwordIsValid} >Submit</button>
            </div>
        </form>
    )
}

LoginForm = reduxForm({ form: 'login' })(LoginForm)