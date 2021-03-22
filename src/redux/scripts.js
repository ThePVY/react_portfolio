import headerStyles from './../components/Header/Header.module.css'

export const spinLogo = () => {
    const logo = document.querySelector(`.${headerStyles.header} img`);
    logo.classList.add(headerStyles.spin);
    setTimeout(() => {
        logo.classList.remove(headerStyles.spin);
    }, 1500);
};

export const validate = (text) => {
    return ~text.search(/\S/)
}

