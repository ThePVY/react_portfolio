import { connect } from 'react-redux';
import selecror from '../../../../redux/selectors';
import DialogsList from './DialogsList'

const mapStateToProps = (state) => {
    return {
        dialogsList: selecror.dialogs.getDialogsList(state)
    }
}

const DialogsListContainer = connect(mapStateToProps, null)(DialogsList)


export default DialogsListContainer;