import React from 'react';
import PostListItem from '../post-list-item/post-list-item';

const PostList = ({posts}) => {
    const elements = posts.map((item) => {
        return (
            <li>
                <PostListItem
                label = {item.label}
                important = {item.important}/>

            </li>
        )
    });
    return (
        <ul className='post-list'>
            {elements}
        </ul>
    )
}

export default PostList;