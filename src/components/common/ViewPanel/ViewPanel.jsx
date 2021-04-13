import { useState } from 'react'
import s from './ViewPanel.module.css'

const ViewPanel = ({ content, multiple = false, onNext, onPrev }) => {

    return (
        <div className={`centered-absolute ${s.flexContainer}`} >
            {
                multiple &&
                <div className={s.leafContainer} onClick={onPrev}></div>
            }
            <div className={s.contentArea}>
                <div className='centered fit-content'>
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
