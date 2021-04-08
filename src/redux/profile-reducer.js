import { reset } from 'redux-form';
import { profileAPI } from '../api/profile-api';
import { spinLogo } from '../scripts/scripts';

const ADD_POST = 'ADD-POST'
const SET_USER_DATA = 'SET_USER_DATA'
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS'
const SET_USER_ID = 'SET_USER_ID'

//for construct action in components
export const actionCreator = {
    posts: {
        addPost: (post) => ({ type: ADD_POST, post }),
    },
    info: {
        setUserProfileData: data => ({ type: SET_USER_DATA, data }),
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
            if (userId) return profileAPI.getProfileData(userId)
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
                    if (data.resultCode === 0) {
                        dispatch(actionCreator.info.setProfileStatus(statusObj.status))
                    }
                })
        }
    },
    resetForm(form) {
        return dispatch => {
            dispatch(reset(form))
        }
    }
}


//initial value of state
const initialState = {
    posts: {
        posts: [
            {id: 0, message: 'Hello',likesCount: 0 },
            {id: 1, message: 'Hello Hello Hello Hello Hello Hello Hello Hello Hello',likesCount: 0 },
            {id: 2, message: `'Hello Hello Hello Hello Hello Hello Hello Hello Hello
                Hello Hello Hello Hello Hello Hello Hello Hello Hello'
                Hello Hello Hello Hello Hello Hello Hello Hello Hello`,likesCount: 0 },
            {id: 3, message: `'Hello Hello Hello Hello Hello Hello Hello Hello Hello
                Hello Hello Hello Hello Hello Hello Hello Hello Hello'
                Hello Hello Hello Hello Hello Hello Hello Hello Hello`,likesCount: 0 },
            {id: 4, message: `'Hello Hello Hello Hello Hello Hello Hello Hello Hello
                Hello Hello Hello Hello Hello Hello Hello Hello Hello'
                Hello Hello Hello Hello Hello Hello Hello Hello Hello`,likesCount: 0 },
            {id: 5, message: `'Hello Hello Hello Hello Hello Hello Hello Hello Hello
                Hello Hello Hello Hello Hello Hello Hello Hello Hello'
                Hello Hello Hello Hello Hello Hello Hello Hello Hello`,likesCount: 0 },
            {id: 6, message: `'Hello Hello Hello Hello Hello Hello Hello Hello Hello
                Hello Hello Hello Hello Hello Hello Hello Hello Hello'
                Hello Hello Hello Hello Hello Hello Hello Hello Hello`,likesCount: 0 },
            {id: 7, message: `'Hello Hello Hello Hello Hello Hello Hello Hello Hello
                Hello Hello Hello Hello Hello Hello Hello Hello Hello'
                Hello Hello Hello Hello Hello Hello Hello Hello Hello`,likesCount: 0 },
            {id: 8, message: `'Hello Hello Hello Hello Hello Hello Hello Hello Hello
                Hello Hello Hello Hello Hello Hello Hello Hello Hello'
                Hello Hello Hello Hello Hello Hello Hello Hello Hello`,likesCount: 0 },
            {id: 9, message: `'Hello Hello Hello Hello Hello Hello Hello Hello Hello
                Hello Hello Hello Hello Hello Hello Hello Hello Hello'
                Hello Hello Hello Hello Hello Hello Hello Hello Hello`,likesCount: 0 },
            {id: 10, message: `'Hello Hello Hello Hello Hello Hello Hello Hello Hello
                Hello Hello Hello Hello Hello Hello Hello Hello Hello'
                Hello Hello Hello Hello Hello Hello Hello Hello Hello`,likesCount: 0 },
            {id: 11, message: `'Hello Hello Hello Hello Hello Hello Hello Hello Hello
                Hello Hello Hello Hello Hello Hello Hello Hello Hello'
                Hello Hello Hello Hello Hello Hello Hello Hello Hello`,likesCount: 0 },
            {id: 12, message: `'Hello Hello Hello Hello Hello Hello Hello Hello Hello
                Hello Hello Hello Hello Hello Hello Hello Hello Hello'
                Hello Hello Hello Hello Hello Hello Hello Hello Hello`,likesCount: 0 },
            {id: 13, message: `'Hello Hello Hello Hello Hello Hello Hello Hello Hello
                Hello Hello Hello Hello Hello Hello Hello Hello Hello'
                Hello Hello Hello Hello Hello Hello Hello Hello Hello`,likesCount: 0 },
            {id: 14, message: `'Hello Hello Hello Hello Hello Hello Hello Hello Hello
                Hello Hello Hello Hello Hello Hello Hello Hello Hello'
                Hello Hello Hello Hello Hello Hello Hello Hello Hello`,likesCount: 0 },
        ],
    },
    info: {
        data: {
            userId: undefined,
            lookingForAJob: undefined,
            fullname: undefined,
            contacts: {},
            photos: {
                small: undefined,
                large: undefined
            }
        },
        status: undefined
    },
    userId: undefined
}

//for changing state in store
export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return addPost(state, action.post)

        case SET_USER_DATA:
            return setUserData(state, action.data)

        case SET_USER_ID:
            return setUserId(state, action.userId)

        case SET_PROFILE_STATUS:
            return { ...state, info: { ...state.info, status: action.status } }

        default:
            return state
    }
}


/*---------------------------------------------------------------------------------*/

let postId = initialState.posts.posts.length

const addPost = (state, post) => {
    spinLogo()

    const newPost = {
        id: postId++,
        message: post,
        likesCount: 0
    }

    return {
        ...state,
        posts: {
            posts: [newPost, ...state.posts.posts],
        }
    }
}

const setUserData = (state, data) => ({ ...state, info: { ...state.info, data } })

const setUserId = (state, userId) => ({ ...state, userId })
