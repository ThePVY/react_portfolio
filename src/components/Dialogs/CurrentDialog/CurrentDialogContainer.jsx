import CurrentDialog from './CurrentDialog';
import { action } from '../../../redux/dialogs-reducer';
import { Consumer } from '../../Provider';


const CurrentDialogContainer = (props) => {
    return (
        <Consumer>
            {
                (store) => {
                    const onClick = () => {
                        store.dispatch(action.addMessage())
                    }

                    const onChange = (event) => {
                        store.dispatch(action.updateMessage(event.target.value))
                    }

                    return <CurrentDialog state={store.getState().dialogs} onClick={onClick} onChange={onChange} />
                }
            }
        </Consumer>
    )
};

export default CurrentDialogContainer;