import { authAPI } from "../api/auth-api"

const SET_AUTH_DATA = 'SET_AUTH_DATA'

//for construct action in components
export const actionCreator = {
    setAuthData: data => ({ type: SET_AUTH_DATA, data })
}

export const thunkCreator = {
    getAuthData() {
        return dispatch => {
            authAPI.getAuthData()
            .then((data) => {
                dispatch(actionCreator.setAuthData(data))
            })
        }
    }
}

//initial value of state
const initialState = {
    isAuthorized: false,
    data: {
        id: undefined,
        login: undefined,
        email: undefined
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