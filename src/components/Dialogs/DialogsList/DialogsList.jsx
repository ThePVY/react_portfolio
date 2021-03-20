import styles from './DialogsList.module.css'
import Dialog from './Dialog/Dialog'
import { Consumer } from '../../Provider';

const DialogsList = (props) => {

    return (
        <Consumer>
            {
                (store) => {
                    return (
                        <div className={styles.dialogList}>
                            {
                                store.getState().dialogs.dialogsList.map((obj) => <Dialog state={obj} />)
                            }
                        </div>
                    )
                }
            }
        </Consumer>

    );
};

export default DialogsList;