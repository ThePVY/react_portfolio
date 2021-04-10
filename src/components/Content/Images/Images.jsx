import { connect } from 'react-redux'
import { compose } from 'redux'
import { thunkCreator } from '../../../redux/auth-reducer'
import SinglePane from '../../common/SinglePane/SinglePane'
import Slider from '../../common/Slider/Slider'
import s from './Images.module.css'
import '../../../App.css'


const images = [
    {id: 0, url: 'https://printfiles.ru/files/uploads/raspechatat/tsyfry-formata-a4/0.jpg',},
    {id: 1, url: 'https://printfiles.ru/files/uploads/raspechatat/tsyfry-formata-a4/1-800x1131.jpg'},
    {id: 2, url: 'https://printfiles.ru/files/uploads/raspechatat/tsyfry-formata-a4/2-800x1131.jpg'},
    {id: 3, url: 'https://printfiles.ru/files/uploads/raspechatat/tsyfry-formata-a4/3-800x1131.jpg'},
    {id: 4, url: 'https://printfiles.ru/files/uploads/raspechatat/tsyfry-formata-a4/4-800x1131.jpg'},
    {id: 5, url: 'https://printfiles.ru/files/uploads/raspechatat/tsyfry-formata-a4/5.jpg'},
    {id: 6, url: 'https://printfiles.ru/files/uploads/raspechatat/tsyfry-formata-a4/6.jpg'},
    {id: 7, url: 'https://printfiles.ru/files/uploads/raspechatat/tsyfry-formata-a4/7.jpg'},
]


const Images = props => {

    return (
        <SinglePane fixedHeight={true}>
            <div className={`centered ${s.images}`}>
                <Slider images={images} />
            </div>
        </SinglePane>
    )
}

export default compose(
    connect(null, { ...thunkCreator })
)(Images)



/*---------------------------------------------------------------------------------------------------*/