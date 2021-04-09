import { useState } from 'react'
import s from './Hover.module.css'

const Hover = ({ base, hovered, style }) => {
    
    const [clickMode, setClickMode] = useState(false)

    return (
        <div className={s.hoverContainer}>
            {
                clickMode ? 
                    <span className={style} onMouseOut={() => setClickMode(false)}>
                        {hovered}
                    </span>
                    :
                    <span className={style} onMouseOver={() => setClickMode(true)}>
                        {base}
                    </span>
            }
        </div>
    )
}

export default Hover
