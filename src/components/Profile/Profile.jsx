import styles from './Profile.module.css'

import ProfileInfo from "./ProfileInfo/ProfileInfo"
import PostsContainer from "./Posts/PostsContainer"
import { Consumer } from '../Provider';

const Profile = (props) => {
    return (
        <div className={styles.content}>
            <ProfileInfo />
            <PostsContainer />
        </div>
    );
};

export default Profile;