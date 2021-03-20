import styles from './Posts.module.css'
import Post from './Post/Post'

const Posts = (props) => {
    return (
        <div className={styles.posts}>
            <div>
                <textarea value={props.state.newPost} onChange={ props.onChange }></textarea>
            </div>
            <div className={styles.buttonContainer}>
                <button className='postButton' onClick={ props.onClick }>Add Post</button>
            </div>
            {
                props.state.posts.map((obj) => <Post state={obj} />)
            }
        </div>
    );
};

export default Posts;