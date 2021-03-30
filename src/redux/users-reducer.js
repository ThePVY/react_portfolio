import { spinLogo } from "../scripts/scripts"

const FOLLOW_CLICK = 'FOLLOW_CLICK'
const SHOW_MORE_CLICK = 'SHOW_MORE_CLICK'
const SET_USERS = 'SET_USERS'
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT'
const SET_SELECTED_PAGE = 'SET_SELECTED_PAGE'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const SET_LOADINGS = 'SET_LOADINGS'

export const action = {
    usersList: {
        toggleFollow(userId) { return { type: FOLLOW_CLICK, userId } },
        showMoreClick() { return { type: SHOW_MORE_CLICK } },
        setUsers(users) { return { type: SET_USERS, users } },
        setUsersCount(count) { return { type: SET_USERS_TOTAL_COUNT, count } },
        setSelectedPage(number) { return { type: SET_SELECTED_PAGE, number } },
        toggleIsFetching(isFetching) { return { type: TOGGLE_IS_FETCHING, isFetching } },
        setLoadings(userId, isLoading) { return { type: SET_LOADINGS, userId, isLoading } },
    }
}

let avaSrc = 'https://prikolist.club/wp-content/uploads/2019/06/avatar_kartinki_1_19175708.jpg'

//initial state of users page
const initialState = {
    usersList: [],
    showMore: false,
    pageSize: 10,
    usersTotalCount: 0,
    pagesTotalCount: 1,
    selectedPage: 1,
    isFetching: false,
    loadings: []
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW_CLICK:
            spinLogo()
            return toggleFollow(state, action.userId)

        case SET_USERS:
            return setUsers(state, action.users)

        case SHOW_MORE_CLICK:
            return state

        case SET_USERS_TOTAL_COUNT:
            return setUsersTotalCount(state, action.count)

        case SET_SELECTED_PAGE:
            spinLogo()
            return setSelectedPage(state, action.number)

        case TOGGLE_IS_FETCHING:
            spinLogo()
            return toggleIsFetching(state, action.isFetching)

        case SET_LOADINGS:
            return setLoadings(state, action.userId, action.isLoading)

        default:
            return state
    }
}

/*-----------------------------------------------------------------------------------------------*/

const toggleFollow = (state, userId) => ({
    ...state,
    usersList: state.usersList.map((user) => {
        if (user.id === userId) {
            return { ...user, followed: !user.followed }
        }
        return user
    })
})


const setUsers = (state, users) => ({
    ...state,
    usersList: [...users],
})

const setUsersTotalCount = (state, count) => ({
    ...state,
    usersTotalCount: count,
    pagesTotalCount: Math.ceil(count / state.pageSize)
})

const setSelectedPage = (state, selectedPage) => ({ ...state, selectedPage })

const toggleIsFetching = (state, isFetching) => ({ ...state, isFetching })

const setLoadings = (state, userId, isLoading) => ({
    ...state, loadings: isLoading ? [...state.loadings, userId] : state.loadings.filter(item => item !== userId)
})
