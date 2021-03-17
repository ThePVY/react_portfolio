import styles from './Posts.module.css'
import Post from './Post/Post'
import { createRef } from 'react';



const Posts = (props) => {

    const textAreaRef = createRef();

    const onClickHandler = () => {
        props.callbacks.addPost();
    };

    const onChange = () => {
        props.callbacks.updatePost(textAreaRef.current.value);
    };
    
    return (
        <div className={styles.posts}>
            <div>
                <textarea ref={ textAreaRef } value={props.data.newPost} onChange={ onChange }></textarea>
            </div>
            <div className={styles.buttonContainer}>
                <button className='postButton' onClick={ onClickHandler }>Add Post</button>
            </div>
            {
                props.data.posts.map((obj) => <Post message={obj.message} likesCount={obj.likesCount}/>)
            }
        </div>
    );
};

export default Posts;