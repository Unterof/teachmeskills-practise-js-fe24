import profileReducer, {addPostActionCreator} from "./profile-reducer";


it('length will be more',() => {
    let action = addPostActionCreator('New post text');
    let state = {
        posts: [

            {id: 1, message: "Hello, I'm trying to understand prop's in react", likesCount: 5},
            {id: 2, message: "Good luck man", likesCount: 24}
        ],
    }
    let newState = profileReducer(state, action)


    expect(newState.posts.length).toBe(3)
})