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
            addPost(state)
            return state
        case UPDATE_POST:
            updatePost(state, action.message)
            return state
        default:
            return state
    }
}


/*---------------------------------------------------------------------------------*/

let postId = 1

const addPost = (state) => {
    if (!validate(state.newPost))
        return

    const newPost = {
        id: postId,
        message: state.newPost,
        likesCount: 0
    };
    state.posts.unshift(newPost)
    state.newPost = ''
    spinLogo()
}

const updatePost = (state, message) => {
    state.newPost = message;
}