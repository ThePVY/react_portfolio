import { useEffect, useState } from 'react'
import s from './Slider.module.css'

const Slider = ({ images }) => {

    const [imagesState, setImagesState] = useState({
        prev2xImage: images.length - 2,
        prevImage: images.length - 1,
        currImage: 0,
        nextImage: 1,
        next2xImage: 2
    })

    const imgs = images.map((image, i) => <img key={image.id} src={image.url} alt={i} />)

    useEffect(() => {
        const timeout = setTimeout(() => {
            const prev2xImage = imagesState.currImage === 0 ? images.length - 1 : imagesState.currImage - 1
            const prevImage = imagesState.currImage
            const currImage = imagesState.nextImage
            const nextImage = currImage === images.length - 1 ? 0 : currImage + 1
            const next2xImage = nextImage === images.length - 1 ? 0 : nextImage + 1
            console.log(`prev: ${prevImage}; curr: ${currImage}; next: ${nextImage};`)
            setImagesState({ prev2xImage, prevImage, currImage, nextImage, next2xImage })
        }, 3000)
        return () => {
            clearTimeout(timeout)
        }
    }, [imagesState])

    return (
        <div className={`${s.slider} centered-horizontal`}>
            <div className={`${s.imagesContainer}`}>
                <div key={images[imagesState.prev2xImage].id} className={`${s.prev2xDiv}`}>
                    {imgs[imagesState.prev2xImage]}
                </div>

                <div key={images[imagesState.prevImage].id} className={`${s.prevDiv}`}>
                    {imgs[imagesState.prevImage]}
                </div>

                <div key={images[imagesState.currImage].id} className={`${s.currDiv} `}>
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
    )
}

export default Slider
