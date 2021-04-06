import { stopSubmit } from "redux-form"
import { authAPI } from "../api/auth-api"

const SET_AUTH_DATA = 'SET_AUTH_DATA'

//for construct action in components
export const actionCreator = {
    setAuthData: data => ({ type: SET_AUTH_DATA, data })
}

export const thunkCreator = {
    getAuthData() {
        return dispatch => {
            return authAPI.getAuthData()
                .then((data) => {
                    if (data.resultCode === 0)
                        dispatch(actionCreator.setAuthData(data))
                    return data.data.id
                })
        }
    },
    signIn(jsonObj) {
        return dispatch => {
            authAPI.signIn(jsonObj).then((data) => {
                if (data.resultCode === 0)
                    dispatch(thunkCreator.getAuthData())
                else {
                    const errorMessage = data.messages ? data.messages[0] : 'Some Error'
                    dispatch(stopSubmit('login', { _error: errorMessage }))
                }
            })
        }
    },
    signOut() {
        return dispatch => {
            authAPI.signOut().then((data) => {
                if (data.resultCode === 0) {
                    const authData = {
                        resultCode: 1,
                        data: {
                            id: undefined,
                            email: undefined,
                            login: undefined
                        }
                    }
                    dispatch(actionCreator.setAuthData(authData))
                }
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
    isAuthorized: data.resultCode === 0
})