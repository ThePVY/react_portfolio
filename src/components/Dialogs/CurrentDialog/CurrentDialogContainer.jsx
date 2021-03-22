import CurrentDialog from './CurrentDialog';
import { action } from '../../../redux/dialogs-reducer';
import { connect } from 'react-redux';



const mapStateToProps = (state) => {
    return {
        state: state.dialogs
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick() {
            dispatch(action.addMessage())
        },
        onChange(event) {
            dispatch(action.updateMessage(event.target.value))
        }
    }
}

const CurrentDialogContainer = connect(mapStateToProps, mapDispatchToProps)(CurrentDialog)

export default CurrentDialogContainer;