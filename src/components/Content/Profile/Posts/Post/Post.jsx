import s from './Post.module.css'
import defaultImage from '../../../../../images/user-image.png'
import Hover from '../../../../common/Hover/Hover'


const Post = ({ iam, photos = {}, deletePost, ...props }) => {
    
    const avaSrc = photos.small ? photos.small : defaultImage
    
    return (
        <div className={s.post}>
            <div className={s.centered}>
                <img src={avaSrc} alt="q"/>
                <span className={s.like}>Like</span> { props.state.likesCount }
            </div>
            <div className={s.messageContainer}>
                <span className={`${s.message} ${s.centered}`}>
                    { props.state.message }
                </span>
            </div>
            { iam && <Hover style={s.delete}
                base={<button >Hover over me</button>} 
                hovered={<button onClick={deletePost} >Dlelete Post</button>} 
            /> }
        </div>
    );
};

export default Post;