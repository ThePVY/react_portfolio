import s from './Dialogs.module.css'
import CurrentDialog from './CurrentDialog/CurrentDialog'
import DialogsList from './DialogsList/DialogsList'
import { WithAuthRedirection } from '../../hoc/withAuthRedirection';
import { compose } from 'redux';
import { connect } from 'react-redux';
import selecror from '../../../redux/selectors';
import { actionCreator, thunkCreator } from '../../../redux/dialogs-reducer';


const Dialogs = ({ dialogsList, messages, addMessage, resetForm }) => {
    return (
        <div className={s.dialogs}>
            <DialogsList dialogsList={dialogsList} />
            <CurrentDialog messages={messages} addMessage={addMessage} resetForm={resetForm} />
        </div>
    );
};


const mapStateToProps = (state) => {
    return {
        messages: selecror.dialogs.getMessages(state),
        dialogsList: selecror.dialogs.getDialogsList(state)
    }
}

export default compose(
    connect(mapStateToProps, {...thunkCreator, ...actionCreator}),
    WithAuthRedirection
)(Dialogs)