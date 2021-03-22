import User from './User/User'
import styles from './UsersList.module.css'


const UsersList = (props) => {
    return (
        <div className={styles.usersList}>
            {
                props.usersList.map((user) => <User user={user} onClick={props.onClick} />)
            }
        </div>
    )
}


export default UsersList