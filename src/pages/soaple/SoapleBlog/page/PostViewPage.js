import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import CommentList from "../list/CommentList";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
import data from "../data.json";

const PostViewPage = (props) => {
    const navigate = useNavigate();
    const {postId} = useParams();
    const post = data.find((item) => {
        return item.id == postId;
    });
    const [comment, setComment] = useState('');
  return (
    <div className='postViewPage'>
        <Button 
        title='뒤로가기'
        onClick={() => {
            navigate('/');
        }}>
        </Button>
        
        <div className='postContainer'>
            <p>{post.title}</p>
            <p>{post.content}</p>
        </div>

        <p>댓글</p>
        <CommentList comments={post.comments}></CommentList>

        <TextInput 
        height={40} 
        value={comment}
        onChange={(event)=>{
            setComment(event.target.value);
        }}
        ></TextInput>
        <Button 
        title='댓글 작성하기'
        onClick={() => {
            navigate('/');
        }}>
        </Button>
    </div>
  )
}


export default PostViewPage