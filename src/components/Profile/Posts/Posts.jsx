import styles from './Posts.module.css'
import Post from './Post/Post'

const Posts = ({ updatePost, addPost, state: { newPost, posts } }) => {
    return (
        <div className={styles.posts}>
            <div>
                <textarea value={newPost} onChange={ (e) => updatePost(e.target.value) }></textarea>
            </div>
            <div className={styles.buttonContainer}>
                <button className='postButton' onClick={ addPost }>Add Post</button>
            </div>
            {
                posts.map((obj) => <Post state={obj} />)
            }
        </div>
    );
};

export default Posts;