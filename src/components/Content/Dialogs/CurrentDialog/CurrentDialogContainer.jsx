import CurrentDialog from './CurrentDialog';
import { actionCreator, thunkCreator } from '../../../../redux/dialogs-reducer';
import { connect } from 'react-redux';



const mapStateToProps = (state) => {
    return {
        dialog: state.dialogs
    }
}

const CurrentDialogContainer = connect(mapStateToProps, {...thunkCreator, ...actionCreator})(CurrentDialog)

export default CurrentDialogContainer;