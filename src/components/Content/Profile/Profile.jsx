import s from './Profile.module.css'
import PostsContainer from "./Posts/PostsContainer"
import ProfileInfoContainer from './ProfileInfo/ProfileInfoContainer';

const Profile = (props) => {
    return (
        <div className={s.profile}>
            <ProfileInfoContainer />
            <PostsContainer />
        </div>
    );
};

export default Profile;