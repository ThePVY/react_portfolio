import { createRef } from 'react';
import styles from './CurrentDialog.module.css'
import Message from './Message/Message';

const CurrentDialog = (props) => {
    return (
        <div className={styles.dialog}>
            <div className={styles.messages}>
                {
                    props.state.messages.map((obj) => <Message message={obj.message} my={obj.my} />)
                }
            </div>
            <div>
                <textarea value={ props.state.newMessage } onChange={ props.onChange } ></textarea>
            </div>
            <div>
                <button className='sendMessageButton' onClick={ props.onClick }>Send Message</button>
            </div>
        </div>
    );
};

export default CurrentDialog;