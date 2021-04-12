import { useState } from 'react'
import s from './ViewPanel.module.css'

const ViewPanel = ({ content, multiple = false, onNext, onPrev, onExit }) => {

    const [viewMode, setViewMode] = useState(false)

    return (
        <div className={s.viewPanel}>
            <div className={s.contentArea}>
                {content}
            </div>
            {
                multiple &&
                <>
                    <div className={s.nextContainer}>
                        <button onClick={onNext}>Next</button>
                    </div>
                    <div className={s.prevContainer}>
                        <button onClick={onPrev}>Prev</button>
                    </div>
                </>
            }
        </div>
    )
}

export default ViewPanel
