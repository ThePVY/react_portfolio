import s from './Post.module.css'
import defaultImage from '../../../../../images/user-image.png'


const Post = ({ photos = {}, ...props }) => {
    
    const avaSrc = photos.small ? photos.small : defaultImage
    
    return (
        <div className={s.post}>
            <div className={s.centered}>
                <img src={avaSrc} alt="q"/>
                <span>Like</span> { props.state.likesCount }
            </div>
            <div className={s.messageContainer}>
                <span className={`${s.message} ${s.centered}`}>
                    { props.state.message }
                </span>
            </div>
        </div>
    );
};

export default Post;