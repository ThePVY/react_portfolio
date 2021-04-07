import s from './SinglePane.module.css'

const SinglePane = props => {
    return (
        <div className={s.content}>
            {props.children}
        </div>
    )
}

export default SinglePane
