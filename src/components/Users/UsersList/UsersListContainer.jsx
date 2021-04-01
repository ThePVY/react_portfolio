import { connect } from "react-redux"
import { actionCreator, thunkCreator } from "../../../redux/users-reducer"
import React from 'react';
import UsersList from './UsersList';
import { compose } from "redux";


class UsersListAPI extends React.Component {
    render = () => {
        return (
            <UsersList {...this.props} onPageClick={this.onPageClick} onFollowClick={this.onFollowClick} />
        )
    }

    componentDidMount = () => {
        const { selectedPage, getUsers } = this.props
        getUsers(selectedPage)
    }

    onPageClick = p => {
        const { setSelectedPage, getUsers } = this.props
        setSelectedPage(p)
        getUsers(p)
    }

    onFollowClick = (userId, followed) => {
        this.props.setFollow(userId, followed)
    }

}

/*-------------------------------------------------------------------------------------------------------*/

const mapStateToProps = (state) => {
    return {
        usersList: state.users.usersList,
        pagesCount: state.users.pagesTotalCount,
        selectedPage: state.users.selectedPage,
        isFetching: state.users.isFetching,
        loadings: state.users.loadings
    }
}

export default compose(
    connect(mapStateToProps, {...thunkCreator, ...actionCreator.usersList}),
)(UsersListAPI)