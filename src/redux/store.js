import headerStyles from './../components/Header/Header.module.css'

const spinLogo = () => {
    const logo = document.querySelector(`.${headerStyles.header} img`);
    logo.classList.add(headerStyles.spin);
    setTimeout(() => {
        logo.classList.remove(headerStyles.spin);
    }, 1500);
};

const state = {
    profile: {
        posts: [

        ],
        newPost: ''
    },
    dialogs: {
        dialogsList: [
            { name: 'Ksysha', id: 1, preview: 'Hi' },
            { name: 'Grisha', id: 2, preview: 'Hi' },
            { name: 'Porosyonok', id: 3, preview: 'Hi' },
            { name: 'Dimych', id: 4, preview: 'Hi' },
            { name: 'Sveta', id: 5, preview: 'Hi' },
            { name: 'Ksysha', id: 6, preview: 'Hi' },
            { name: 'Kotleta', id: 7, preview: 'Hi' },
        ],
        messages: [
            { id: 1, message: `Hi from 1!`, my: true },
            { id: 2, message: `Hi from 2!` },
            { id: 3, message: `Hi from 3!`, my: true },
            { id: 4, message: `Hi from 4!` },
            { id: 1, message: `Hi from 1!` },
            { id: 3, message: `Hi from 3!` },
        ]
    }
};

const callbacks = function(state) {
    return {
        profile: {
            addPost() {
                const newPost = {
                    message: state.profile.newPost,
                    likesCount: 0
                };
                state.profile.posts.unshift(newPost);
                state.profile.newPost = '';
                spinLogo();
                Store.prototype.render();
            },
            updatePost(message) {
                state.profile.newPost = message;
                Store.prototype.render();
            }
        }
    };
};



function Store(store, callbacks) {
    let _renderEntireTree = null;
    const _state = store;
    const _callbacks = callbacks(_state);
    

    Store.prototype.subscribe = function (observer) {
        _renderEntireTree = observer;
    };

    Store.prototype.render = function () {
        _renderEntireTree();
    }

    this.getState = function () {
        return _state;
    }

    this.getCallbacks = function () {
        return _callbacks;
    }
}



const store = new Store(state, callbacks);

export default store;