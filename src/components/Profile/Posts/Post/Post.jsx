import styles from './Post.module.css'

const Post = (props) => {
    return (
        <div className={styles.post}>
            <img src="https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg" alt="q"/>
            { props.message }
            <div>
                <span>Like</span> { props.likesCount }
            </div>
        </div>
    );
};

export default Post;