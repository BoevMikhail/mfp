import React from 'react'
import MyButton from "./Ui/button/MyButton";
import { useNavigate } from 'react-router-dom'

export default function PostItem(props) {
  const router = useNavigate();
  return (
    <div className='post'>
      <div className='post__content'>
          <strong>{props.post.id}. {props.post.title}</strong>
          <p>{props.post.body}</p>     
      </div>      
      <MyButton onClick={() => router(`/posts/${props.post.id}`)}>Открыть</MyButton>  
      <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>  
    </div>
  )
}
