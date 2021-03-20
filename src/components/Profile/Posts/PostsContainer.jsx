import { action } from "../../../redux/profile-reducer";
import { Consumer } from "../../Provider";
import Posts from "./Posts"

const PostsContainer = (props) => {
    return (
        <Consumer>
            {
                (store) => {
                    const onClick = () => {
                        store.dispatch(action.addPost())
                    };
                
                    const onChange = (event) => {
                        store.dispatch(action.updatePost(event.target.value))
                    };

                    return <Posts state={store.getState().profile} onClick={onClick} onChange={onChange} />
                }
            }
        </Consumer>
    );
};

export default PostsContainer;