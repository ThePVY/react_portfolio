import s from './Dialogs.module.css'
import CurrentDialog from './CurrentDialog/CurrentDialog'
import DialogsList from './DialogsList/DialogsList'
import { WithAuthRedirection } from '../../hoc/withAuthRedirection';
import { compose } from 'redux';
import { connect } from 'react-redux';
import selecror from '../../../redux/selectors';
import { actionCreator, thunkCreator } from '../../../redux/dialogs-reducer';
import SplitContent from '../../common/SplitContent/SplitContent';
import FixedHeight from '../../common/FixedHeight/FixedHeight';


const Dialogs = ({ dialogsList, messages, addMessage, resetForm }) => {
    return (
        <FixedHeight>
            <SplitContent 
            left={
                <DialogsList dialogsList={dialogsList} />
            }
            right={
                <CurrentDialog messages={messages} addMessage={addMessage} resetForm={resetForm} />
            } />
        </FixedHeight>
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