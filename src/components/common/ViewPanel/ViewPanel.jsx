import { useState } from 'react'
import s from './ViewPanel.module.css'

const ViewPanel = ({ content, multiple = false, onNext, onPrev, onExit }) => {

    const handleExit = (e) => {
        if (e.target.className === s.viewPanel) {
            onExit()
        }
    }

    return (
        <div onClick={handleExit} className={s.viewPanel}>
            <div className={s.contentArea}>
                <img src={content.src} alt=""/>
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
