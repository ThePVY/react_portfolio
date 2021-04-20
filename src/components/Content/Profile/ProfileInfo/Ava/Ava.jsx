import s from './Ava.module.css'
import defaultUserImage from '../../../../../images/user-image.png'
import { Field, reduxForm } from 'redux-form';
import { noErrorRequired } from '../../../../../scripts/validates';
import { useState } from 'react';
import { Button, FileLabel } from '../../../../common/Buttons';

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
            <div className={`centered-horizontal ${s.panel} ${editMode? s.arrowUp : s.arrowDown}`} onClick={showForm} ></div>
        </div>
    );
};

export default Ava;


let AddPhotoForm = props => {

    const [isValid, setIsValid] = useState(false)

    const renderInput = ({ input, type, meta }) => {
        const { mime } = props
        setIsValid(meta.valid)
        return (
            <FileLabel>
                Choose photo
                <input name={input.name} type={type} accept={mime} onChange={e => handleChange(e, input)} />
            </FileLabel>
        )
    }

    const handleChange = (e, input) => {
        e.preventDefault()
        input.onChange(e.target.files[0])
    }

    return (
        <form onSubmit={props.handleSubmit} className={`${s.avaForm} centered-horizontal`} >
            <div className={s.inputContainer}>
                <Field component={renderInput} name='photo' type='file' validate={[noErrorRequired]} />
            </div>

            <div className={s.submitContainer} >
                <Button type='submit' disabled={!isValid} >Upload File</Button>
            </div>
        </form>
    )
}

AddPhotoForm = reduxForm({ form: 'add-photo' })(AddPhotoForm)