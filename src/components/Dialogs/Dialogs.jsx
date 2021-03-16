import dialogs from './Dialogs.module.css'
import DialogsList from './DialogsList/DialogsList';
import CurrentDialog from './CurrentDialog/CurrentDialog';



const Dialogs = (props) => {
    return (
        <div className={dialogs.content}>
            <DialogsList dialogs={ props.state.dialogsList }/>
            <CurrentDialog messages={ props.state.messages }/>
        </div>
    );
};

export default Dialogs;