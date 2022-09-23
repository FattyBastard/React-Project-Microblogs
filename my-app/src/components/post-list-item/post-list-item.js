import React from 'react';

const PostListItem = () => {
    return (
        <li className='d-flex justify-content-between border-for spaces'>
            <span className='list-item-data align-items-center '>Hello world</span>
            <div>
                <button className='btn'>trash</button>
                <button className='btn'>heart</button>
                <button className='btn'>star</button>
            </div>
        </li>    
    )
}

export default PostListItem;