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

    const viewPanelContent = (src) => <img src={src} alt='' className='disp-inl-block centered'/>

    const onImageClick = (image) => {
        setContent(viewPanelContent(image.url))
        setShowViewPanel(true)
        setCurrImageId(image.id)
    }

    const nextImage = () => {
        const nextId = getNextItemId(currImageId, images)
        setCurrImageId(nextId)
        setContent(viewPanelContent(images[nextId].url))
    }

    const prevImage = () => {
        const prevId = getPrevItemId(currImageId, images)
        setCurrImageId(prevId)
        setContent(viewPanelContent(images[prevId].url))
    }

    const onPanelClose = () => {
        setShowViewPanel(false)
        exitObservers.forEach(fn => fn())
    }

    return (
        <>
            <SinglePane fixedHeight={true}>
                {
                    showViewPanel &&
                    <ViewPanel isShown={showViewPanel} content={content} multiple={true}
                        onNext={nextImage} onPrev={prevImage} onClose={onPanelClose} />
                }
                <div className={`${s.images}`}>
                    <Slider images={images} onImageClick={onImageClick} exitObserver={exitObserver} />
                </div>
            </SinglePane>
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