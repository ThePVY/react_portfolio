import s from './SinglePane.module.css'

const SinglePane = ({ children, fixedHeight = false, absolute = true }) => {
    
    const style = `${s.content} ${fixedHeight && s.fixedHeight} ${absolute ? s.absolute : s.relative} `
    
    return (
        <div className={style}>
            {children}
        </div>
    )
}

export default SinglePane
