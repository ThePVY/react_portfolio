import { useCallback, useEffect } from 'react';
import { useState } from 'react';
import { withRouter } from 'react-router';
import { change, Field, reduxForm } from 'redux-form';
import { useValidation } from '../../../../../hooks/useValidation';
import { noErrorRequired, validate50 } from '../../../../../scripts/validates';
import { Textarea } from '../../../../common/CustomFields/CustomFields';
import styles from './ProfileStatus.module.css'

const ProfileStatus = (props) => {

    const { status = 'No status...', publishStatus, authId } = props
    const { userId = authId } = props.match.params

    const [editMode, setEditMode] = useState(false)

    const toggleMode = e => {
        if (authId === userId) {
            setEditMode(!editMode)
        }
    }

    const publish = ({ status }) => {
        publishStatus(status)
        setEditMode(false)
    }

    return (
        <div className={styles.profileStatus}>
            {
                editMode ?
                    <StatusForm onSubmit={publish} cancel={toggleMode} status={status} />
                    :
                    <div className={styles.statusContainer}>
                        <span onClick={toggleMode} >{status}</span>
                    </div>
            }
        </div>
    );
};

export default withRouter(ProfileStatus);

/*---------------------------------------------------------------------------------*/

let StatusForm = props => {

    const { dispatch, status, handleSubmit, cancel } = props

    const [ { statusIsValid, setStatusIsValid },  ] = useValidation(false)

    useEffect(() => {
        dispatch(change('status', 'status', status))
    }, [status, dispatch])

    return (
        <form className={styles.statusForm} onSubmit={handleSubmit}>
            <div>
                <Field component={Textarea} name='status' type='text' autoFocus={true} placeholder='Enter your Status'
                    validate={[noErrorRequired, validate50]} isValid={setStatusIsValid} />
            </div>
            <div className={styles.buttonsContainer}>
                <button type='submit' disabled={!statusIsValid} >Publish</button>
                <button type='button' onClick={cancel} >Cancel</button>
            </div>
        </form>
    )
}

StatusForm = reduxForm({ form: 'status' })(StatusForm)
