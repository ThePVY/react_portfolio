import { connect } from "react-redux";
import { actionCreator, thunkCreator } from "../../../../redux/profile-reducer";
import Posts from "./Posts"


const PostsContainer = ( { userId, authId, ...props }) => {

    return <Posts {...props} iam={ !!authId && userId === authId } />
}

const mapStateToProps = (state) => {
    return {
        photos: state.profile.info.data.photos,
        posts: state.profile.posts,
        authId: state.auth.data.id,
        userId: state.profile.userId
    }
}

export default connect(mapStateToProps, { ...actionCreator.posts, ...thunkCreator })(PostsContainer);