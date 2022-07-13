import React from 'react'
import PostItem from './PostItem'

const PostList = ({ posts, title, remove }) => {
    if( posts.length === 0) {

        return (
            <h1>Нет постов</h1>
        )
    }
    return (
        <div className='PostList'>
            <h1 style={{ textAlign: 'center' }}>{title}</h1>
            {posts.map((post, index) =>
                <PostItem remove={remove} number={index + 1} post={post} key={post.id} />
            )}
        </div>
    )

}

export default PostList