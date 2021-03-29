import User from './User/User'
import styles from './UsersList.module.css'
import React from 'react';
import PagesList from './PagesList/PagesList';

const UsersList = props => {
    const { usersList, pagesCount, selectedPage, isFetching } = props
    const { onFollowClick, onPageClick } = props
    const pageListProps = { onPageClick, pagesCount, selectedPage, isFetching };
    
    return (
        <div className={styles.usersList}>
            <PagesList {...pageListProps}  />
            {
                usersList.map((user) => <User key={user.id} user={user} onFollowClick={onFollowClick} />)
            }
            <PagesList {...pageListProps}  />
        </div>
    )
}


export default UsersList