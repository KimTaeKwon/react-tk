import React from "react";

const Wrapper = (props) => {
  return(
    <div className="commentListItem">{props.children}</div>
  );
};

const ContentText = (props) => {
    return(
      <p>{props.children}</p>
    );
};

function CommentListItem(props) {
  const {comment} = props;

  return (
    <Wrapper>
        <ContentText>{comment.content}</ContentText>
    </Wrapper>
  );
}
export default CommentListItem;