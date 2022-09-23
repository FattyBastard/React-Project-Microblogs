import React from 'react';

const PostAddForm = () => {
    return (
        <form className='d-flex'>
            <input className='form-control add-form-input'
                   placeholder="О чем вы сейчас думаете?"
                   type="text">
            </input>
            <button className='btn btn-outline-secondary'>
                Добавть
            </button>
        </form>
    )
}

export default PostAddForm