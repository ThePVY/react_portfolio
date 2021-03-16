import styles from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div className={styles.leftContent}>
            <div>
                <div>
                    Ava
                </div>
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