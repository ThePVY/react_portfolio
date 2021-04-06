import { connect } from "react-redux"
import { actionCreator, thunkCreator } from "../../../../redux/users-reducer"
import React, { useEffect } from 'react';
import UsersList from './UsersList';
import { compose } from "redux";
import selecror from "../../../../redux/selectors";


const UsersListContainer = ({ getUsers, selectedPage, setSelectedPage, setFollow, ...rest }) => {

    useEffect(() => {
        getUsers(selectedPage)
    }, [selectedPage])

    const onPageClick = p => setSelectedPage(p)

    return (
        <UsersList {...rest} onPageClick={onPageClick} onFollowClick={setFollow} selectedPage={selectedPage} />
    )
}

/*-------------------------------------------------------------------------------------------------------*/

const mapStateToProps = (state) => {
    return {
        usersList: selecror.users.getUsersList(state),
        pagesCount: selecror.users.getPagesCount(state),
        selectedPage: selecror.users.getSelectedPage(state),
        isFetching: selecror.users.getIsFetching(state),
        loadings: selecror.users.getLoadings(state)
    }
}

export default compose(
    connect(mapStateToProps, { ...thunkCreator, ...actionCreator.usersList }),
)(UsersListContainer)