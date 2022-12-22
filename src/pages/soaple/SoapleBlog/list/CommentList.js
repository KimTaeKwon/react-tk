import React from "react";
import CommentListItem from "./CommentListItem";

const Wrapper = (props) => {
  return(
    <div></div>
  );
};

const TitleText = (props) => {
    return(
      <p></p>
    );
};

function CommentList(props) {
    const {comments} = props;

  return (
    <div className="commentList">
        {comments.map((comment, index) => {
            return(
              <CommentListItem key={comment.id} comment={comment}></CommentListItem>
            );
        })}
    </div>
  );
}
export default CommentList;