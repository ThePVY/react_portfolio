import styles from './Posts.module.css'
import Post from './Post/Post'

const Posts = () => {
    return (
        <div className={styles.posts}>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button className='postButton'>Add Post</button>
            </div>
            <Post message="It's my first post!" likesCount='1'/>
            <Post message="Hi!" likesCount='21'/>
            <Post />
        </div>
    );
};

export default Posts;