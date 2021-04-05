

const validateLengthCreator = maxLength => (value = '') => {
    return value.length < maxLength ? undefined : `Maximum length is ${maxLength} symbols`;
}

export const validate100 = validateLengthCreator(100)

export const validate50 = validateLengthCreator(50)

export const validate10 = validateLengthCreator(10)

export const required = value => value ? undefined : 'This Field is required'

//Обязательно вернуть массив, обычная пустая строка не работает
export const noErrorRequired = value => value ? undefined : ['']
