import styles from './AboutMe.module.css'

const AboutMe = ({ aboutMe }) => {
    return (
        <div className={styles.aboutMe}>
            <div>
                <span className={styles.header}>About Me</span>
            </div>
            {
                aboutMe
            }
        </div>
    );
};

export default AboutMe;