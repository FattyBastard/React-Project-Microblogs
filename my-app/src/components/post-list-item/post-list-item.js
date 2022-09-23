import React from 'react';

const PostListItem = () => {
    return (
        <li className='d-flex justify-content-between border-for spaces'>
            <span className='list-item-data align-items-center '>Hello world</span>
            <div>
                <button className='btn'>
                    <i className='fa fa-trash'></i>
                </button>
                <button className='btn'>
                    <i className='fa fa-star'></i>
                </button>
                <button className='btn'>
                    <i className='fa fa-heart'></i>
                </button>
            </div>
        </li>    
    )
}

export default PostListItem;