import s from './Dialogs.module.css'
import CurrentDialogContainer from './CurrentDialog/CurrentDialogContainer';
import DialogsListContainer from './DialogsList/DialogsListContainer';
import { WithAuthRedirection } from '../../hoc/withAuthRedirection';



const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <DialogsListContainer />
            <CurrentDialogContainer />
        </div>
    );
};

export default WithAuthRedirection(Dialogs);