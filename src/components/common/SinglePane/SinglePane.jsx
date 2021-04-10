import s from './SinglePane.module.css'

const SinglePane = ({ children, fixedHeight = false }) => {
    
    const style = `${s.content} ${fixedHeight && s.fixedHeight}`
    
    return (
        <div className={style}>
            {children}
        </div>
    )
}

export default SinglePane
