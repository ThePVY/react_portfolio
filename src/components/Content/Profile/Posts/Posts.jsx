import styles from './Posts.module.css'
import Post from './Post/Post'
import { Field, reduxForm } from 'redux-form';
import { noErrorRequired, validate100 } from '../../../../scripts/validates';
import { Textarea } from '../../../common/CustomFields/CustomFields';
import { useValidation } from '../../../../hooks/useValidation';

const Posts = ({ photos, iam, addPost, resetForm, posts: { posts } }) => {

    const handleSubmit = ({ post }) => {
        addPost(post)
        resetForm('post')
    }

    return (
        <div className={styles.posts}>
            <div className={styles.content}>
                {
                    iam ?
                        <PostForm onSubmit={handleSubmit} />
                        :
                        <div className={styles.headerContainer}>
                            <span className={styles.header}>Posts of ...</span>
                        </div>
                }
                {
                    posts.map((obj, i) => <Post key={i} state={obj} photos={photos} />)
                }
            </div>
        </div>
    );
};

export default Posts;

/*-----------------------------------------------------------------------------------*/

let PostForm = props => {

    const [ { postIsValid, setPostIsValid },  ] = useValidation(false)

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name='post' type='text' placeholder='Enter your Post'
                    validate={[noErrorRequired, validate100]} isValid={setPostIsValid} />
            </div>
            <div>
                <button type='submit' disabled={!postIsValid} >Add Post</button>
            </div>
        </form>
    )
}

PostForm = reduxForm({ form: 'post' })(PostForm)
