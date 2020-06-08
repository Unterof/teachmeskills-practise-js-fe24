const addPost = 'ADD-POST';
const updatePost = 'UPDATE-POST';
const updateNewMessage = 'UPDATE-NEW-MESSAGE';
const sendMessage = 'SEND_MESSAGE';

let store = {

    _state: {
        dialogsItems: {
            images: [
                {name: "Kirill", img: "/images/avatar/1.jpg"},
                {name: "Dmitry", img: "/images/avatar/2.jpg"},
                {name: "Ksenya", img: "/images/avatar/3.jpg"},
                {name: "Valery", img: "/images/avatar/4.jpg"},
                {name: "Zohan", img: "/images/avatar/5.jpg"}


            ]
            ,
            dialogs: [

                {name: "Kirill", message: "Hi", id: 1},
                {name: "Dmitry", message: "Hello how are you?", id: 2},
                {name: "Ksenya", message: "I have enough time", id: 3},
                {name: "Valery", message: "You need to learn javascript more!", id: 4},
                {name: "Zohan", message: "Men you look crazy", id: 5},


            ],

            newMessageItem: '',


        },
        postsSection: {
            posts: [

                {id: 1, message: "Hello, I'm trying to understand prop's in react", likesCount: 5},
                {id: 2, message: "Good luck man", likesCount: 24}
            ],

            newPostText: 'add post',
        },
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {

        return this._state
    },


    subscriber(listener) {
        this._callSubscriber = listener
    },

    dispatch(action) {
        if (action.type === addPost) {
            let newPost = {
                id: 3,
                message: this._state.postsSection.newPostText,
                likesCount: 0
            };
            this._state.postsSection.posts.push(newPost);
            this._state.postsSection.newPostText = '';
            this._callSubscriber(this._state)
        } else if (action.type === updatePost) {
            this._state.postsSection.newPostText = action.newText;
            this._callSubscriber(this._state)
        } else if (action.type === updateNewMessage) {
            this._state.dialogsItems.newMessageItem = action.item;
            this._callSubscriber(this._state)

        } else if (action.type === sendMessage) {
            let item = this._state.dialogsItems.newMessageItem;
            this._state.dialogsItems.newMessageItem = '';
            let dialogItem = {
                name: 'Petruha',
                message: item,
                id: 6
            };

            this._state.dialogsItems.dialogs.push(dialogItem);

            this._callSubscriber(this._state)
        }

    }


}

export const addPostActionCreator = () => {
    return (
        {
            type: addPost
        }
    )

}


export const onPostChangeActionCreator = (text) => {
    return ({
        type: updatePost, newText: text
    })
}

export const updateNewMessageCreator = (item) => {
    return ({
        type: updateNewMessage, item: item
    })
}

export const sendMessageCreator = () => {
    return ({
        type: sendMessage
    })
}
export default store;


// ---------------------------Варианты функций --------------------------------------

// addPost() {
//
//     let newPost = {
//         id: 3,
//         message: this._state.postsSection.newPostText,
//         likesCount: 0
//     };
//     this._state.postsSection.posts.push(newPost);
//     this._state.postsSection.newPostText = '';
//     this._callSubscriber(this._state)
// },
// updatePostText(text) {
//
//     this._state.postsSection.newPostText = text;
//     this._callSubscriber(this._state)
// },


//-------------------- Варианты с картинок с прямыми ссылками ----------------------------

// {img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_zwR3aJsWggWSvGsnquu4kvNDLD5tEgwKCnUdA6gOncc52ONO&usqp=CAU"},
// {img: "https://download-cs.net/steam/avatars/3412.jpg"},
// {img: "https://www.meme-arsenal.com/memes/bf0296e8bfa92558d0ca180289194068.jpg"},
// {img: "https://ho8ssabqvb.a.trbcdn.net/wp-content/uploads/2020/12/avatarka.jpg"},
// {img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJknKEP5WOe97hfYTqU8fJqb85IH563YqHxu3960mjxrzRcPT4&usqp=CAU"}