import styles from './User.module.css'
import defaultUserImage from './../../../../images/user-image.png'
import { NavLink } from 'react-router-dom'

const User = (props) => {

    const { user, onClick, onAvaClick } = props

    const onClickHandler = () => {
        onClick(user.id)
    }

    const onAvaClickHandler = () => {
        onAvaClick(user.id)
    }

    return (
        <div className={styles.user} >
            <div className={styles.avatar}>
                <div>
                    <NavLink  to={'/profile/' + user.id} activeClassName={styles.active} >
                        <img className={styles.image} src={user.photos.small ? user.photos.small : defaultUserImage} alt="avatar" onClick={onAvaClickHandler} />
                    </NavLink>
                </div>
                <div className={styles.follow}>
                    <button onClick={onClickHandler} >
                        {(user.followed) ? 'UNFOLLOW' : 'FOLLOW'}
                    </button>
                </div>
            </div>
            <div className={styles.info}>
                <div className={styles.infoLeft}>
                    <div>
                        <span className={styles.name}>{user.name}</span>
                    </div>
                    <div>
                        <span className={styles.status}>{user.status}</span>
                    </div>
                </div>
                <div className={styles.infoRight}>
                    <div>
                        <span className={styles.location}>{'props.user.location.country'}</span>,
                    </div>
                    <div>
                        <span className={styles.location}>{'props.user.location.city'}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User