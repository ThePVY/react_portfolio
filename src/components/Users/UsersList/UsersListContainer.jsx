import { connect } from "react-redux"
import { action } from "../../../redux/users-reducer"
import UsersList from "./UsersList"


const mapStateToProps = (state) => {
    return {
        usersList: state.users.usersList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick(userId) {
            dispatch(action.followClick(userId))
        }
    }
}

const UsersListContainer = connect(mapStateToProps, mapDispatchToProps)(UsersList)

export default UsersListContainer
