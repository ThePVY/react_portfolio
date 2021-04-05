import { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import { noErrorRequired, validate100 } from '../../../../scripts/validates';
import { Textarea } from '../../../common/CustomFields/CustomFields';
import styles from './CurrentDialog.module.css'
import Message from './Message/Message';

const CurrentDialog = ({ dialog, addMessage, resetForm }) => {

    const sendMessage = ({ message }) => {
        addMessage(message)
        resetForm('message')
    }

    return (
        <div className={styles.dialog}>
            <div className={styles.messages}>
                {
                    dialog.messages.map((obj) => <Message message={obj.message} my={obj.my} />)
                }
            </div>
            <MessageForm onSubmit={sendMessage} />
        </div>
    );
};

export default CurrentDialog;

/*---------------------------------------------------------------------------------*/

let MessageForm = props => {

    const [messageIsValid, setMessageIsValid] = useState(false)
    const getMessageIsValid = (valid = false) => setMessageIsValid(valid)

    return (
        <form onSubmit={props.handleSubmit} className={styles.messageForm} >
            <div>
                <Field component={Textarea} name='message' type='text' placeholder='Enter your message'
                    validate={[noErrorRequired, validate100]} isValid={getMessageIsValid} />
            </div>
            <div className={styles.buttonContainer}>
                <button type='submit' disabled={!messageIsValid} >Send Message</button>
            </div>
        </form>
    )
}

MessageForm = reduxForm({ form: 'message' })(MessageForm)
