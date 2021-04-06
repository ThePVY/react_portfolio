import { useEffect } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import selecror from '../../../redux/selectors'
import { thunkCreator, actionCreator } from '../../../redux/users-reducer'
import styles from './Users.module.css'
import UsersList from './UsersList/UsersList'

const Users = ({ getUsers, selectedPage, setSelectedPage, setFollow, ...rest }) => {
    
    useEffect(() => {
        getUsers(selectedPage)
    }, [selectedPage, getUsers])

    const onPageClick = p => setSelectedPage(p)
    
    return (
        <div className={styles.content}>
            <UsersList {...rest} onPageClick={onPageClick} onFollowClick={setFollow} selectedPage={selectedPage} />
        </div>
    )
}

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
)(Users)