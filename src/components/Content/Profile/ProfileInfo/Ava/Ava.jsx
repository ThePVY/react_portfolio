import s from './Ava.module.css'
import defaultUserImage from '../../../../../images/user-image.png'
import { Field, reduxForm } from 'redux-form';
import { noErrorRequired, required } from '../../../../../scripts/validates';
import { useState } from 'react';

const Ava = ({ photos = {}, uploadPhoto }) => {

    const [editMode, setEditMode] = useState(false)

    const showForm = () => setEditMode(!editMode)

    return (
        <div className={`${s.avaBlock} centered-horizontal`} >
            <div className={s.ava}>
                {
                    photos.large ? <img src={photos.large} alt='' /> : <img src={defaultUserImage} alt='' />
                }
            </div>
            {
                editMode ?
                    <AddPhotoForm onSubmit={uploadPhoto} mime='.jpg, .png' />
                    :
                    ''
            }
            <div className={`centered-horizontal ${s.panel} ${s.arrowUp}`} onClick={showForm} ></div>
        </div>
    );
};

export default Ava;

let AddPhotoForm = props => {

    const [isValid, setIsValid] = useState(false)

    const renderInput = ({ input, type, meta }) => {
        const { mime } = props
        console.log(meta.valid)
        setIsValid(meta.valid)
        return (
            <div>
                <input name={input.name} type={type} accept={mime} onChange={e => handleChange(e, input)} />
            </div>
        )
    }

    const handleChange = (e, input) => {
        e.preventDefault()
        input.onChange(e.target.files[0])
    }

    return (
        <form onSubmit={props.handleSubmit} >
            <div className={s.inputContainer}>
                <Field component={renderInput} name='photo' type='file' validate={[required]} />
            </div>

            <div className={s.submitContainer} >
                <button type='submit' disabled={!isValid} >Upload File</button>
            </div>
        </form>
    )
}

AddPhotoForm = reduxForm({ form: 'add-photo' })(AddPhotoForm)