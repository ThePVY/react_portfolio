import { useEffect } from 'react'
import s from './CustomFields.module.css'

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



