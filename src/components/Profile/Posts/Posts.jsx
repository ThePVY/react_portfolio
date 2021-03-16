import styles from './Posts.module.css'
import Post from './Post/Post'
import { createRef } from 'react';

import headerStyles from './../../Header/Header.module.css'

const Posts = (props) => {

    const textAreaRef = createRef();

    const spinLogo = () => {
        const logo = document.querySelector(`.${headerStyles.header} img`);
        logo.classList.add(headerStyles.spin);
        setTimeout(() => {
            logo.classList.remove(headerStyles.spin);
        }, 1500);
    };

    const onClickHandler = () => {
        props.data.callbacks.addPost();
        spinLogo();
    };

    const onChange = () => {
        props.data.callbacks.updatePost(textAreaRef.current.value);
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