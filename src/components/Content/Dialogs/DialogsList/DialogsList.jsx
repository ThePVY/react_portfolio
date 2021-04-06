import styles from './DialogsList.module.css'
import Dialog from './Dialog/Dialog'

const DialogsList = ({ dialogsList }) => {
    return (
        <div className={styles.dialogList}>
            {
                dialogsList.map((obj, i) => <Dialog key={i} state={obj} />)
            }
        </div>
    )
}

export default DialogsList;