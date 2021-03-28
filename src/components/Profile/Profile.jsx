import styles from './Profile.module.css'
import PostsContainer from "./Posts/PostsContainer"
import ProfileInfoContainer from './ProfileInfo/ProfileInfoContainer';

const Profile = (props) => {
    return (
        <div className={styles.content}>
            <ProfileInfoContainer />
            <PostsContainer />
        </div>
    );
};

export default Profile;