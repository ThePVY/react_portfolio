import { thunkCreator } from "./auth-reducer"

const SET_INITIALIZED = 'SET_INITIALIZED'

//for construct action in components
export const actionCreator = {
    setInitialized: () => ({ type: SET_INITIALIZED })
}

export const initializeApp = () => dispatch => {
    const authPromise = dispatch(thunkCreator.getAuthData())

    Promise.all([authPromise])
        .then(() => {
            dispatch(actionCreator.setInitialized())
        })
}

//initial value of state
const initialState = {
    initialized: false
}

//for changing state in store
export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return { ...state, initialized: true }
        default:
            return state
    }
}


/*---------------------------------------------------------------------------------*/