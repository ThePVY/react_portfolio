import { connect } from "react-redux";
import { actionCreator } from "../../../redux/profile-reducer";
import Posts from "./Posts"

const mapStateToProps = (state) => {
    return {
        state: state.profile.posts
    }
}

export default connect(mapStateToProps, actionCreator.posts)(Posts);