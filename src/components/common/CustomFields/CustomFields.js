import { useEffect } from 'react'
import { Field } from 'redux-form'
import styled from 'styled-components'
import Div from '../Div'
import Textarea from '../Textarea'



export const createField = (component, name, type, placeholder, validate, isValid, text = '') => {
    return (
        <Div>
            <Field 
                component={component} name={name} type={type} placeholder={placeholder}
                validate={validate} isValid={isValid} 
            />
            {text}
        </Div>
    )
}

const ErrorSpan = styled.span`
    color: ${props => props.error ? "rgb(95, 29, 29)" : 'inherit'};
`

export const FieldTemplate = ({ meta, notified, children, isValid = a => a }) => {
    
    let notification = ''
    if(meta.touched && notified) {
        notification = meta.error ? meta.error : ''
    }

    const { valid } = meta
    useEffect(() => isValid(valid) ,[valid, isValid])
    
    return (
        <>
            {children}
            <ErrorSpan>{notification}</ErrorSpan>
        </>
    )
}

export const TextareaTemplate = ({type, placeholder, ...props}) => {
    return (
        <FieldTemplate {...props} notified={true}>
            <Textarea {...props.input} placeholder={placeholder} type={type} />
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



