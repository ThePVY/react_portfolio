import { connect } from 'react-redux'
import { compose } from 'redux'
import { thunkCreator } from '../../../redux/auth-reducer'
import SinglePane from '../../common/SinglePane/SinglePane'
import Slider from '../../common/Slider/Slider'
import s from './Images.module.css'
import '../../../App.css'
import ViewPanel from '../../common/ViewPanel/ViewPanel'
import { useState } from 'react'
import { useObservers } from '../../../hooks/useObservers'


const images = [
    { id: 0, url: 'https://printfiles.ru/files/uploads/raspechatat/tsyfry-formata-a4/0.jpg', },
    { id: 1, url: 'https://printfiles.ru/files/uploads/raspechatat/tsyfry-formata-a4/1-800x1131.jpg' },
    { id: 2, url: 'https://printfiles.ru/files/uploads/raspechatat/tsyfry-formata-a4/2-800x1131.jpg' },
    { id: 3, url: 'https://printfiles.ru/files/uploads/raspechatat/tsyfry-formata-a4/3-800x1131.jpg' },
    { id: 4, url: 'https://printfiles.ru/files/uploads/raspechatat/tsyfry-formata-a4/4-800x1131.jpg' },
    { id: 5, url: 'https://printfiles.ru/files/uploads/raspechatat/tsyfry-formata-a4/5.jpg' },
    { id: 6, url: 'https://printfiles.ru/files/uploads/raspechatat/tsyfry-formata-a4/6.jpg' },
    { id: 7, url: 'https://printfiles.ru/files/uploads/raspechatat/tsyfry-formata-a4/7.jpg' },
]


const Images = props => {

    const [showViewPanel, setShowViewPanel] = useState(false)
    const [content, setContent] = useState('Content')
    const [[exitObservers, exitObserver],] = useObservers([])
    const [currImageId, setCurrImageId] = useState(0)

    const onImageClick = (image) => {
        setContent(<img src={image.url} alt="Image" />)
        setShowViewPanel(true)
        setCurrImageId(image.id)
    }

    const onExitClick = () => {
        setShowViewPanel(false)
    }

    const nextImage = () => {
        const nextId = getNextItemId(currImageId, images)
        setCurrImageId(nextId)
        setContent(<img src={images[nextId].url} alt="Image" />)
    }

    const prevImage = () => {
        const prevId = getPrevItemId(currImageId, images)
        setCurrImageId(prevId)
        setContent(<img src={images[prevId].url} alt="Image" />)
    }

    const closePanel = (e) => {
        if (e.target.className === 'centered-absolute screen-shadowed') {
            onExitClick()
        }
    }

    return (
        <>
            <SinglePane fixedHeight={true} absolute={false}>
                <div className={`centered ${s.images}`}>
                    <Slider images={images} onImageClick={onImageClick} exitObserver={exitObserver} />
                </div>
                {
                    showViewPanel &&
                    <ViewPanel content={content} multiple={true} onExit={onExitClick} exitObservers={exitObservers}
                        onNext={nextImage} onPrev={prevImage} />
                }
            </SinglePane>
            <div className={showViewPanel && 'centered-absolute screen-shadowed'} onClick={closePanel} ></div>
        </>


    )
}

export default compose(
    connect(null, { ...thunkCreator })
)(Images)

/*---------------------------------------------------------------------------------------------------*/

const getNextItemId = (currIndex, arr) => {
    return currIndex === arr.length - 1 ? 0 : currIndex + 1
}

const getPrevItemId = (currIndex, arr) => {
    return currIndex === 0 ? arr.length - 1 : currIndex - 1
}