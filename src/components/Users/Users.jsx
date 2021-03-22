import styles from './Users.module.css'
import UsersListContainer from './UsersList/UsersListContainer'

const Users = (props) => {
    return(
        <div className={styles.content}>
            <UsersListContainer />
        </div>
    )
}

export default Users