
const FOLLOW_CLICK = 'FOLLOW_CLICK'
const SHOW_MORE_CLICK = 'SHOW_MORE_CLICK'
const SET_USERS = 'SET_USERS' 

export const action = {
    followClick(userId) { return { type: FOLLOW_CLICK, userId: userId } },
    showMoreClick() { return { type: SHOW_MORE_CLICK } },
    setUsers(users) { return { type: SET_USERS, users: users } }
}

let avaSrc = 'https://prikolist.club/wp-content/uploads/2019/06/avatar_kartinki_1_19175708.jpg'

//initial state of users page
const initialState = {
    usersList: [],
    showMore: false
}

export const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW_CLICK:
            return followClick(state, action.userId)

        case SET_USERS:
            return setUsers(state, action.users)
            
        case SHOW_MORE_CLICK:
            return state

        default:
            return state
    }
}

/*-----------------------------------------------------------------------------------------------*/

const followClick = (state, userId) => {
    return {
        ...state,
        usersList: state.usersList.map((user) => {
            if(user.id === userId) {
                //user.followed = !user.followed;
                return { ...user, followed: !user.followed }  //чтобы не изменять user.followed напрямую (не грязнить функцию)
            }
            return user
        })
    }
}


const setUsers = (state, users) => {
    return {
        ...state,
        usersList: [ ...state.usersList, ...users ]
    }
}


