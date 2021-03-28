import styles from './ProfileInfo.module.css'
import Ava from './Ava/Ava'
import AboutMe from './AboutMe/AboutMe'
import Contacts from './Contacts/Contacts'

const ProfileInfo = ({ data }) => {
    return (
        <div className={styles.ProfileInfo}>
            <div>
                <Ava photos={data.photos} />
                <AboutMe aboutMe={data.aboutMe}/>
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