import styles from './DialogsList.module.css'
import Dialog from './Dialog/Dialog'

const DialogsList = (props) => {
    return (
        <div className={styles.dialogList}>
            {
                props.dialogsList.map((obj) => <Dialog state={obj} />)
            }
        </div>
    )
}

export default DialogsList;