import { connect } from 'react-redux';
import DialogsList from './DialogsList'

const mapStateToProps = (state) => {
    return {
        dialogsList: state.dialogs.dialogsList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const DialogsListContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsList)


export default DialogsListContainer;