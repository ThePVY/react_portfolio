import { createRef } from 'react';
import styles from './CurrentDialog.module.css'
import Message from './Message/Message';
import { action } from './../../../redux/dialogs-reducer';

const CurrentDialog = (props) => {
    const textAreaRef = createRef()

    const onClick = () => props.dispatch(action.addMessage())

    const onChange = () => props.dispatch(action.updateMessage(textAreaRef.current.value))

    return (
        <div className={styles.dialog}>
            <div className={styles.messages}>
                {
                    props.state.messages.map((obj) => <Message message={obj.message} my={obj.my} />)
                }
            </div>
            <div>
                <textarea ref={ textAreaRef } value={ props.state.newMessage } onChange={ onChange } ></textarea>
            </div>
            <div>
                <button className='sendMessageButton' onClick={ onClick }>Send Message</button>
            </div>
        </div>
    );
};

export default CurrentDialog;