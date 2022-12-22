import React from "react";

// const Wrapper = () => {
//   return(
//     <div className="postListItem"></div>
//   );
// };

// const TitleText = (props) => {
//     return(
//       <p className="titleText"></p>
//     );
// };

function PostListItem(props) {
    const {post, onClick} = props;
    return (
        <div className="postListItem" onClick={onClick}>
        <p className="titleText">{post.title}</p>
        </div>
    );
}
export default PostListItem;