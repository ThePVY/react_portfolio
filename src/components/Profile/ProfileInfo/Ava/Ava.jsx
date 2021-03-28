import styles from './Ava.module.css'
import Preloader from '../../../common/Preloader'

const Ava = ({ photos }) => {
    return (
        <div className={styles.ava}>
            {
                photos ? <img src={photos.small} alt='' /> : <Preloader isFetching={true} />
            }
        </div>
    );
};

export default Ava;