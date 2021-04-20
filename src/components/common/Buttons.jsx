import styled from "styled-components";


export const Button = styled.button`
    background-color: rgb(255, 255, 255);
    color: rgb(39, 41, 41);
    cursor: pointer;
    padding: 5px 10px;

    width: 100%;
    min-width: fit-content;
    
    border: 1px solid rgb(148, 148, 150);
    border-radius: 5px;

    font-size: 0.8em;
    font-family: sans-serif;
`

export const FileLabel = styled.label`
    input {
        display: none;
    }
    display: inline-block;
    cursor: pointer;
    background-color: rgb(255, 255, 255);
    color: rgb(39, 41, 41);
    padding: 5px 10px;
    
    border: 1px solid rgb(148, 148, 150);
    border-radius: 5px;

    font-family: sans-serif;
    font-size: 0.8em;
`
