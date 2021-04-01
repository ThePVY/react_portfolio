import styles from './Posts.module.css'
import Post from './Post/Post'

const Posts = ({ iam, updatePost, addPost, posts: { newPost, posts } }) => {
    return (
        <div className={styles.posts}>
            {
                iam ?
                    <>
                        <div>
                            <textarea value={newPost} onChange={(e) => updatePost(e.target.value)}></textarea>
                        </div>
                        <div className={styles.buttonContainer}>
                            <button className='postButton' onClick={addPost}>Add Post</button>
                        </div>
                    </>
                    :
                    <div className={styles.headerContainer}>
                        <span className={styles.header}>Posts of ...</span>
                    </div>
            }
            {
                posts.map((obj, i) => <Post key={i} state={obj} />)
            }
        </div>
    );
};

export default Posts;