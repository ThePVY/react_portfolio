import { connect } from "react-redux"
import { action } from "../../../redux/users-reducer"
import axios from "axios"
import React from 'react';
import UsersList from './UsersList';
import { usersAPI } from "../../../api/users-api";


class UsersListAPI extends React.Component {
    render = () => {
        return (
            <UsersList {...this.props} onPageClick={this.onPageClick} onFollowClick={this.onFollowClick} />
        )
    }

    componentDidMount = () => {
        const { selectedPage } = this.props
        const { setUsers, setUsersCount } = this.props
        usersAPI.getUsers(selectedPage)
            .then((data) => {
                setUsers(data.items)
                setUsersCount(data.totalCount)
            })
    }

    onPageClick = p => {
        const { setUsers, setUsersCount, setSelectedPage, toggleIsFetching } = this.props
        setSelectedPage(p)
        toggleIsFetching(true)
        usersAPI.getUsers(p)
            .then((data) => {
                setUsers(data.items)
                setUsersCount(data.totalCount)
                toggleIsFetching(false)
            })
    }

    onFollowClick = (userId, followed) => {
        const { toggleFollow, toggleIsFetching } = this.props
        toggleIsFetching(true)
        usersAPI.followRequest(userId, followed).then((data) => {
            toggleIsFetching(false)
            if (!data.resultCode) toggleFollow(userId)
        })
    }

}

/*-------------------------------------------------------------------------------------------------------*/

const mapStateToProps = (state) => {
    return {
        usersList: state.users.usersList,
        pagesCount: state.users.pagesTotalCount,
        selectedPage: state.users.selectedPage,
        isFetching: state.users.isFetching
    }
}

export default connect(mapStateToProps, action.usersList)(UsersListAPI)

