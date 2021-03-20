import styles from './Posts.module.css'
import Post from './Post/Post'
import { createRef } from 'react';
import { action } from './../../../redux/profile-reducer';


const Posts = (props) => {

    const textAreaRef = createRef();

    const onClickHandler = () => {
        props.dispatch(action.addPost());
    };

    const onChange = () => {
        props.dispatch(action.updatePost(textAreaRef.current.value));
    };
    
    return (
        <div className={styles.posts}>
            <div>
                <textarea ref={ textAreaRef } value={props.state.newPost} onChange={ onChange }></textarea>
            </div>
            <div className={styles.buttonContainer}>
                <button className='postButton' onClick={ onClickHandler }>Add Post</button>
            </div>
            {
                props.state.posts.map((obj) => <Post message={obj.message} likesCount={obj.likesCount}/>)
            }
        </div>
    );
};

export default Posts;