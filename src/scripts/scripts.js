import headerStyles from '../components/Header/Header.module.css'

/* export const spinLogo = () => {
    const logo = document.querySelector(`.spinning-logo`);
    logo.classList.add('spin');
    setTimeout(() => {
        logo.classList.remove('spin');
    }, 1500);
}; */

export const validate = (text = '') => {
    return ~text.search(/\S/)
}

export const validateURL = url => {
    return ~url.search(/https?:/) ? url : 'https://' + url
}


export const changeProp = (obj, prop, newVal) => ({ ...obj, [prop] : newVal })

