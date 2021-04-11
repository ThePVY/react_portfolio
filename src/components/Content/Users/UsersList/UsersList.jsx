import User from './User/User'
import styles from './UsersList.module.css'
import React from 'react';
import PagesList from './PagesList/PagesList';

const UsersList = props => {
    const { usersList, pagesCount, selectedPage, isFetching, loadings } = props
    const { onFollowClick, onPageClick, resetForm } = props
    const pageListProps = { onPageClick, pagesCount, selectedPage, isFetching, resetForm };
    
    return (
        <div className={styles.usersList}>
            <PagesList {...pageListProps}  />
            {
                usersList.map((user) => <User key={user.id} user={user} onFollowClick={onFollowClick} loadings={loadings} />)
            }
            <PagesList {...pageListProps}  />
        </div>
    )
}


export default UsersList