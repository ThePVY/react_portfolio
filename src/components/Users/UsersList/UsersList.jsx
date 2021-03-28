import User from './User/User'
import styles from './UsersList.module.css'
import React from 'react';
import PagesList from './PagesList/PagesList';

const UsersList = props => {
    const { usersList, pagesCount, selectedPage, isFetching } = props
    const { onFollowClick, onPageClick, onAvaClick } = props

    const pageListProps = { usersList, pagesCount, selectedPage, isFetching };
    
    return (
        <div className={styles.usersList}>
            <PagesList pagesCount={pagesCount} selectedPage={selectedPage} isFetching={isFetching} onPageClick={onPageClick}  />
            {
                usersList.map((user) => <User key={user.id} user={user} onClick={onFollowClick} onAvaClick={onAvaClick} />)
            }
            <PagesList pagesCount={pagesCount} selectedPage={selectedPage} isFetching={isFetching} onPageClick={onPageClick}  />
        </div>
    )
}


export default UsersList