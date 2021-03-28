import { connect } from "react-redux"
import { action } from "../../../redux/users-reducer"
import * as axios from 'axios'
import React from 'react';
import UsersList from './UsersList';


class UsersListAPI extends React.Component {
    render = () => {
        return (
            <UsersList {...this.props } onPageClick={this.onPageClick} onAvaClick={this.onAvaClick} />
        )
    }

    onPageClick = p => {
        const { setUsers, setUsersCount, setSelectedPage, toggleIsFetching } = this.props
        setSelectedPage(p)
        toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}`)
            .then((response) => {
                setUsers(response.data.items)
                setUsersCount(response.data.totalCount)
                toggleIsFetching(false)
            })
    }

    onAvaClick = id => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
        .then((response) => {
        })
    }

    componentDidMount = () => {
        const { selectedPage } = this.props
        const { setUsers, setUsersCount } = this.props
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${selectedPage}`)
            .then((response) => {
                setUsers(response.data.items)
                setUsersCount(response.data.totalCount)
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

