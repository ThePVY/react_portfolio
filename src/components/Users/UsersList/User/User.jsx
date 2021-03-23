import styles from './User.module.css'

const User = (props) => {
    
    const onClick = () => {
        props.onClick(props.user.id)
    }

    return (
        <div className={styles.user} >
            <div className={styles.avatar}>
                <div>
                    <img className={styles.image} src={props.user.ava} alt="avatar"/>
                </div>
                <div className={styles.follow}>
                    <button onClick={onClick} >FOLLOW</button>
                </div>
            </div>
            <div className={styles.info}>
                <div className={styles.infoLeft}>
                    <div>
                        <span className={styles.name}>{props.user.name}</span>
                    </div>
                    <div>
                        <span className={styles.status}>{props.user.status}</span>
                    </div>
                </div>
                <div className={styles.infoRight}>
                    <div>
                        <span className={styles.location}>{props.user.location.country}</span>,
                    </div>    
                    <div>
                        <span className={styles.location}>{props.user.location.city}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User