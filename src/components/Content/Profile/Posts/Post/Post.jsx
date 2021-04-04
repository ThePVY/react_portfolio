import styles from './Post.module.css'
import defaultImage from '../../../../../images/user-image.png'


const Post = ({ photos = {}, ...props }) => {
    
    const avaSrc = photos.small ? photos.small : defaultImage
    
    return (
        <div className={styles.post}>
            <div className={styles.imgContainer}>
                <img src={avaSrc} alt="q"/>
            </div>
            <div className={styles.messageContainer}>
                <span className={styles.message}>
                    { props.state.message }
                </span>
            </div>
            <div>
                <span>Like</span> { props.state.likesCount }
            </div>
        </div>
    );
};

export default Post;