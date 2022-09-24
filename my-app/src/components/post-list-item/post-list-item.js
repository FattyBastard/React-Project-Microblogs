import React, {Component} from 'react';


export default class PostListItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            important: false
        };
        this.switchImportant = this.switchImportant.bind(this);
    }
    switchImportant(){
        this.setState(({important}) => ({
            important: !important
        }));
    }

    render(){
        let classNames = 'd-flex justify-content-between border-for spaces';
        const {label, deleteItem} = this.props;

        if (this.state.important){
            classNames += ' important';
        }
        return (
            <div className={classNames}>
                <span className='list-item-data align-items-center '>{label}</span>
                <div>
                    <button onClick={deleteItem} className='btn'>
                        <i className='fa fa-trash'></i>
                    </button>
                    <button className='btn' onClick={this.switchImportant}>
                        <i className='fa fa-star'></i>
                    </button>
                    <button className='btn'>
                        <i className='fa fa-heart'></i>
                    </button>
                </div>
            </div>    
        )
    }

}


