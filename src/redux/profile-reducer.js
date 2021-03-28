import { spinLogo, validate } from '../scripts/scripts';

const ADD_POST = 'ADD-POST'
const UPDATE_POST = 'UPDATE-POST'

const SET_USER_DATA = 'SET_USER_DATA'

//for construct action in components
export const action = {
    posts: {
        addPost() { return { type: ADD_POST } },
        updatePost(message) { return { type: UPDATE_POST, message } }
    },
    info: {
        setUserData(data) { return { type: SET_USER_DATA, data } }
    }
}

//initial value of state
const initialState = {
    posts: {
        posts: [],
        newPost: ''
    },
    info: {
        data: {}
    }
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
        message: state.newPost,
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
