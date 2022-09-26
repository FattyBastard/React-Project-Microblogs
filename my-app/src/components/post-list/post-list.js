import React, {Component} from 'react';
import PostListItem from '../post-list-item/post-list-item';

export default class PostList extends Component{

    constructor(props){
        super(props);
    }

    render(){
        const {posts, deleteItem, toggleImportant, toggleLike} = this.props;

        const elements = posts.map((item) => {
            return (      
                <li key={item.id}>
                    <PostListItem
                        label = {item.label}
                        state = {item.state}
                        deleteItem = {deleteItem}
                        toggleLike = {toggleLike}
                        toggleImportant = {toggleImportant}
                        like = {item.like}
                        id = {item.id}
                    />
                </li>
            )
        });
        return (
            <ul className='post-list'>
                {elements}
            </ul>
        )
    }
}

