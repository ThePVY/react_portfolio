import { spinLogo, validate } from './scripts';

const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE = 'UPDATE-MESSAGE'

//for construct action in components
export const action = {
    addMessage() { return { type: ADD_MESSAGE } },
    updateMessage(text) { return { type: UPDATE_MESSAGE, message: text } }
}

//initial value of state
const initialState = {
    dialogsList: [
        { name: 'Ksysha', id: 1, preview: 'Hi' },
        { name: 'Grisha', id: 2, preview: 'Hi' },
        { name: 'Porosyonok', id: 3, preview: 'Hi' },
        { name: 'Dimych', id: 4, preview: 'Hi' },
        { name: 'Sveta', id: 5, preview: 'Hi' },
        { name: 'Ksysha', id: 6, preview: 'Hi' },
        { name: 'Kotleta', id: 7, preview: 'Hi' },
    ],
    messages: [],
    newMessage: ''
}

//for changing state in store
export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            addMessage(state)
            return state
        case UPDATE_MESSAGE:
            updateMessage(state, action.message);
            return state
        default:
            return state
    }
}

/*---------------------------------------------------------------------------------*/

let messageId = 1

const addMessage = (state) => {
    if (!validate(state.newMessage))
        return

    const newMessage = {
        id: messageId++,
        message: state.newMessage,
        my: true
    }
    state.messages.push(newMessage);
    state.newMessage = '';
    spinLogo();
}

const updateMessage = (state, message) => {
    state.newMessage = message;
}