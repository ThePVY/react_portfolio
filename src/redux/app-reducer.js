import { thunkCreator as authTC } from "./auth-reducer"
import { thunkCreator as profileTC } from "./profile-reducer"

const SET_INITIALIZED = 'SET_INITIALIZED'

//for construct action in components
export const actionCreator = {
    setInitialized: () => ({ type: SET_INITIALIZED }),
}

export const initializeApp = () => async dispatch => {
    try {
        const userId = await dispatch(authTC.getAuthData())

        await dispatch(profileTC.getProfileData(userId))
        await dispatch(profileTC.getProfileStatus(userId))
        console.log('App Reducer loaded Status and Data')

        dispatch(actionCreator.setInitialized())
    }
    catch (err) {
        setTimeout(() => {
            console.log(err)
            console.log('Reinitialization...')
            dispatch(initializeApp)
        }, 3000)
    }
}

//initial value of state
const initialState = {
    initialized: false,
    reset: false
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
