import styles from './CurrentDialog.module.css'
import Message from './Message/Message';

const CurrentDialog = ({ dialog, addMessage, updateMessage }) => {
    return (
        <div className={styles.dialog}>
            <div className={styles.messages}>
                {
                    dialog.messages.map((obj) => <Message message={obj.message} my={obj.my} />)
                }
            </div>
            <div>
                <textarea value={ dialog.newMessage } onChange={ (e) => updateMessage(e.target.value) } ></textarea>
            </div>
            <div>
                <button className='sendMessageButton' onClick={ addMessage }>Send Message</button>
            </div>
        </div>
    );
};

export default CurrentDialog;