import { useEffect } from 'react'
import { Field } from 'redux-form'
import s from './CustomFields.module.css'


export const createField = (component, name, type, placeholder, validate, isValid, text = '') => {
    return (
        <div className={s.container}>
            <Field 
                component={component} name={name} type={type} placeholder={placeholder}
                validate={validate} isValid={isValid} 
            />
            {text}
        </div>
    )
}


export const FieldTemplate = ({ meta, notified, children, isValid = a => a }) => {
    
    let notification
    if(meta.touched && notified) {
        notification = meta.error ? meta.error : ''
    }
    else {
        notification = ''
    }

    const { valid } = meta
    useEffect(() => {
        isValid(valid)
    },[valid, isValid])
    
    return (
        <>
            {children}
            <span className={meta.valid ? '' : s.error}>{notification}</span>
        </>
    )
}

export const Textarea = ({type, placeholder, ...props}) => {
    return (
        <FieldTemplate {...props} notified={true}>
            <textarea {...props.input} placeholder={placeholder} type={type} />
        </FieldTemplate>
    )
}

export const Input = ({type, placeholder, ...props}) => {
    return (
        <FieldTemplate {...props} notified={true} >
            <input {...props.input} placeholder={placeholder} type={type} />
        </FieldTemplate>
    )
}



