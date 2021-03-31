import { authAPI } from "../api/auth-api"
import { profileAPI } from "../api/profile-api"
import { getProfileAC } from "./profile-reducer"

const SET_AUTH_DATA = 'SET_AUTH_DATA'

//for construct action in components
export const actionCreator = {
    setAuthData(data) { return { type: SET_AUTH_DATA, data } }
}

export const thunkCreator = {
    getAuthData() {
        return dispatch => {
            authAPI.getAuthData()
            .then((data) => {
                dispatch(actionCreator.setAuthData(data))
                profileAPI.getProfileData(data.data.id)
                    .then((data) => {
                        dispatch(getProfileAC().info.setUserProfileData(data))
                    }) 
            })
            
        }
    }
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