import React from 'react';

const PostListItem = () => {
    return (
        <li className='d-flex justify-content-between'>
            <span className='list-item-data align-items-center '>Hello world</span>
            <div>
                <button>trash</button>
                <button>heart</button>
                <button>star</button>
            </div>
        </li>    
    )
}

export default PostListItem;