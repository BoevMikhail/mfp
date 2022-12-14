import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import PostItem from './PostItem'

const PostList = ({ posts, title, remove }) => {
    if (posts.length === 0) {

        return (
            <h1>Нет постов</h1>
        )
    }
    return (
        <div className='PostList'>
            <h1 style={{ textAlign: 'center' }}>{title}</h1>
            <TransitionGroup>
                {posts.map((post, index) => (
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"

                    >
                        <PostItem remove={remove} number={index + 1} post={post}/>
                    </CSSTransition>)
                )}
            </TransitionGroup>
        </div>
    )
}

export default PostList