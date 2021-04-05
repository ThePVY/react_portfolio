import CurrentDialog from './CurrentDialog';
import { actionCreator, thunkCreator } from '../../../../redux/dialogs-reducer';
import { connect } from 'react-redux';
import selecror from '../../../../redux/selectors';



const mapStateToProps = (state) => {
    return {
        dialog: selecror.dialogs.getDialogs(state)
    }
}

const CurrentDialogContainer = connect(mapStateToProps, {...thunkCreator, ...actionCreator})(CurrentDialog)

export default CurrentDialogContainer;