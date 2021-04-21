import styled from "styled-components";


export const Button = styled.button`
    background-color: rgb(255, 255, 255);
    color: rgb(39, 41, 41);
    cursor: pointer;
    padding: 5px;

    width: 100%;
    min-width: fit-content;
    
    border: 1px solid rgb(148, 148, 150);
    border-radius: 5px;

    font-size: 0.8em;
    font-family: sans-serif;

    :disabled {
        opacity: 0.4;
        cursor: default;
    }
`

export const Container = styled.div.attrs(props => ({
    width: props.width || '100%',
    height: props.height || '100%',
    alignSelf: props.alignSelf || 'center',
    margin: props.margin || 'auto',
    padding: props.padding || 'auto'
}))`
    box-sizing: border-box;
    width: ${props => props.width};
    height: ${props => props.height};
    align-self: ${props => props.alignSelf};
    margin: ${props => props.margin};

`

export const FileLabel = styled.label`
    input {
        display: none;
    }
    display: inline-block;
    box-sizing: border-box;
    cursor: pointer;
    background-color: rgb(255, 255, 255);
    color: rgb(39, 41, 41);
    padding: 5px;
    
    width: 100%;
    min-width: fit-content;

    border: 1px solid rgb(148, 148, 150);
    border-radius: 5px;

    font-family: sans-serif;
    font-size: 0.8em;
`
