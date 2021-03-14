import styles from './CurrentDialog.module.css'

const CurrentDialog = () => {
    return (
        <div className={styles.dialog}>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button className='sendMessageButton'>Send Message</button>
            </div>
        </div>
    );
};

export default CurrentDialog;