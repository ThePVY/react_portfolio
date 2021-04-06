import { usersAPI } from "../api/users-api"
import { spinLogo } from "../scripts/scripts"

const FOLLOW_CLICK = 'FOLLOW_CLICK'
const SHOW_MORE_CLICK = 'SHOW_MORE_CLICK'
const SET_USERS = 'SET_USERS'
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT'
const SET_SELECTED_PAGE = 'SET_SELECTED_PAGE'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const SET_LOADINGS = 'SET_LOADINGS'

export const actionCreator = {
    usersList: {
        toggleFollow: userId => ({ type: FOLLOW_CLICK, userId }),
        showMoreClick: () => ({ type: SHOW_MORE_CLICK }),
        setUsers: users => ({ type: SET_USERS, users }),
        setUsersCount: count => ({ type: SET_USERS_TOTAL_COUNT, count }),
        setSelectedPage: number => ({ type: SET_SELECTED_PAGE, number }),
        toggleIsFetching: isFetching => ({ type: TOGGLE_IS_FETCHING, isFetching }),
        setLoadings: (userId, isLoading) => ({ type: SET_LOADINGS, userId, isLoading })
    }
}

export const getUsersAC = () => actionCreator

export const thunkCreator = {
    getUsers(p) {
        return dispatch => {
            dispatch(actionCreator.usersList.toggleIsFetching(true))
            return usersAPI.getUsers(p)
                .then((data) => {
                    dispatch(actionCreator.usersList.setUsers(data.items))
                    dispatch(actionCreator.usersList.setUsersCount(data.totalCount))
                    dispatch(actionCreator.usersList.toggleIsFetching(false))
                })
                .catch(() => {
                    dispatch(actionCreator.usersList.toggleIsFetching(false))
                })
        }
    },
    setFollow(userId, followed) {
        return dispatch => {
            dispatch(actionCreator.usersList.toggleIsFetching(true))
            dispatch(actionCreator.usersList.setLoadings(userId, true))
            usersAPI.followRequest(userId, followed)
                .then((data) => {
                    dispatch(actionCreator.usersList.toggleIsFetching(false))
                    dispatch(actionCreator.usersList.setLoadings(userId, false))
                    if (!data.resultCode) dispatch(actionCreator.usersList.toggleFollow(userId))
                })
                .catch(() => {
                    dispatch(actionCreator.usersList.toggleIsFetching(false))
                    dispatch(actionCreator.usersList.setLoadings(userId, false))
                })
        }
    }
}

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
