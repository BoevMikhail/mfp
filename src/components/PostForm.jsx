import React, {useState} from 'react'
import MyButton from "./Ui/button/MyButton";
import MyInput from "./Ui/input/MyInput";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''});
    
    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
          ...post, id: Date.now().toString().slice(-2)
        }
        create(newPost)
        setPost({title: '', body: ''})
      }  

    return (
        <form className="AddForm">
            <fieldset className="BlockPost">
            <legend>Добавление поста</legend>
            <MyInput placeholder='Название поста' value={post.title} onChange={event => setPost({...post, title: event.target.value})}/>
            <MyInput placeholder='Название поста' value={post.body} onChange={event => setPost({...post, body: event.target.value})}/>
            <MyButton onClick={addNewPost}>Нажми меня!!!</MyButton>
            </fieldset>
        </form>
    )
}

export default PostForm