import styles from './ProfileInfo.module.css'
import Ava from './Ava/Ava'
import AboutMe from './AboutMe/AboutMe'
import Contacts from './Contacts/Contacts'
import ProfileStatus from './ProfileStatus/ProfileStatus';

const ProfileInfo = ({ data, ...other  }) => {
    return (
        <div className={styles.ProfileInfo}>
            <div>
                <Ava photos={data.photos} />
                <ProfileStatus {...other} />
                <AboutMe aboutMe={data.aboutMe} name={data.fullName}/>
                <Contacts contacts={data.contacts} />
                <div>
                    Images
                </div>
                <div>
                    Music
                </div>
                <div>
                    Video
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;