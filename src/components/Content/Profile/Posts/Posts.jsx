import s from './Posts.module.css'
import Post from './Post/Post'
import { reduxForm } from 'redux-form';
import { noErrorRequired, validate500 } from '../../../../scripts/validates';
import { createField, Textarea } from '../../../common/CustomFields/CustomFields';
import { useValidation } from '../../../../hooks/useValidation';
import { Button } from '../../../common/Button';
import Div from '../../../common/Div';

const Posts = ({ userName = '...', photos, iam = false, addPost, deletePost, resetForm, posts: { posts } }) => {

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
                        <span >Posts of {userName} </span>
                }
            </div>
            <div className={`${s.postsContainer} ${s.centered}`}>
                {
                    posts.map((obj) => {
                        const handleDelete = () => {
                            deletePost(obj.id)
                        }
                        return <Post key={obj.id} iam={iam} state={obj} photos={photos} deletePost={handleDelete} />
                    }).reverse()
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
            {createField(Textarea, 'post', 'text', 'Enter your Post', [noErrorRequired, validate500], postVO.setIsValid)}
            <Div width='25%' margin='0'>
                <Button type='submit' disabled={!postVO.isValid} >Add Post</Button>
            </Div>
        </form>
    )
}

PostForm = reduxForm({ form: 'post' })(PostForm)
