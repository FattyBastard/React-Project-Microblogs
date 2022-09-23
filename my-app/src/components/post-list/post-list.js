import React from 'react';
import PostListItem from '../post-list-item/post-list-item';

const PostList = () => {
    return (
        <ul className='post-list'>
            <PostListItem />
            <PostListItem />
            <PostListItem />
            <PostListItem />
            <PostListItem />
        </ul>
    )
}

export default PostList;