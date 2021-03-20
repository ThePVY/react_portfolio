import dialogs from './Dialogs.module.css'
import DialogsList from './DialogsList/DialogsList';
import CurrentDialogContainer from './CurrentDialog/CurrentDialogContainer';
import { Consumer } from '../Provider';



const Dialogs = (props) => {
    return (
        <div className={dialogs.content}>
            <DialogsList />
            <CurrentDialogContainer />
        </div>
    );
};

export default Dialogs;