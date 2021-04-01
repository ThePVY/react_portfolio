import { profileAPI } from '../api/profile-api';
import { spinLogo, validate } from '../scripts/scripts';

const ADD_POST = 'ADD-POST'
const UPDATE_POST = 'UPDATE-POST'

const SET_USER_DATA = 'SET_USER_DATA'
const UPDATE_PROFILE_STATUS = 'UPDATE_PROFILE_STATUS'
const ADD_PROFILE_STATUS = 'ADD_PROFILE_STATUS'
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS'
const SET_USER_ID = 'SET_USER_ID'

//for construct action in components
export const actionCreator = {
    posts: {
        addPost: () => ({ type: ADD_POST }),
        updatePost: message => ({ type: UPDATE_POST, message })
    },
    info: {
        setUserProfileData: data => ({ type: SET_USER_DATA, data }),
        updateProfileStatus: status => ({ type: UPDATE_PROFILE_STATUS, status }),
        addProfileStatus: () => ({ type: ADD_PROFILE_STATUS }),
        setProfileStatus: status => ({ type: SET_PROFILE_STATUS, status })
    },
    common: {
        setUserId: (userId) => ({ type: SET_USER_ID, userId })
    }
}

export const getProfileAC = () => actionCreator


export const thunkCreator = {
    getProfileData(userId) {
        return dispatch => {
            if (userId) profileAPI.getProfileData(userId)
                .then((data) => {
                    dispatch(actionCreator.info.setUserProfileData(data))
                    dispatch(actionCreator.common.setUserId(userId))
                })
        }
    },
    getProfileStatus(userId) {
        return dispatch => {
            if (userId) profileAPI.getProfileStatus(userId)
                .then((status) => {
                    dispatch(actionCreator.info.setProfileStatus(status ? status : undefined))
                })
        }
    },
    putProfileStatus(statusObj) {
        return dispatch => {
            if ('status' in statusObj) profileAPI.putProfileStatus(statusObj)
                .then((data) => {
                    if (!data.resultCode) {
                        dispatch(actionCreator.info.addProfileStatus())
                    }
                })
        }
    }
}


//initial value of state
const initialState = {
    posts: {
        posts: [],
        newPost: ''
    },
    info: {
        data: {},
        status: undefined,
        newStatus: ''
    },
    userId: undefined
}

//for changing state in store
export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return addPost(state)

        case UPDATE_POST:
            return updatePost(state, action.message)

        case SET_USER_DATA:
            return setUserData(state, action.data)

        case SET_USER_ID:
            return setUserId(state, action.userId)

        case UPDATE_PROFILE_STATUS:
            return { ...state, info: { ...state.info, newStatus: action.status } }

        case ADD_PROFILE_STATUS:
            return { ...state, info: { ...state.info, status: state.info.newStatus } }

        case SET_PROFILE_STATUS:
            return { ...state, info: { ...state.info, status: action.status } }

        default:
            return state
    }
}


/*---------------------------------------------------------------------------------*/

let postId = 1

const addPost = (state) => {
    if (!validate(state.posts.newPost)) return state

    spinLogo()

    const newPost = {
        id: postId,
        message: state.posts.newPost,
        likesCount: 0
    }

    return {
        ...state,
        posts: {
            posts: [newPost, ...state.posts.posts],
            newPost: ''
        }
    }
}

const updatePost = (state, message) => {
    return {
        ...state,
        posts: { ...state.posts, newPost: message }
    }
}

const setUserData = (state, data) => ({
    ...state,
    info: { ...state.info, data }
})

const setUserId = (state, userId) => ({
    ...state,
    userId
})
