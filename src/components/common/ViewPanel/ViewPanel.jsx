import { useState } from 'react'
import s from './ViewPanel.module.css'

const ViewPanel = ({ isShown, content, multiple = false, onNext, onPrev, onClose, absolute = false }) => {

    const closePanel = (e) => {
        if (e.target.className === `${s.shadowContainer} screen-shadowed`) {
            onClose()
        }
    }

    return (
        <>
            <div>
                <div className={isShown && `${s.shadowContainer} screen-shadowed`} onClick={closePanel} ></div>
            </div>
            <div className={!absolute && `centered-horizontal ${s.viewPanelContainer}`}>
                <div className={`${s.relativeFlexContainer}`} >
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
            </div>
        </>
    )
}

export default ViewPanel
