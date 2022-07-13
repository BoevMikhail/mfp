import React from 'react'
import MyButton from "./Ui/button/MyButton";

export default function PostItem(props) {
  return (
    <div className='post'>
      <div className='post__content'>
          <strong>{props.number}. {props.post.title}</strong>
          <p>{props.post.body}</p>     
      </div>      
      <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>  
    </div>
  )
}
