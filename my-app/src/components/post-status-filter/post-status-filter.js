import React, {Component} from 'react';


export default class PostStatusFilter extends Component{
    constructor(props){
        super(props);
        this.state = {};

        this.showAllPosts = this.showAllPosts.bind(this);
        this.showAllLikes = this.showAllLikes.bind(this);
    }
    showAllPosts(){
        console.log("showAllPosts");
    }

    showAllLikes(){
        console.log("showAllLikes");
    }


    render(){
        return(
            <div className='btn-group'>
            <button onClick={this.showAllPosts} className='btn btn-outline-secondary'>Все</button>
            <button onClick={this.showAllLikes} className='btn btn-outline-secondary'>Понравилось</button>
        </div>)
    }
}


