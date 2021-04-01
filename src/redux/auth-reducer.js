import { authAPI } from "../api/auth-api"
import { profileAPI } from "../api/profile-api"
import { getProfileAC } from "./profile-reducer"

const SET_AUTH_DATA = 'SET_AUTH_DATA'

//for construct action in components
export const actionCreator = {
    setAuthData: data => ({ type: SET_AUTH_DATA, data })
}

export const thunkCreator = {
    getAuthData() {
        let userId
        return dispatch => {
            authAPI.getAuthData()
            .then((data) => {
                userId = data.data.id
                dispatch(actionCreator.setAuthData(data))
                return profileAPI.getProfileData(userId)
            })
            .then((data) => {
                dispatch(getProfileAC().info.setUserProfileData(data))  //set user data to render ProfileInfo
                dispatch(getProfileAC().common.setUserId(userId))       //set current user id, which rendered in ProfileInfo
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