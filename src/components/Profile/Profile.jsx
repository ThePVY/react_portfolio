import styles from './Profile.module.css'

import ProfileInfo from "./ProfileInfo/ProfileInfo"
import Posts from "./Posts/Posts"

const Profile = (props) => {
    return (
        <div className={styles.content}>
            <ProfileInfo />
            <Posts state={ props.state.profile } dispatch={ props.dispatch } />
        </div>
    );
};

export default Profile;