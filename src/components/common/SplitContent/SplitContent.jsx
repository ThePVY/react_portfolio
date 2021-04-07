import s from './SplitContent.module.css'

const SplitContent = props => {
    return (
        <div className={s.content}>
            <div className={s.leftPane} >
                {props.left}
            </div>
            <div className={s.rightPane} >
                {props.right}
            </div>
        </div>
    )
}

export default SplitContent
