import { connect } from "react-redux";
import { actionCreator } from "../../../redux/profile-reducer";
import Posts from "./Posts"


const PostsContainer = ( { userId, authId, ...props }) => {


    return <Posts {...props} iam={ userId === authId } />
}

const mapStateToProps = (state) => {
    return {
        posts: state.profile.posts,
        authId: state.auth.data.id,
        userId: state.profile.userId
    }
}

export default connect(mapStateToProps, actionCreator.posts)(PostsContainer);