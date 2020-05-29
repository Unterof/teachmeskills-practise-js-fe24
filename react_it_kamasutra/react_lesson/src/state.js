import {rerenderEntireTree} from "./rerender";


let state = {

    dialogs: [

        {name: "Kirill", message: "Hi",  id: "1"},
        {name: "Dmitry", message: "Hello how are you?", id: "2"},
        {name: "Ksenya", message: "I have enough time",  id: "3"},
        {name: "Valery", message: "You need to learn javascript more!",  id: "4"},
        {name: "Zohan", message: "Men you look crazy",  id: "5"}


    ]
    ,
    images : [
        {img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_zwR3aJsWggWSvGsnquu4kvNDLD5tEgwKCnUdA6gOncc52ONO&usqp=CAU"},
        {img: "https://download-cs.net/steam/avatars/3412.jpg"},
        {img: "https://www.meme-arsenal.com/memes/bf0296e8bfa92558d0ca180289194068.jpg"},
        {img: "https://ho8ssabqvb.a.trbcdn.net/wp-content/uploads/2020/12/avatarka.jpg"},
        {img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJknKEP5WOe97hfYTqU8fJqb85IH563YqHxu3960mjxrzRcPT4&usqp=CAU"}

]
    ,

    postsSection:{
        posts:[

        {id:1, message: "Hello, I'm trying to understand prop's in react", likesCount: 5},
        {id:2, message: "Good luck man", likesCount: 24}
        ],

        newPostText :'add message',
    }
}

export let addPost = ()=>{
    let newPost ={
        id: 3,
        message: state.postsSection.newPostText,
        likesCount: 0
    }
    state.postsSection.posts.push(newPost)
    state.postsSection.newPostText = ''
    rerenderEntireTree(state)
}

export let updatePostText = (text) => {
    state.postsSection.newPostText = text;
    rerenderEntireTree(state)
}



export default state;