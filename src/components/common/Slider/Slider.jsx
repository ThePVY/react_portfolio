import { useCallback, useEffect, useState } from 'react'
import s from './Slider.module.css'
import arrowRight from '../../../images/arrow-icon-right.png'
import arrowLeft from '../../../images/arrow-icon-left.png'

const Slider = ({ images, onImageClick, exitObserver = {} }) => {

    const [imagesState, setImagesState] = useState({
        prev2xImage: images.length - 2,
        prevImage: images.length - 1,
        currImage: 0,
        nextImage: 1,
        next2xImage: 2
    })

    const [slideMode, setSlideMode] = useState(true)

    const imgs = images.map((image, i) => <img key={image.id} src={image.url} alt={i} />)

    useEffect(() => {
        const timeout = setTimeout(() => {
            if(slideMode) {
                setImagesState(slide({ direction: 'right', images, imagesState }))
            }
        }, 3000)
        return () => {
            clearTimeout(timeout)
        }
    }, [imagesState, slideMode, images])

    const handleRight = (e) => {
        setImagesState(slide({ direction: 'right', images, imagesState }))
    }

    const handleLeft = (e) => {
        setImagesState(slide({ direction: 'left', images, imagesState }))
    }

    const handleToggle = () => setSlideMode(!slideMode)

    const runSlider = () => setSlideMode(true)

    useEffect(() => {
        exitObserver.subscribe(runSlider)
        console.log('slider subscribe use effect')
        return () => {
            exitObserver.unsubscribe(runSlider)
            console.log('slider unsubscribe use effect')
        }
    }, [])

    const handleImageClick = () => {
        handleToggle()
        onImageClick(images[imagesState.currImage])
    }

    return (
        <div className={s.slider}>
            <div className={`${s.visibleArea}`}>
                <div className={`${s.imagesContainer}`}>
                    <div key={images[imagesState.prev2xImage].id} className={`${s.prev2xDiv}`}>
                        {imgs[imagesState.prev2xImage]}
                    </div>

                    <div key={images[imagesState.prevImage].id} className={`${s.prevDiv}`}>
                        {imgs[imagesState.prevImage]}
                    </div>

                    <div key={images[imagesState.currImage].id} className={`${s.currDiv}`} onClick={handleImageClick} >
                        {imgs[imagesState.currImage]}
                    </div>

                    <div key={images[imagesState.nextImage].id} className={`${s.nextDiv}`}>
                        {imgs[imagesState.nextImage]}
                    </div>

                    <div key={images[imagesState.next2xImage].id} className={`${s.next2xDiv}`}>
                        {imgs[imagesState.next2xImage]}
                    </div>
                </div>
            </div>
            <div className={`${s.buttons} ${s.buttonRight}`} >
                <button onClick={handleRight}><img src={arrowRight} alt="right"/></button>
            </div>
            <div className={`${s.buttons} ${s.buttonLeft}`} >
                <button onClick={handleLeft}><img src={arrowLeft} alt="left"/></button>
            </div>
            <div className={`${s.buttons} ${s.toggleSlide}`} >
                <button onClick={handleToggle}>{slideMode ? 'Stop Slider' : 'Run Slider'}</button>
            </div>
        </div>
    )
}

export default Slider



const slide = ({direction = 'right', images, imagesState}) => {
    switch (direction) {
        case 'right':
            return {
                prev2xImage: imagesState.prevImage,
                prevImage: imagesState.currImage,
                currImage: imagesState.nextImage,
                nextImage: imagesState.next2xImage,
                next2xImage: imagesState.next2xImage === images.length - 1 ? 0 : imagesState.next2xImage + 1
            }
        case 'left':
            return {
                prev2xImage: imagesState.prev2xImage > 0 ? imagesState.prev2xImage - 1 : images.length - 1,
                prevImage: imagesState.prev2xImage,
                currImage: imagesState.prevImage,
                nextImage: imagesState.currImage,
                next2xImage: imagesState.nextImage
            }
        default:
            throw new Error('Direction must be right or left')
    }
}