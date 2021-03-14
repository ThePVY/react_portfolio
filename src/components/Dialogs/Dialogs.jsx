import dialogs from './Dialogs.module.css'
import DialogsList from './DialogsList/DialogsList';
import CurrentDialog from './CurrentDialog/CurrentDialog';



const Dialogs = () => {
    return (
        <div className={dialogs.content}>
            <DialogsList />
            <CurrentDialog />
        </div>
    );
};

export default Dialogs;