import { spinLogo, validate } from './scripts';

const ADD_POST = 'ADD-POST'
const UPDATE_POST = 'UPDATE-POST'

//for construct action in components
export const action = {
    addPost() { return { type: ADD_POST } },
    updatePost(text) { return { type: UPDATE_POST, message: text } },
}

//initial value of state
const initialState = {
    posts: [],
    newPost: ''
}

//for changing state in store
export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return addPost(state)
        case UPDATE_POST:
            return updatePost(state, action.message)
        default:
            return state
    }
}


/*---------------------------------------------------------------------------------*/

let postId = 1

const addPost = (state) => {
    if (!validate(state.newPost)) return state

    spinLogo()
    
    const newPost = {
        id: postId,
        message: state.newPost,
        likesCount: 0
    }

    return {
        ...state,
        posts: [ newPost, ...state.posts ],
        newPost: ''
    }
}

const updatePost = (state, message) => {
    return {
        ...state,
        newPost: message
    }
}
