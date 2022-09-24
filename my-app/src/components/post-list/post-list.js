import React, {Component} from 'react';
import PostListItem from '../post-list-item/post-list-item';

export default class PostList extends Component{
    constructor(props){
        super(props);

    }

    render(){
        const {posts, deleteItem} = this.props;
        const elements = posts.map((item) => {
            return (      
                <li>
                    <PostListItem
                        label = {item.label}
                        important = {item.state}
                        deleteItem = {deleteItem}
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

