import { connect } from 'react-redux'
import { compose } from 'redux'
import { Field, reduxForm } from 'redux-form'
import { useValidation } from '../../../hooks/useValidation'
import { thunkCreator } from '../../../redux/auth-reducer'
import { required } from '../../../scripts/validates'
import { Input } from '../../common/CustomFields/CustomFields'
import SinglePane from '../../common/SinglePane/SinglePane'
import withProfileRedirection from '../../hoc/withProfileRedirection'
import styles from './Login.module.css'

const Login = props => {

    const submit = jsonObj => {
        props.signIn(jsonObj)
    }

    return (
        <SinglePane>
            <LoginForm onSubmit={submit} />
        </SinglePane>
    )
}

export default compose(
    connect(null, {...thunkCreator}),
    withProfileRedirection
)(Login)



/*---------------------------------------------------------------------------------------------------*/

let LoginForm = (props) => {

    const [ { emailIsValid, setEmailIsValid },  ] = useValidation(false)
    const [ { passwordIsValid, setPasswordIsValid },  ] = useValidation(false)

    return (
        <form onSubmit={props.handleSubmit} className={styles.loginForm}>
            <div>
                <Field component={Input} name='email' type='text' placeholder='Email'
                    validate={[required]} isValid={setEmailIsValid} />
            </div>
            <div>
                <Field component={Input} name='password' type='password' placeholder='Password'
                    validate={[required]} isValid={setPasswordIsValid} />
            </div>
            <div className={styles.checkboxContainer}>
                <Field component={Input} name='rememberMe' type='checkbox' /> Remember me
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