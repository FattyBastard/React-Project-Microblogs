import React, {Component} from 'react';


export default class PostListItem extends Component{
    constructor(props){
        super(props); 
        
    }

    render(){
        let btnImportant = 'btn';
        let btnLike = 'btn';
        const {label, deleteItem, id, like, state, toggleLike, toggleImportant} = this.props;

        if (state){
            btnImportant += ' important';
        }

        if (like){
            btnLike += " liked";
        }

        return (
            <div className='d-flex justify-content-between border-for spaces'>
                <span className='list-item-data align-items-center '>{label}</span>
                <div>
                    <button onClick={() => deleteItem(id)} className='btn'>
                        <i className='fa fa-trash'></i>
                    </button>
                    <button className={btnImportant} onClick={() => toggleImportant(id)}>
                        <i className='fa fa-star'></i>
                    </button>
                    <button className={btnLike} onClick={() => toggleLike(id)}>
                        <i className='fa fa-heart'></i>
                    </button>
                </div>
            </div>    
        )
    }

}


