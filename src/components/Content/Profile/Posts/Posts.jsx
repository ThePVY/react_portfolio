import s from './Posts.module.css'
import Post from './Post/Post'
import { Field, reduxForm } from 'redux-form';
import { noErrorRequired, validate500 } from '../../../../scripts/validates';
import { Textarea } from '../../../common/CustomFields/CustomFields';
import { useValidation } from '../../../../hooks/useValidation';

const Posts = ({ photos, iam, addPost, resetForm, posts: { posts } }) => {

    const handleSubmit = ({ post }) => {
        addPost(post)
        resetForm('post')
    }

    return (
        <div className={s.posts}>
            <div className={s.centered}>
                {
                    iam ?
                        <PostForm onSubmit={handleSubmit} />
                        :
                        <span >Posts of ...</span>
                }
            </div>
            <div className={`${s.postsContainer} ${s.centered}`}>
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

    const [ postVO,  ] = useValidation(false)

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name='post' type='text' placeholder='Enter your Post'
                    validate={[noErrorRequired, validate500]} isValid={postVO.setIsValid} />
            </div>
            <div>
                <button type='submit' disabled={!postVO.isValid} >Add Post</button>
            </div>
        </form>
    )
}

PostForm = reduxForm({ form: 'post' })(PostForm)
