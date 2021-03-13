import profile from './Profile.module.css'

import LeftContent from "./Left-Content/Left-Content"
import Posts from "./Posts/Posts"

const Profile = () => {
    return (
        <div className={profile.content}>
            <LeftContent />
            <Posts />
        </div>
    );
};

export default Profile;