import PostSection from "../Components/Profile/PostSection/PostSection";
import {addPostActionCreator, onPostChangeActionCreator} from "../redux/profile-reducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {

    return {
        posts : state.postsSection,
        newPostText : state.postsSection.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {

    return {

        addPost: () => {
            dispatch(addPostActionCreator())
        },


        updateNewPostText: (text) => {
            let action = onPostChangeActionCreator(text)
            dispatch(action)
        }

    }
}




const PostSectionContainer = connect(mapStateToProps,mapDispatchToProps)(PostSection)

export default PostSectionContainer;



//---------------старая версия -----------------------
// const PostSectionContainer = () => {
//
//     return (
//         <StoreContext.Consumer>
//             {  store => {
//
//                 let state = store.getState();
//
//                 let addPost = () => {
//
//                     state.dispatch(addPostActionCreator());
//                 }
//
//
//                 let onPostChange = (text) => {
//                     let action = onPostChangeActionCreator(text)
//                     state.dispatch(action);
//                 }
//
//                 return <PostSection updateNewPostText={onPostChange}
//                                     addPost={addPost}
//                                     posts={state.postsSection}
//                                     newPostText={state.postsSection.newPostText}/>
//
//             }
//         }
//
//         </StoreContext.Consumer>
//     )
//
// }