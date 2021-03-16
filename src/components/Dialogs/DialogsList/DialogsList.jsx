import styles from './DialogsList.module.css'
import Dialog from './Dialog/Dialog'

const DialogsList = (props) => {

    return (
        <div className={styles.dialogList}>
            {
                props.dialogs.map((obj) => <Dialog name={obj.name} id={obj.id} preview={obj.preview}/>)
            }
        </div>
    );
};

export default DialogsList;