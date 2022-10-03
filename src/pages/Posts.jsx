import React, { useEffect, useState, useRef } from "react";
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
import { useObserver } from "../hooks/useObserver";
import MySelect from "../components/Ui/selecet/MySelect";

function Posts() {
	const [posts, setPosts] = useState([]);
	const [filter, setFilter] = useState({ sort: "", query: "" });
	const [modal, setModal] = useState(false);
	const [totalPages, setTotalPages] = useState(0);
	const [limit, setLimit] = useState(10);
	const [page, setPage] = useState(1);
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
	const lastElement = useRef();

	const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
		const response = await PostService.getAll(limit, page);
		setPosts([...posts, ...response.data]);
		const totalCount = response.headers["x-total-count"];
		setTotalPages(getPageCount(totalCount, limit));
	});

	useObserver(lastElement, page < totalPages, isPostsLoading, () =>
		setPage(page + 1)
	);

	useEffect(() => {
		fetchPosts();
	}, [page, limit]);

	const createPost = (newPost) => {
		setPosts([...posts, newPost]);
		setModal(false);
	};

	const removePost = (post) => {
		setPosts(posts.filter((p) => p.id !== post.id));
	};

	const changePage = (page) => {
		setPage(page);
	};

	return (
		<div className="App">
			<MyButton onClick={() => setModal(true)}>Добавить пост</MyButton>
			<PostFilter filter={filter} setFilter={setFilter} />
			<MySelect
				value={limit}
				onChange={(value) => setLimit(value)}
				defaultValue="Количество элементов на странице"
				options={[
					{ value: 5, name: "5" },
					{ value: 10, name: "10" },
					{ value: 25, name: "25" },
					{ value: -1, name: "Показать всё" },
				]}
			/>
			{postError && <h1>Произошла ошибка ${postError}</h1>}

			<PostList
				remove={removePost}
				posts={sortedAndSearchedPosts}
				title="Список постов"
			/>
			<div ref={lastElement} style={{ height: 50 }}></div>
			{isPostsLoading && (
				<div
					style={{ display: "flex", justifyContent: "center", marginTop: "50" }}
				>
					<Loader />
				</div>
			)}

			<MyModal visible={modal} setVisivle={setModal}>
				<PostForm create={createPost} />
			</MyModal>
		</div>
	);
}

export default Posts;
