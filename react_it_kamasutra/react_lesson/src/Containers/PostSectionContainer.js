import PostSection from "../Components/Profile/PostSection/PostSection";
import {addPostActionCreator} from "../redux/profile-reducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {

    return {
        posts : state.postsSection.posts,
        newPostText : state.postsSection.newPostText
    }
}






const PostSectionContainer = connect(mapStateToProps,{addPostActionCreator})(PostSection)

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