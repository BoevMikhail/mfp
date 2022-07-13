import React, { useEffect, useState } from "react";
import MyModal from "../components/Ui/MyModal/MyModal";
import PostFilter from "../components/PostFilter";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import MyButton from "../components/Ui/button/MyButton";
import { usePosts } from "../hooks/usePosts";
import PostService from "../API/PostService";
import Loader from "../components/Ui/Loader/Loader";
import { useFetching } from "../hooks/useFetching";
import { getPageCount } from "../components/utils/pages";
import Pagination from "../components/Ui/pagination/Pagination";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);


  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  })

  useEffect(() => {
    fetchPosts();
  }, [page])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const changePage = (page) => {
    setPage(page);
  }

  return (
    <div className="App">
      <MyButton onClick={() => setModal(true)}>Добавить пост</MyButton>
      <PostFilter filter={filter} setFilter={setFilter} />
      <Pagination
        changePage={changePage}
        page={page}
        totalPages={totalPages}
      />
      {postError &&
        <h1>Произошла ошибка ${postError}</h1>
      }
      {isPostsLoading
        ? <div style={{ display: 'flex', justifyContent: "center", marginTop: '50' }}>
          <Loader />
        </div>
        : <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Список постов' />}


      <MyModal visible={modal} setVisivle={setModal}>
        <PostForm create={createPost} />
      </MyModal>

    </div>
  )
}

export default Posts;


