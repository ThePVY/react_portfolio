import CurrentDialog from './CurrentDialog';
import { actionCreator } from '../../../redux/dialogs-reducer';
import { connect } from 'react-redux';



const mapStateToProps = (state) => {
    return {
        dialog: state.dialogs
    }
}

const CurrentDialogContainer = connect(mapStateToProps, actionCreator)(CurrentDialog)

export default CurrentDialogContainer;