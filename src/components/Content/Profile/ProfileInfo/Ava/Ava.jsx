import styles from './Ava.module.css'
import defaultUserImage from '../../../../../images/user-image.png'

const Ava = ({ photos = {} }) => {
    return (
        <div className={styles.ava}>
            {
                photos.small? <img src={photos.small} alt='' /> : <img src={defaultUserImage} alt='' />
            }
        </div>
    );
};

export default Ava;