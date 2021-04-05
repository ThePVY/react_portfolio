

const selecror = {
    app: {
        getInitialized: state => state.app.initialized
    },
    auth: {
        getAuthId: state => state.auth.data.id,
        getLogin: state => state.auth.data.login,
        getIsAuthorized: state => state.auth.isAuthorized
    },
    dialogs: {
        getDialogs: state => state.dialogs,
        getDialogsList: state => state.dialogs.dialogsList
    },
    profile: {
        getData: state => state.profile.info.data,
        getStatus: state => state.profile.info.status,
        getPhotos: state => state.profile.info.data.photos,
        getPosts: state => state.profile.posts,
        getUserId: state => state.profile.userId
    },
    users: {
        getUsersList: state => state.users.usersList,
        getPagesCount: state => state.users.pagesTotalCount,
        getSelectedPage: state => state.users.selectedPage,
        getIsFetching: state => state.users.isFetching,
        getLoadings: state => state.users.loadings
    }
}

export default selecror
