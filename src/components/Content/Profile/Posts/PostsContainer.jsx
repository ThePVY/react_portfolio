import { connect } from "react-redux";
import { actionCreator, thunkCreator } from "../../../../redux/profile-reducer";
import selecror from "../../../../redux/selectors";
import Posts from "./Posts"


const PostsContainer = ( { userId, authId, ...props }) => {

    return <Posts {...props} iam={ !!authId && userId === authId } />
}

const mapStateToProps = (state) => {
    return {
        photos: selecror.profile.getPhotos(state),
        posts: selecror.profile.getPosts(state),
        authId: selecror.auth.getAuthId(state),
        userId: selecror.profile.getUserId(state)
    }
}

export default connect(mapStateToProps, { ...actionCreator.posts, ...thunkCreator })(PostsContainer);