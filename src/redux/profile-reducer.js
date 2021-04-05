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
        posts: [],
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

let postId = 1

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
