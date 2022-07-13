import React, { useMemo, useState } from "react";
import "../src/styles/App.css";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyInput from "./components/Ui/input/MyInput";
import MySelect from "./components/Ui/selecet/MySelect";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'description' },
    { id: 2, title: 'Phyton', body: 'undescription' },
    { id: 3, title: 'Java', body: 'description' },
    { id: 4, title: 'C++', body: 'undescription' },
    { id: 5, title: 'C#', body: 'description' },
    { id: 6, title: 'Assambler', body: 'undescription' }
  ])

  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearcQuary] = useState('');

  const sortedPosts = useMemo(() => {console.log('sorted');
  if(selectedSort) {
    return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
  }
  return posts;

  }, [selectedSort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()))
  }, [searchQuery, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }


  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '10px 0' }} />
      <div>

        <MyInput
          placeholder='Поиск'
          value={searchQuery}
          onChange={e => setSearcQuary(e.target.value)}
        />

        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Сортировка"
          options={
            [{ value: 'title', name: 'По названию' },
            { value: 'body', name: 'По описанию' }

            ]
          }
        />
      </div>
      {sortedAndSearchedPosts.length ?
        <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Список постов' /> :
        <div>Нет постов</div>
      }

    </div>
  )
}

export default App;


