import { connect } from 'react-redux';
import DialogsList from './DialogsList'

const mapStateToProps = (state) => {
    return {
        dialogsList: state.dialogs.dialogsList
    }
}

const DialogsListContainer = connect(mapStateToProps, {})(DialogsList)


export default DialogsListContainer;