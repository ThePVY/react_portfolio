import { connect } from "react-redux";
import { action } from "../../../redux/profile-reducer";
import Posts from "./Posts"

const mapStateToProps = (state) => {
    return {
        state: state.profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick() {
            dispatch(action.addPost())
        },
        onChange(event) {
            dispatch(action.updatePost(event.target.value))
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer;