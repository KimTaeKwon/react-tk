import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../ui/Button';
import TextInput from '../ui/TextInput';

const PostWritePage = (props) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <div>
      <div>
        <TextInput 
        height={20}
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
        ></TextInput>

        <TextInput 
        height={380}
        value={content}
        onChange={(event) => {
          setContent(event.target.value);
        }}
        ></TextInput>

        <Button 
        title='글 작성하기' 
        onClick={() => {
          navigate('/');
        }}
        ></Button>
      </div>
    </div>
  )
}

export default PostWritePage