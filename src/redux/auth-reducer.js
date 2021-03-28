const SET_AUTH_DATA = 'SET_AUTH_DATA'

//for construct action in components
export const action = {
    setAuthData(data) { return { type: SET_AUTH_DATA, data } }
}

//initial value of state
const initialState = {
    isAuthorized: false,
    data: {
        id: null,
        login: null,
        email: null
    }
}

//for changing state in store
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return setAuthData(state, action.data)
        default:
            return state
    }
}


/*---------------------------------------------------------------------------------*/

const setAuthData = (state, data) => ({
    ...state,
    data: data.data,
    isAuthorized: data.resultCode ? false : true
})