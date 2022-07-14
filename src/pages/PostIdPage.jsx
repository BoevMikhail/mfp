import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PostService from '../API/PostService';
import Loader from '../components/Ui/Loader/Loader';
import { useFetching } from '../hooks/useFetching';

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading] = useFetching(async (id) => {
        const response = await PostService.getById(id);
        setPost(response.data);
    })
    const [fetchCommnetById, isCommentLoading] = useFetching(async (id) => {
        const response = await PostService.getComments(id);
        setComments(response.data);
    })

    useEffect(() => {
        fetchPostById(params.id);
        fetchCommnetById(params.id);
    }, [])

    return (
        <div>
            <h1>
                Страница поста с ID = {params.id}
            </h1>
            <div>
                {isLoading
                    ? <Loader />
                    : <div>{post.id}. {post.title} <br />{post.body}</div>
                }
            </div>
            {isCommentLoading
                ? <Loader />
                : <div>
                    {comments.length
                        ? comments.map((comment, index) => (
                            <div style={{margin: 15}}><div>Author: <b>{comment.email}</b></div><div>Comment {index + 1}: {comment.body}</div></div>))
                        : <div>Нет комментариев</div>
                    }
                </div>
            }
        </div>
    )
}

export default PostIdPage
