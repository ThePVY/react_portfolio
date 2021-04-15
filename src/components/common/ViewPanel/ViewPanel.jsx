import { useState } from 'react'
import s from './ViewPanel.module.css'

const ViewPanel = ({ isShown, content, multiple = false, onNext, onPrev, onClose, fixed = false }) => {

    const closePanel = (e) => {
        if (e.target.className === `${s.shadowContainer} screen-shadowed`) {
            onClose()
        }
    }

    const shadowContainerStyle = isShown && `${s.shadowContainer} screen-shadowed`
    const viewPanelStyle = `${s.viewPanel} ${fixed ? s.fixed : s.relative}`
    const nullContainerStyle = !fixed && `centered-horizontal ${s.nullContainer}`

    /* 
        viewPanelContainer нужен для того, чтобы ...FlexContainer можно было позиционировать relative
        при этом не влияя на на элементы, окружающие ViewPanel
     */
    return (
        <>
            <div>
                <div className={shadowContainerStyle} onClick={closePanel} ></div>
            </div>
            <div className={nullContainerStyle}>
                <div className={viewPanelStyle} >

                    <div className={s.contentArea}>
                        {
                            multiple &&
                            <div className={s.leafContainer} onClick={onPrev}></div>
                        }
                        <div className='stretch-div'>
                            {content}
                        </div>
                        {
                            multiple &&
                            <div className={s.leafContainer} onClick={onNext}></div>
                        }
                    </div>

                </div>
            </div>
        </>
    )
}

export default ViewPanel
