import dialogs from './Dialogs.module.css'
import CurrentDialogContainer from './CurrentDialog/CurrentDialogContainer';
import DialogsListContainer from './DialogsList/DialogsListContainer';



const Dialogs = (props) => {
    return (
        <div className={dialogs.content}>
            <DialogsListContainer />
            <CurrentDialogContainer />
        </div>
    );
};

export default Dialogs;