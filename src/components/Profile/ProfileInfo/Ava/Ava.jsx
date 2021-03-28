import styles from './Ava.module.css'
import Preloader from '../../../common/Preloader'
import defaultUserImage from '../../../../images/user-image.png'

const Ava = ({ photos }) => {
    return (
        <div className={styles.ava}>
            {
                photos ? photos.small? <img src={photos.small} alt='' /> : <img src={defaultUserImage} alt='' />
                : <Preloader isFetching={true} />
            }
        </div>
    );
};

export default Ava;