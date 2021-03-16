import { createRef } from 'react';
import styles from './CurrentDialog.module.css'
import Message from './Message/Message';

const CurrentDialog = (props) => {
    const textAreaRef = createRef();

    const onClickHandler = () => {
        alert( textAreaRef.current.value );
    };

    return (
        <div className={styles.dialog}>
            <div className={styles.messages}>
                {
                    props.messages.map((obj) => <Message message={obj.message} my={obj.my} />)
                }
            </div>
            <div>
                <textarea ref={ textAreaRef }></textarea>
            </div>
            <div>
                <button className='sendMessageButton' onClick={ onClickHandler }>Send Message</button>
            </div>
        </div>
    );
};

export default CurrentDialog;