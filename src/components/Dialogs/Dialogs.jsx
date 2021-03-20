import dialogs from './Dialogs.module.css'
import DialogsList from './DialogsList/DialogsList';
import CurrentDialog from './CurrentDialog/CurrentDialog';



const Dialogs = (props) => {
    return (
        <div className={dialogs.content}>
            <DialogsList state={ props.state.dialogs.dialogsList } dispatch={ props.dispatch } />
            <CurrentDialog state={ props.state.dialogs } dispatch={ props.dispatch } />
        </div>
    );
};

export default Dialogs;