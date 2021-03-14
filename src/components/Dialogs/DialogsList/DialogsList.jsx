import styles from './DialogsList.module.css'
import Dialog from './Dialog/Dialog'

const DialogsList = () => {
    return (
        <div className={styles.dialogList}>
            <Dialog preview="Hi"/>
            <Dialog preview="Hi!"/>
            <Dialog />
        </div>
    );
};

export default DialogsList;