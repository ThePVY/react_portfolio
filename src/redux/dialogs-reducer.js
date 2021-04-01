import { spinLogo, validate } from '../scripts/scripts';

const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE = 'UPDATE-MESSAGE'

//for construct action in components
export const actionCreator = {
    addMessage: () => ({ type: ADD_MESSAGE }),
    updateMessage: text => ({ type: UPDATE_MESSAGE, message: text })
}

const avaSrc = 'https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg'
//initial value of state
const initialState = {
    dialogsList: [
        { id: 1, name: 'Ksysha',        src: avaSrc,    preview: 'Hi' },
        { id: 2, name: 'Grisha',        src: avaSrc,    preview: 'Hi' },
        { id: 3, name: 'Porosyonok',    src: avaSrc,    preview: 'Hi' },
        { id: 4, name: 'Dimych',        src: avaSrc,    preview: 'Hi' },
        { id: 5, name: 'Sveta',         src: avaSrc,    preview: 'Hi' },
        { id: 6, name: 'Ksysha',        src: avaSrc,    preview: 'Hi' },
        { id: 7, name: 'Kotleta',       src: avaSrc,    preview: 'Hi' },
    ],
    messages: [],
    newMessage: ''
}

//for changing state in store
export const dialogsReducer = (state = initialState, action) => { 
    switch (action.type) {
        case ADD_MESSAGE:
            return addMessage(state)
        case UPDATE_MESSAGE:
            return updateMessage(state, action.message);
        default:
            return state
    }
}

/*---------------------------------------------------------------------------------*/

let messageId = 1

const addMessage = (state) => {
    if (!validate(state.newMessage)) return state

    spinLogo();

    const newMessage = {
        id: messageId++,
        message: state.newMessage,
        my: true
    }

    return {
        ...state,
        messages: [...state.messages, newMessage ],
        newMessage: ''
    }
}

const updateMessage = (state, message) => {
    return {
        ...state,
        newMessage: message
    }
}