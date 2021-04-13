import { useState } from 'react'
import s from './ViewPanel.module.css'

const ViewPanel = ({ content, multiple = false, onNext, onPrev }) => {

    const flexContainerClass = `centered-absolute ${s.flexContainer}`

    /* const handleExit = (e) => {
        if (e.target.className === flexContainerClass) {
            onExit()
            exitObservers.forEach((fn) => fn())
        }
    } */

    return (
        <div className={`centered-absolute ${s.flexContainer}`} >
            {
                multiple &&
                <div className={s.leafContainer} onClick={onPrev}></div>
            }
            <div className={s.contentArea}>
                <div className='centered'>
                    {content}
                </div>
            </div>
            {
                multiple &&
                <div className={s.leafContainer} onClick={onNext}></div>
            }
        </div>
    )
}

export default ViewPanel
