function Store() {
    let _renderEntireTree = null;
    const _state = {
        profile: {
            posts: [

            ],
            newPost: '',
            callbacks: {
                addPost() {
                    const newPost = {
                        message: _state.profile.newPost,
                        likesCount: 0
                    };
                    _state.profile.posts.unshift(newPost);
                    _state.profile.newPost = '';
                    _renderEntireTree();
                },
                updatePost(message) {
                    _state.profile.newPost = message;
                    _renderEntireTree();
                }
            }
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

    Store.prototype.subscribe = function (observer) {
        _renderEntireTree = observer;
    };
    
    Store.prototype.render = function() {
        _renderEntireTree();
    }
    
    Store.prototype.getState = function () {
        return _state;
    };
    
    Store.prototype.setState = function (state) {
        _state = state;
    };
}

const store = new Store();

export default store;