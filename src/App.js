import React, { useMemo, useState } from "react";
import "../src/styles/App.css";
import MyModal from "./components/Ui/MyModal/MyModal";
import PostFilter from "./components/PostFilter";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MyButton from "./components/Ui/button/MyButton";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'description' },
    { id: 2, title: 'Phyton', body: 'undescription' },
    { id: 3, title: 'Java', body: 'description' },
    { id: 4, title: 'C++', body: 'undescription' },
    { id: 5, title: 'C#', body: 'description' },
    { id: 6, title: 'Assambler', body: 'undescription' }
  ])

  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false);

  const sortedPosts = useMemo(() => {
    console.log('sorted');
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts;

  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }


  return (
    <div className="App">

      <MyButton onClick={() => setModal(true)}>Добавить пост</MyButton>
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Список постов' />
      <MyModal visible={modal} setVisivle={setModal}>
        <PostForm create={createPost} />
      </MyModal>

    </div>
  )
}

export default App;


