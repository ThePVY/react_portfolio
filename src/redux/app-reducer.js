import { thunkCreator as authTC } from "./auth-reducer"
import { thunkCreator as profileTC } from "./profile-reducer"

const SET_INITIALIZED = 'SET_INITIALIZED'

//for construct action in components
export const actionCreator = {
    setInitialized: () => ({ type: SET_INITIALIZED })
}

export const initializeApp = () => dispatch => {
    const authPromise = dispatch(authTC.getAuthData())
    const profileDataPromise = authPromise.then( (userId) => dispatch(profileTC.getProfileData(userId)) )
    const profileStatusPromise = authPromise.then( (userId) => dispatch(profileTC.getProfileStatus(userId)) )

    Promise.all([profileDataPromise, profileStatusPromise])
        .then(() => {
            dispatch(actionCreator.setInitialized())
        })
        .catch(() => {
            setTimeout(() => {
                dispatch(initializeApp)
            }, 3000)
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